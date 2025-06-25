import {appController} from '@/components/common/hooks/hookstate/appController'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {CURRENT_BRAND} from '@/config/constant'
import {useEffect, useState} from 'react'
// import {Layer, Source} from 'react-map-gl'

const theme = {
  ZLD: {
    circleColor: '#000000',
    textColor: 'white',
    locationPin: '/assets/images/zld-rec-pin.png'
  },
  MUV: {
    circleColor: 'rgb(255, 146, 100)',
    textColor: 'black',
    locationPin: '/assets/images/muv-pin.png'
  }
}
export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'store-locations',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': theme[CURRENT_BRAND].circleColor,
    'circle-stroke-color': '#FFFFFF', // White border
    'circle-stroke-width': 2, // Width of the border
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
}

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'store-locations',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 24
  },
  paint: {
    'text-color': theme[CURRENT_BRAND].textColor
  }
}
export const unclusteredPinsLayer = {
  id: 'unclustered-pin',
  type: 'symbol',
  source: 'store-locations',
  filter: ['!', ['has', 'point_count']],
  layout: {
    'icon-image': 'location-pin', // Specify the custom location pin icon image
    'icon-size': 1, // Adjust icon size if needed
    'icon-anchor': 'bottom' // Adjust icon anchor if needed
  }
}

export const LocationClusterLayer = ({mapRef}) => {
  const {stateValues: appStateValues, allStoreLocations} = appController.useState(['allStoreLocations'])
  const [geojsonData, setGeojsonData] = useState(null)

  useEffect(() => {
    const geojsonFeatures = appStateValues?.allStoreLocations.map((location, index) => ({
      type: 'Feature',
      properties: {
        id: index
      },
      geometry: {
        type: 'Point',
        coordinates: [location.nap.lng, location.nap.lat]
      }
    }))

    // Assemble the GeoJSON object
    const geojson = {
      type: 'FeatureCollection',
      features: geojsonFeatures
    }

    // Set the GeoJSON data to state
    setGeojsonData(geojson)
  }, [allStoreLocations])

  useEffect(() => {
    const map = mapRef?.current?.getMap()
    if (map) {
      map.loadImage(theme[CURRENT_BRAND].locationPin, (error, image) => {
        if (error) throw error
        if (!map.hasImage('location-pin')) map.addImage('location-pin', image, {sdf: false})
      })

      // Attach click event listener to unclustered-point layer
      map.on('click', 'unclustered-pin', function (e) {
        const feature = e.features[0]
        const properties = feature.properties
        if (properties.id) {
          storeSwitcherController.selectPickupStore(appStateValues?.allStoreLocations[properties.id])
          storeSwitcherController.switchActiveTab('pickup')
        }
      })
    }
  }, [mapRef])

  if (!geojsonData) return null // Wait until GeoJSON data is ready

  return (
    <Source id="store-locations" type="geojson" data={geojsonData} cluster={true} clusterMaxZoom={14} clusterRadius={50}>
      <Layer {...clusterLayer} />
      <Layer {...clusterCountLayer} />
      <Layer {...unclusteredPinsLayer} />
    </Source>
  )
}
