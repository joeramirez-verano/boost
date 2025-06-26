import {getReverseGeoCoding, sortStoresByMiles} from '@/components/common/map'
import {BRAND, BRAND_DATA, CURRENT_BRAND} from '@/config/constant'
import {zldDeliveryAreasConfig} from '@/config/deliveryAreasConfig/zldDeliveryAreasConfig'
import findDeliveryStore, {getSweedStoreDetails} from '@/functions/findDeliveryStore'
import {getMenuType} from '@/functions/getMenuType'
import {getShopButtonUrl} from '@/functions/getMenuUrl'
import {getDeliveryZones} from '@/functions/sweed/getDeliveryZones'
import SweedStoresZld from '@/data/sweedConfig/zld.json'
import {appController} from '../appController'
import {hookStateController} from '../hookStateController'
import {storeSwitcherInitialState, storeSwitcherState} from './initialstate'

const storeSwitcherControllerHandler = (state) => {
  const initialize = async (initialState = {}) => {
    state.set({...storeSwitcherInitialState, ...initialState})
  }

  const update = (partialState) => {
    state.merge(partialState)
  }

  const toggle = () => {
    const prevState = state.isOpen.get({noproxy: true})
    if (!prevState) {
      // set necessary states on opening the storeSwitcherModal
      const {myLocation, storeLocation, deliveryAddress, deliverySecondaryAddress, deliveryLatitude, deliveryLongitude, mapZoom} = appController.getValues([
        'myLocation',
        'storeLocation',
        'deliveryAddress',
        'deliverySecondaryAddress',
        'deliveryLatitude',
        'deliveryLongitude',
        'mapZoom'
      ])
      update({
        activeTab: myLocation.orderType,
        pickupSelectedStore: storeLocation,
        deliveryAddress,
        deliverySecondaryAddress,
        deliveryLatitude,
        deliveryLongitude,
        mapZoom
      })

      if (deliveryAddress) {
        update({deliverySelectedStore: storeLocation})
      }
    } else {
      // Reset to initial state on closing the storeSwitcherModal
      initialize()
    }
    update({isOpen: !prevState})
  }

  const switchActiveTab = (tabName) => {
    const prevState = state.activeTab.get({noproxy: true})
    if (prevState === tabName) return
    const previousActiveTabs = state.previousActiveTabs.get({noproxy: true}) || []
    previousActiveTabs.push(prevState)
    update({activeTab: tabName, previousActiveTabs: previousActiveTabs, mapInteractedByuser: false})
  }
  const gotoPreviousTab = () => {
    const previousActiveTabs = state.previousActiveTabs.get({noproxy: true}) || []
    if (previousActiveTabs.length === 0) return
    const lastActiveTab = previousActiveTabs.pop()
    update({
      activeTab: lastActiveTab,
      previousActiveTabs: previousActiveTabs
    })
  }

  const selectPickupStore = (store) => {
    update({pickupSelectedStore: store})
  }
  const findAndSelectDeliveryStore = async (res, variant = 'address') => {
    let feature = res.features[0]
    if (feature) {
      const lat = feature.properties.coordinates.latitude
      const lng = feature.properties.coordinates.longitude
      let geoState = feature.properties?.context?.region?.name
      let zipCode = feature.properties?.context?.postcode?.name
      let fullAddress = feature.properties.full_address
      const aroundLatLng = `${lat}, ${lng}`
      if (!geoState || !zipCode || !fullAddress) {
        const reverseGeoCoding = await getReverseGeoCoding(lng, lat)
        const reverseGeoCodingFeature = reverseGeoCoding.features[0]
        geoState = geoState ?? reverseGeoCodingFeature.properties?.context?.region?.name
        zipCode = zipCode ?? reverseGeoCodingFeature.properties?.context?.postcode?.name
        fullAddress = fullAddress ?? reverseGeoCodingFeature.properties.full_address
      }
      let deliveryStore
      //1) First try and get the sweedStore
      const sweedStore = await getDeliveryZones(BRAND_DATA.sweedStoreId, fullAddress, '', lat, lng)
      const {allStoreLocations} = appController.getValues(['allStoreLocations'])

      if (CURRENT_BRAND === BRAND.ZLD) {
        if (sweedStore?.storeId) {
          // 1.1) if SweedStore , then get the corresponding store info
          deliveryStore = getSweedStoreDetails(sweedStore?.storeId, SweedStoresZld, allStoreLocations)
        }
        if (!sweedStore?.storeId || !deliveryStore) {
          // Step 2) find closest store offering delivery in the user's entered address
          const sortedStores = sortStoresByMiles(allStoreLocations, aroundLatLng)
          deliveryStore = findDeliveryStore(geoState, zipCode, sortedStores, zldDeliveryAreasConfig, lat, lng)
        }
      }

      if (variant === 'map') {
        update({deliveryAddress: fullAddress})
      } else {
        update({deliveryAddress: fullAddress, deliveryLatitude: lat, deliveryLongitude: lng})
      }
      switchActiveTab('delivery')
      // Step 3) Set the current store to the found delivery store
      update({deliverySelectedStore: deliveryStore})
    }
  }

  const getshopNowUrl = () => {
    const pickupStore = state.pickupSelectedStore.get({noproxy: true})
    const deliveryStore = state.deliverySelectedStore.get({noproxy: true})
    const activeTab = state.activeTab.get({noproxy: true})
    const previousActiveTabs = state.previousActiveTabs.get({noproxy: true})
    let menuUrl = '/'
    if (activeTab === 'delivery' || (previousActiveTabs?.at(-1) === 'delivery' && activeTab === 'storeDetails')) {
      menuUrl = getShopButtonUrl(deliveryStore)
    } else {
      menuUrl = getShopButtonUrl(pickupStore)
    }

    return menuUrl
  }

  const saveStatesToAppController = () => {
    const activeTab = state.activeTab.get({noproxy: true})
    const previousActiveTabs = state.previousActiveTabs.get({noproxy: true})
    if (activeTab === 'delivery' || (previousActiveTabs?.at(-1) === 'delivery' && activeTab === 'storeDetails')) {
      saveDeliveryInfoToCookies()
    } else {
      savePickupInfoToCookies()
    }
  }

  const saveDeliveryInfoToCookies = () => {
    const deliveryStore = state.deliverySelectedStore.get({noproxy: true})
    const deliveryInfo = {
      deliveryAddress: state.deliveryAddress.get({noproxy: true}),
      deliverySecondaryAddress: state.deliverySecondaryAddress.get({noproxy: true}),
      deliveryLatitude: state.deliveryLatitude.get({noproxy: true}),
      deliveryLongitude: state.deliveryLongitude.get({noproxy: true}),
      mapZoom: state.mapZoom.get({noproxy: true})
    }
    appController.update({
      myLocation: {id: deliveryStore.slug, orderType: 'delivery', geoState: deliveryStore?.nap?.state?.slug, storeType: getMenuType(deliveryStore)},
      storeLocation: deliveryStore,
      ...deliveryInfo
    })
  }

  const savePickupInfoToCookies = () => {
    const pickupStore = state.pickupSelectedStore.get({noproxy: true})
    appController.update({
      myLocation: {id: pickupStore.slug, orderType: 'pickup', geoState: pickupStore?.nap?.state?.slug, storeType: getMenuType(pickupStore)},
      storeLocation: pickupStore,
      deliveryAddress: '',
      deliverySecondaryAddress: '',
      deliveryLatitude: null,
      deliveryLongitude: null,
      mapZoom: null
    })
  }

  const toggleAddressModal = () => {
    const prevState = state.isAddressModalOpen.get({noproxy: true})
    update({isAddressModalOpen: !prevState, mapInteractedByuser: false})
  }
  const toggleAllStoresModal = () => {
    const prevState = state.isAllStoresModalOpen.get({noproxy: true})
    update({isAllStoresModalOpen: !prevState})
  }

  const toggleStoreDetailsModal = () => {
    const prevState = state.isStoreDetailsModalOpen.get({noproxy: true})
    update({isStoreDetailsModalOpen: !prevState})
  }

  return {
    initialize,
    update,
    toggle,
    switchActiveTab,
    gotoPreviousTab,
    selectPickupStore,
    getshopNowUrl,
    findAndSelectDeliveryStore,
    saveStatesToAppController,
    toggleAddressModal,
    toggleAllStoresModal,
    toggleStoreDetailsModal
  }
}

export const storeSwitcherController = {
  ...hookStateController(storeSwitcherState, storeSwitcherInitialState),
  ...storeSwitcherControllerHandler(storeSwitcherState)
}
