import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {getReverseGeoCoding} from '@/components/common/map'
import MapGL from '@/components/organisms/StoreLocator/MapView/MapGL.jsx'
import {MAPBOX} from '@/config'
import {isGeoState} from '@/config/'
import {CURRENT_GEO_STATE, GEOSTATE} from '@/config/constant'
import debounce from 'lodash/debounce'
import {useEffect, useRef, useState} from 'react'
import AddressPin from './AddressPin.jsx'
import {LocationClusterLayer} from './LocationsClusterLayer'

/**
 *
 * @param props0
 * @param props0.height
 */
export default function MapTab({height}) {
  const {
    stateValues: switcherStateValues,
    activeTab,
    mapInteractedByuser,
    pickupSelectedStore,
    deliveryAddress
  } = storeSwitcherController.useState([
    'pickupSelectedStore',
    'activeTab',
    'deliveryLatitude',
    'deliveryLongitude',
    'mapZoom',
    'mapInteractedByuser',
    'deliveryAddress'
  ])
  const [isMouseOnMap, setIsMouseOnMap] = useState(false)

  const mapboxGL = useRef()
  const defaultViewport = MAPBOX[CURRENT_GEO_STATE].DEFAULT_VIEW_PORT
  const [viewPort, setViewPort] = useState({
    latitude: defaultViewport.latitude,
    longitude: defaultViewport.longitude,
    zoom: defaultViewport.zoom,
    bearing: 0,
    pitch: 0,
    ...(isGeoState(GEOSTATE.FLORIDA)
      ? {
          maxBounds: defaultViewport.maxBounds
        }
      : {})
  })

  useEffect(() => {
    if (switcherStateValues.mapInteractedByuser) return
    setTimeout(() => {
      if (switcherStateValues?.activeTab === 'pickup') {
        mapboxGL?.current?.flyTo({
          center: [Number(switcherStateValues?.pickupSelectedStore?.nap?.lng), Number(switcherStateValues?.pickupSelectedStore?.nap?.lat)],
          zoom: 10.5
        })
      } else {
        if (
          (switcherStateValues?.activeTab === 'delivery' || switcherStateValues?.activeTab == 'address') &&
          switcherStateValues.deliveryLongitude &&
          switcherStateValues.deliveryLatitude
        ) {
          mapboxGL?.current?.flyTo({
            center: [switcherStateValues.deliveryLongitude, switcherStateValues.deliveryLatitude],
            zoom: 12
          })
        } else {
          mapboxGL?.current?.flyTo({
            center: [defaultViewport.longitude, defaultViewport.latitude],
            zoom: defaultViewport.zoom
          })
        }
      }
    }, 1000)
  }, [activeTab, mapInteractedByuser, pickupSelectedStore, deliveryAddress])

  const _onViewportChange = (event) => {
    const viewport = event.viewState
    setViewPort({
      ...viewport
    })
    if (event.originalEvent && (switcherStateValues?.activeTab === 'delivery' || switcherStateValues?.activeTab == 'address')) {
      storeSwitcherController.update({mapInteractedByuser: true})
      searchDeliveryStore(viewport)
    }
  }

  const searchDeliveryStore = useRef(
    debounce(async (viewport) => {
      const reverseGeoCoding = await getReverseGeoCoding(viewport.longitude, viewport.latitude)
      storeSwitcherController.findAndSelectDeliveryStore(reverseGeoCoding, 'map')
      storeSwitcherController.update({deliveryLatitude: viewport.latitude, deliveryLongitude: viewport.longitude, mapZoom: viewport.zoom})
    }, 1000)
  ).current

  const onMouseMove = () => {
    if (!isMouseOnMap) setIsMouseOnMap(true)
  }

  return (
    <MapGL
      reference={mapboxGL}
      _onViewportChange={_onViewportChange}
      onMouseMove={onMouseMove}
      setIsMouseOnMap={setIsMouseOnMap}
      viewport={viewPort}
      height={height}
      hideControls={true}
    >
      <>
        {(switcherStateValues?.activeTab === 'delivery' || switcherStateValues?.activeTab === 'address') && (
          <AddressPin latitude={viewPort.latitude} longitude={viewPort.longitude} />
        )}
        <LocationClusterLayer mapRef={mapboxGL} />
      </>
    </MapGL>
  )
}
