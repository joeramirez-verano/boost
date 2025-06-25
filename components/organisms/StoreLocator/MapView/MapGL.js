import Location from '@/components/organisms/StoreLocator/Location'
import { MAP_BOX_SETTINGS } from '@/config'

import {useCallback, useEffect, useState} from 'react'
import { FullscreenControl, GeolocateControl, NavigationControl, ScaleControl, Popup, Map } from 'react-map-gl';

const MapGL = ({
  _onViewportChange,
  onMouseMove,
  setIsMouseOnMap,
  storeTimings,
  selectedStore,
  pins,
  viewport,
  reference,
  height = '800px',
  hideControls,
  time = 100,
  currentView,
  children,
  onDragEndHandler,
  onDragHandler
}) => {
  const [showPopover, setPopover] = useState(false)
  const geolocateControlRef = useCallback((ref) => {
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger()
    }
  }, [])

  useEffect(() => {
    setPopover(false)
    setTimeout(() => setPopover(true), time)
  }, [selectedStore, time, currentView])

  return (
    <>
      <Map
        ref={reference}
        {...viewport}
        style={{width: '100%', height: height, zIndex: 49}}
        mapStyle={MAP_BOX_SETTINGS.MAP_STYLE}
        onMouseOut={() => setIsMouseOnMap(false)}
        onMouseMove={(e) => {
          onMouseMove()
        }}
        onMove={(evt) => {
          _onViewportChange(evt)
        }}
        onTouchMove={(evt) => {
          onMouseMove()
        }}
        onTouchEnd={(evt) => {
          setIsMouseOnMap(false)
        }}
        dragRotate={false}
        mapboxAccessToken={MAP_BOX_SETTINGS.MAPBOX_TOKEN}
        cursor={'pointer'}
      >
        {!hideControls && (
          <>
            <GeolocateControl ref={geolocateControlRef} position="top-left" />
            <FullscreenControl position="top-left" />
            <ScaleControl unit={'imperial'} />
            <NavigationControl position="top-left" />
          </>
        )}

        {pins}
        {children}
        {selectedStore && showPopover && (
          <Popup
            className="rounded"
            style={{width: '470px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}
            maxWidth="100%"
            anchor="top"
            longitude={Number(selectedStore?._geoloc?.lng || selectedStore?.nap?.lng)}
            latitude={Number(selectedStore?._geoloc?.lat || selectedStore?.nap?.lat)}
            onClose={() => {
              setPopover(false)
            }}
            closeButton={false}
          >
            <Location store={selectedStore} storeTimings={storeTimings} isOnMap={true} showBorder={false} setPopover={setPopover} />
          </Popup>
        )}
      </Map>
    </>
  )
}

export default MapGL
