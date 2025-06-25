import {filterStores, findStore, sortStoresByMiles} from '@/components/common/map'
import {brandsInState} from '@/components/organisms/BrandGallery/brandInStateConfig'
import {BRAND, BRAND_DATA, CURRENT_BRAND, STORE_URL} from '@/config/constant'
import findBrandStateBySlug from '@/functions/findBrandStateBySlug'
import getCurrentState from '@/functions/getCurrentState'
import {getStoreMenuTypeAndUrl} from '@/functions/getMenuUrl'
import getStateBySlug from '@/functions/getStateBySlug'
import Cookies from 'js-cookie'
import {hookStateController} from './hookStateController'
import {appInitialState, appState} from './initialStates'

const cookies = [
  {stateKey: 'myLocation', cookieKey: 'myLocation'},
  {stateKey: 'passedAgeGate', cookieKey: 'resp-agev-age-verification-passed'},
  {stateKey: 'passedAgeGate', cookieKey: 'swa_Common/isAgeChecked'},
  {stateKey: 'hideDeliveryModal', cookieKey: 'delivery-modal'},
  {stateKey: 'stateModalBox', cookieKey: 'state-modal-box'},
  {stateKey: 'storeTypeModal', cookieKey: 'store-type-modal'},
  {stateKey: 'orderTypeModal', cookieKey: 'order-type-modal'},
  {stateKey: 'deliveryAddress', cookieKey: 'DeliveryAddress'},
  {stateKey: 'deliverySecondaryAddress', cookieKey: 'DeliverySecondaryAddress'},
  {stateKey: 'deliveryLatitude', cookieKey: 'DeliveryLatitude'},
  {stateKey: 'deliveryLongitude', cookieKey: 'DeliveryLongitude'},
  {stateKey: 'mapZoom', cookieKey: 'MapZoom'},
  {stateKey: 'deliveryHub', cookieKey: 'deliveryHub'},
  {stateKey: 'closedInstallAppBanner', cookieKey: 'closedInstallAppBanner'}
]

// An object containing handlers for specific state keys.
const subscribeHandlers = {
  myLocation: async (state) => {
    const storeLocations = state.allStoreLocations.get({noproxy: true})
    const slug = state.myLocation.get({noproxy: true})?.id
    if (slug && storeLocations) {
      const currentStoreLocation = findStore(storeLocations, slug)
      if (currentStoreLocation) state.merge({storeLocation: currentStoreLocation})
    }

    if (CURRENT_BRAND === BRAND.ZLD) {
      const geoState = state['myLocation'].get({noproxy: true})?.geoState
      if (geoState) {
        const geoStateData = await getStateBySlug(geoState)
        state.merge({callId: geoStateData?.state_integrations?.phoneNumber, liveChat: geoStateData?.state_integrations?.liveChatId})
      }
      if (state.passedAgeGate.get({noproxy: true})) {
        if (geoState === 'connecticut') {
          sessionStorage.setItem('passedAgeGate', true)
          Cookies.remove('resp-agev-age-verification-passed')
          Cookies.remove('swa_Common/isAgeChecked')
        } else {
          Cookies.set('resp-agev-age-verification-passed', true, {expires: 30})
          document.cookie = `swa_Common/isAgeChecked=${true}; path=/;`
          sessionStorage.removeItem('passedAgeGate')
        }
      }
    }
  }
}

