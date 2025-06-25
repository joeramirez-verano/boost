import {BRAND, CURRENT_BRAND} from '@/config/constant'
import {copy} from '@/functions/common'
import {hookstate} from '@hookstate/core'
import Cookies from 'js-cookie'

export const appInitialState = {
  liveChat: CURRENT_BRAND === BRAND.MUV ? 'HtuqVlM5pkedKYIghq6XWw' : '',
  callId: null,
  aroundLatLng: null,
  aroundLatLngGeoState: null,

  currentLocation: {},
  myLocation: null,
  storeLocation: null,
  allStoreLocations: null,
  sweedStoreInfolist: null,

  passedAgeGate: Cookies.get('swa_Common/isAgeChecked') ?? Cookies.get('resp-agev-age-verification-passed'),
  hideDeliveryModal: null,
  stateModalBox: null,
  storeTypeModal: null,
  orderTypeModal: null,

  deliveryAddress: '',
  deliverySecondaryAddress: '',
  deliveryLatitude: null,
  deliveryLongitude: null,
  mapZoom: null,
  isDesktop: false,

  showMobileStrainFilter: false,

  closedInstallAppBanner: Cookies.get('closedInstallAppBanner') ?? false
}

export const appState = hookstate(copy(appInitialState))
//////////////////////////////////////////////////////////////////////////////
