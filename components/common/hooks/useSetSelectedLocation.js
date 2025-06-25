'use client'
import {default as useLocationHook} from '@/apolloHooks/useLocation'
import {appController} from './hookstate/appController'
import {useEffect} from 'react'

/*

[ TODO: @ahmad - Describe Scenarios this function is useful ]

The following useEffect hook function updates a location object based on the current URL path.

The location object is assumed to have a storeEmbeds property that contains information about the store associated with the location.
[ TODO: @ahmad - Should we be assuming this? Should we not catch times when there is no storeEmbeds? Sweed doesn't actually have a need for an embed at this point, as it's handled through reverse proxies to their servers. ]

1: The function first checks if the location object exists.
- A: If it does, it checks if both a medical store ID and a recreational store ID or URL are present in the storeEmbeds property.
--- Aa: If both are present and the window object exists, the function checks the current URL path to determine which store type is currently being displayed.
[ TODO: @ahmad -  Describe what the window object is and what it does. ]

Case 2A : If the URL path includes "recreational-menu" or is the base location path for the location
 - the function sets the switchStore property of the location object to an object with a text property of "Medical"
 - and a link property that points to the medical menu for the location

Case 2B: If the URL path includes "medical-menu"
 - the function sets the switchStore property of the location object to an object with a text property of "Recreational"
 - and a link property that points to the recreational menu for the location.

Overall, this code is used to dynamically update the location object based on the current URL path, allowing the user to switch between medical and recreational menus for the location.
It uses the useEffect hook to ensure that the location object is updated whenever the URL path changes.

*/

const useSetSelectedLocation = () => {
  const {stateValues} = appController.useState(['myLocation'])
  const {myLocation} = stateValues
  const location = useLocationHook(myLocation?.id, myLocation?.idType)

  useEffect(() => {
    if (location) {
      const both = (location.storeEmbeds.medicalStoreId || location.storeEmbeds.sweedEmbedUrl) && location.storeEmbeds.recreationalStoreId
      if (both && window) {
        if (window.location.pathname.includes('recreational-menu') || window.location.pathname === `/locations/${location.slug}/`) {
          location.switchStore = {
            text: 'Medical',
            link: `/locations/${location.slug}/medical-menu`
          }
        }
        if (window.location.pathname.includes('medical-menu')) {
          location.switchStore = {
            text: 'Recreational',
            link: `/locations/${location.slug}/recreational-menu`
          }
        }
      }
    }

    appController.update({storeLocation: location})
  }, [location])
}

export default useSetSelectedLocation
