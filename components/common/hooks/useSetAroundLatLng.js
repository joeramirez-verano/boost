'use client'
import getCurrentState from '@/functions/getCurrentState'
import {useEffect, useState} from 'react'
import {appController} from './hookstate/appController'

const useSetAroundLatLng = (ignore = false, dependencyArray = []) => {
  const {stateValues} = appController.useState(['aroundLatLng'])
  const [, setIsNavigator] = useState(false)
  const fetchLocation = async () => {
    try {
      const {state, aroundLatLng} = await getCurrentState()
      setIsNavigator((isNavigator) => {
        if (!isNavigator) {
          if (state) {
            appController.update({aroundLatLngGeoState: state})
          }
          if (aroundLatLng && !stateValues.aroundLatLng) {
            appController.update({aroundLatLng: aroundLatLng})
          }
        }
        return isNavigator
      })
    } catch (err) {
      //
    }
  }
  useEffect(() => {
    if (ignore) return

    fetchLocation()
    navigator.geolocation.watchPosition(
      (pos) => {
        setIsNavigator(true)
        appController.update({aroundLatLng: `${pos.coords.latitude}, ${pos.coords.longitude}`})
      },
      () => {
        fetchLocation()
      }
    )
  }, dependencyArray)
}

export default useSetAroundLatLng