const cookieControllerHandler = (state) => {
  let isConnecticut = false
  const initialize = async () => {
    let initialState = {}

    const currentState = await getCurrentState()
    isConnecticut = currentState.state === 'connecticut'

    if (currentState.aroundLatLng) {
      initialState.aroundLatLng = currentState.aroundLatLng
    }
    if (currentState.state) {
      initialState.aroundLatLngGeoState = currentState.state
    }
    if (!currentState.aroundLatLng) {
      navigator.geolocation.watchPosition(
        (pos) => {
          update({aroundLatLng: `${pos.coords.latitude}, ${pos.coords.longitude}`})
        },
        async () => {
          try {
            const {state, aroundLatLng} = await getCurrentState()

            aroundLatLng && update({aroundLatLng: aroundLatLng})
            state && update({aroundLatLngGeoState: state})
          } catch (err) {
            //
          }
        }
      )
    }
    // Set cookies into initial state
    cookies.forEach((cookie) => {
      if (cookie.cookieKey === 'resp-agev-age-verification-passed' || cookie.cookieKey === 'swa_Common/isAgeChecked') {
        return //skip
      }

      if (Cookies.get(cookie.cookieKey) && Cookies.get(cookie.cookieKey) !== 'null') {
        initialState[cookie.stateKey] = Cookies.get(cookie.cookieKey)
        if (
          initialState[cookie.stateKey] &&
          ((initialState[cookie.stateKey].includes('{') && initialState[cookie.stateKey].includes('}')) ||
            (initialState[cookie.stateKey].includes('[') && initialState[cookie.stateKey].includes(']')))
        )
          initialState[cookie.stateKey] = JSON.parse(initialState[cookie.stateKey])
      }
    })

    if (CURRENT_BRAND === BRAND.ZLD) {
      // use referrer when a user coming from sweed store menu to main site
      const refer = document.referrer
      //For connecticut, set the passedAgeGate state to true only if the session key is true or the refer is https://zenleafdispensaries.com
      if (isConnecticut || initialState.myLocation?.geoState === 'connecticut') {
        if (sessionStorage.getItem('passedAgeGate') === 'true' || refer.includes(window.location.host)) initialState.passedAgeGate = true
        else initialState.passedAgeGate = false
      } else {
        //For all other states, set the passedAgeGate state to true only if our ageGate cookie is true or the sweed's ageGate cookie is passed
        if (Cookies.get('resp-agev-age-verification-passed') === 'true' || Cookies.get('swa_Common/isAgeChecked') === 'true') initialState.passedAgeGate = true
        else initialState.passedAgeGate = false
      }
    } else {
      if (Cookies.get('resp-agev-age-verification-passed') === 'true' || Cookies.get('swa_Common/isAgeChecked') === 'true') initialState.passedAgeGate = true
      else initialState.passedAgeGate = false
    }
    state.merge(initialState)
    subscribe(Object.keys(initialState))
  }

  const update = (partialState) => {
    const myLocation = state.myLocation.get({noproxy: true})
    const geoState = myLocation?.geoState
    const keys = Object.keys(partialState)
    keys.forEach((key) => {
      const cookieMeta = cookies.find((c) => c.stateKey === key)
      if (cookieMeta) {
        if (cookieMeta.stateKey === 'passedAgeGate') {
          // Hanlde passedAgeGate state updation
          // 1) For connecticut, set the passedAgeGate in sessionStorage
          // 2) For all other states, set the resp-agev-age-verification-passed and swa_Common/isAgeChecked cookies
          if (isConnecticut || geoState === 'connecticut') {
            sessionStorage.setItem('passedAgeGate', partialState[key])
            Cookies.remove('resp-agev-age-verification-passed')
            Cookies.remove('swa_Common/isAgeChecked')
          } else {
            Cookies.set('resp-agev-age-verification-passed', partialState[key], {expires: 365})
            document.cookie = `swa_Common/isAgeChecked=${partialState[key]}; path=/;`
            sessionStorage.removeItem('passedAgeGate')
          }
          return
        }

        if (typeof partialState[key] === 'object' && partialState[key] != null) {
          Cookies.set(cookieMeta.cookieKey, JSON.stringify(partialState[key]), {expires: 365})
        } else if (key === 'closedInstallAppBanner') {
          Cookies.set(cookieMeta.cookieKey, partialState[key], {expires: 30})
        } else {
          Cookies.set(cookieMeta.cookieKey, partialState[key], {expires: 365})
        }
      }
    })
    state.merge(partialState)
    subscribe(keys)
  }

  const partialUpdateKey = (key, obj) => {
    const prevState = state[key].get({noproxy: true})
    return update({[key]: {...prevState, ...obj}})
  }

  // Subscribes to state changes based on provided keys and executes associated handler functions.
  const subscribe = (keys) => {
    keys.forEach((key) => {
      if (subscribeHandlers[key]) {
        subscribeHandlers[key](state)
      }
    })
  }
  const menuLocationRouter = (varient = 'stateSpecific') => {
    Cookies.remove('last_store')
    let storeLocations = state.allStoreLocations.get({noproxy: true})
    const aroundLatLng = state.aroundLatLng.get({noproxy: true})
    const myLocation = state.myLocation.get({noproxy: true})
    let id = myLocation?.id
    let geoState = myLocation?.geoState
    let aroundLatLngGeoState = state.aroundLatLngGeoState.get({noproxy: true})
    let storeType = myLocation?.storeType
    let menuUrl = '/store-locator'

    // Extract & process brand search params to go to that brand menu page
    let searchParams = new URLSearchParams(window.location.search)
    let brandParam = searchParams.get('brand')
    if (brandParam) {
      let brand
      if (geoState) {
        brand = brandsInState[geoState]?.find((brand) => brand.slug === brandParam)
      } else if (aroundLatLngGeoState) {
        brand = brandsInState[aroundLatLngGeoState]?.find((brand) => brand.slug === brandParam)
        geoState = aroundLatLngGeoState
        id = null
        if (!brand) {
          const sortedStores = sortStoresByMiles(storeLocations, aroundLatLng)
          // Iterate through sorted store locations to find a brand match
          for (const store of sortedStores) {
            const stateBrands = brandsInState[store.state?.slug]
            if (stateBrands) {
              brand = stateBrands.find((brand) => brand.slug === brandParam)
              if (brand) {
                geoState = store.state?.slug
                id = null
                break // If a match is found, exit the loop
              }
            }
          }
        }
      }
      if (!brand) {
        const filteredBrandAndState = findBrandStateBySlug(brandParam)
        geoState = filteredBrandAndState.state
        id = null
        brand = filteredBrandAndState.brand
      }
      if (brand) {
        const url = new URL(brand.url, STORE_URL)
        const newSearchParams = new URLSearchParams(url.search)
        // Remove 'brand' from existing searchParams
        searchParams.delete('brand')
        // Append new search parameters to the existing ones
        for (const [key, value] of newSearchParams.entries()) {
          searchParams.set(key, value) // Use .set() to update or add the new search params
        }
      }
    }

    if (id) {
      if (CURRENT_BRAND === BRAND.MUV || storeType === 'sweed') {
        menuUrl = BRAND_DATA.medicalMenuSweedStates?.includes(geoState) ? `/locations/${id}/medical-menu` : `/locations/${id}/menu`
      } else {
        menuUrl = `/locations/${id}/${storeType}-menu`
      }
    } else if (aroundLatLng) {
      if (varient === 'stateSpecific' && geoState && geoState !== 'other') {
        storeLocations = filterStores(storeLocations, null, geoState)
      }
      const sortedStores = sortStoresByMiles(storeLocations, aroundLatLng)
      const nearestStoreLocation = sortedStores[0]
      const {storeType: menutype, storeMenuUrl} = getStoreMenuTypeAndUrl(nearestStoreLocation)
      id = nearestStoreLocation?.slug
      geoState = geoState === 'other' ? geoState : nearestStoreLocation?.state?.slug
      storeType = menutype
      menuUrl = storeMenuUrl
      const partialState = {
        myLocation: {
          id,
          idType: 'SLUG',
          storeType,
          orderType: 'pickup',
          geoState
        }
      }
      update(partialState)
    }

    if (id) {
      let path = ''
      if (storeType === 'sweed' || CURRENT_BRAND === BRAND.MUV) {
        path = searchParams.get('path') ? '/' + searchParams.get('path') : '' // Get the value of 'path' from search parameters
        searchParams.delete('path') // Remove 'path' from search parameters list
      }
      const searchParamString = searchParams.size > 0 ? '?' + searchParams.toString() : '' // Convert updated search parameters to string
      menuUrl = `${menuUrl}${path}${searchParamString}`
    }
    return menuUrl
  }

  return {
    initialize,
    update,
    partialUpdateKey,
    menuLocationRouter
  }
}

export const appController = {
  ...hookStateController(appState, appInitialState),
  ...cookieControllerHandler(appState)
}
