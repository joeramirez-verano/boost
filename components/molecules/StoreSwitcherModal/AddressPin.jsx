import Icon from '@/components/atoms/Icon'
import * as React from 'react'
import {Marker} from 'react-map-gl'

/**
 *
 * @param props0
 * @param props0.latitude
 * @param props0.longitude
 */
function AddressPin({latitude, longitude}) {
  const theme = {
    ZLD: 'bg-yellow border-white',
  }

  return (
    <Marker longitude={longitude} latitude={latitude} anchor="bottom">
      <div className={` flex cursor-default items-center justify-center rounded-full border-2 p-2`}>
        <Icon name={'person3'} />
      </div>
    </Marker>
  )
}

export default React.memo(AddressPin)
