import {copy} from '@/functions/common'
import {hookstate} from '@hookstate/core'

export const storeSwitcherInitialState = {
  isOpen: false,
  isAddressModalOpen: false,
  isAllStoresModalOpen: false,
  isStoreDetailsModalOpen: false,
  pickupSelectedStore: null,
  deliverySelectedStore: null,
  activeTab: null,
  previousActiveTabs: null,
  deliveryAddress: '',
  deliverySecondaryAddress: '',
  deliveryLatitude: null,
  deliveryLongitude: null,
  mapZoom: null,
  mapInteractedByuser: false
}

export const storeSwitcherState = hookstate(copy(storeSwitcherInitialState))
//////////////////////////////////////////////////////////////////////////////
