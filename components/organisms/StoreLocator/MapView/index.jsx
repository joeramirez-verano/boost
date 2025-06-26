import {appController} from '@/components/common/hooks/hookstate/appController'
import MapGL from '@/components/HeaderZld/StoreSwitcherModal/MapView/MapGL'
import MuvfPin from '@/components/HeaderZld/StoreSwitcherModal/MapView/MuvfPin'
import Pin from '@/components/HeaderZld/StoreSwitcherModal/MapView/pin'
import SideBar from '@/components/HeaderZld/StoreSwitcherModal/MapView/SideBar'
import {MAPBOX} from '@/config'
import {isGeoState} from '@/config/'
import {BRAND, CURRENT_BRAND, CURRENT_GEO_STATE, GEOSTATE} from '@/config/constant'
import {useEffect, useMemo, useState} from 'react'
import {Marker} from 'react-map-gl'
// import { getStoreFromCookie, saveStoreInCookie } from 'utils/store'

const MapView = ({stores, selectedStore, setStores, setTempStores, mapboxGL, storeTimings, selectStore, getLocations}) => {
  const {stateValues} = appController.useState(['passedAgeGate', 'myLocation', 'storeLocation'])
  const orderType = stateValues.myLocation?.orderType
  const [showSearchButton, setShowSearchButton] = useState(false)
  const [isMouseOnMap, setIsMouseOnMap] = useState(false)
  const defaultViewport = MAPBOX[CURRENT_GEO_STATE].DEFAULT_VIEW_PORT

  const [viewport, setViewPort] = useState({
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
    if (screen?.width < 500) {
      setViewPort({...viewport, zoom: 2.0})
    }
  }, [])

  const pins = useMemo(() => {
    const st = stores.filter((hit) => hit._geoloc)
    const PinComponent = isGeoState(GEOSTATE.FLORIDA) ? MuvfPin : Pin
    return st?.map((store, index) => (
      <Marker key={`marker-${index}`} longitude={Number(store._geoloc?.lng)} latitude={Number(store._geoloc?.lat)} anchor="bottom">
        <PinComponent
          isMedical={isGeoState(GEOSTATE.FLORIDA) ? true : store.medical_store_id || store.sweed_embed_url}
          isRec={store.recreational_store_id}
          isSelected={store.post_title === selectedStore?.post_title}
          onClick={() => {
            const element = document.getElementById(store.post_id)
            if (element && element.scrollIntoView)
              element.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
              })
            selectStore(store)
          }}
        />
      </Marker>
    ))
  }, [selectedStore, stores, selectStore])

  const _onViewportChange = (event) => {
    const viewport = event.viewState
    if (isMouseOnMap) setShowSearchButton(true)
    setViewPort({
      ...viewport
    })
  }

  const onMouseMove = () => {
    if (!isMouseOnMap) setIsMouseOnMap(true)
  }

  const searchThisArea = async () => {
    setShowSearchButton(false)
    const result = await getLocations('')

    let storesResult = result.hits.filter((hit) => hit._geoloc)

    storesResult = storesResult.filter((store) => mapboxGL.current.getBounds().contains([store?._geoloc.lng, store?._geoloc.lat]))
    setTempStores(storesResult)
    setStores(storesResult)
  }

  // const locateUserLocation = () => {
  //     const geolocateButton = document.getElementsByClassName('mapboxgl-ctrl-geolocate')[0]
  //     if (geolocateButton) geolocateButton.click()

  //     navigator?.geolocation?.getCurrentPosition?.(async (pos) => {
  //         setAroundLatLng(`${pos.coords.latitude}, ${pos.coords.longitude}`)
  //     })
  // }
  const buttonRounded = isGeoState(GEOSTATE.USA) ? 'rounded' : 'rounded-full'
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  return (
    <div className="mx-auto flex grid-cols-11 flex-col gap-y-5 px-4 xl:container md:grid md:space-x-4">
      <div className="order-2 col-span-11 pb-14 font-heading md:order-none md:col-span-5 lg:col-span-4">
        <SideBar storeData={stores} storeTimings={storeTimings} selectedStore={selectedStore} selectStore={selectStore} />
      </div>
      <div className="order-1 col-span-11 pb-14 md:col-span-6 lg:col-span-7">
        <div
          className={`sticky max-h-[350px] overflow-hidden top-20 rounded border-2 ${CURRENT_BRAND === 'ZLD' ? 'top-20' : ''} ${
            CURRENT_BRAND === BRAND.MUV ? 'border-gray-400' : 'border-gray-900'
          } md:max-h-[800px]`}
        >
          {showSearchButton && (
            <button
              onClick={() => searchThisArea()}
              className={`floatingMapButton h-12 w-auto px-4 text-black hover:!bg-gray-50 ${buttonRounded} mouse border border-black shadow transition duration-200 ease-in focus:outline-none active:shadow-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 inline-block h-6 w-6 "
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Search This Area</span>
            </button>
          )}

          {stateValues.passedAgeGate && (
            <>
              <div>
                <MapGL
                  reference={mapboxGL}
                  _onViewportChange={_onViewportChange}
                  onMouseMove={onMouseMove}
                  setIsMouseOnMap={setIsMouseOnMap}
                  storeTimings={storeTimings}
                  selectedStore={isMobile ? null : selectedStore}
                  pins={pins}
                  viewport={viewport}
                  height={isMobile ? '350px' : '800px'}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MapView
