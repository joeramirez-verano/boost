import {filterStores, findStore, sortStoresByMiles} from '@/components/common/map'
import {brandsInState} from '@/components/organisms/BrandGallery/brandInStateConfig'
import {BRAND, BRAND_DATA, CURRENT_BRAND, STORE_URL} from '@/config/constant'
import findBrandStateBySlug from '@/functions/findBrandStateBySlug'
import getCurrentState from '@/functions/getCurrentState'
import {getStoreMenuTypeAndUrl} from '@/functions/getMenuUrl'
import getStateBySlug from '@/functions/getStateBySlug'
import Cookies from 'js-cookie'
import { StateController } from './stateController'

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


const COOKIES_CONFIG = [
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

class AppController extends StateController {
  static className = 'AppController'
  isConnecticut = false;

  constructor() {
    super(appInitialState);
    this.bindMethods(this);
    this.autoSubscribeOnMethods(this);
  }

  async initialize() {
    let initialState = {};
    const currentState = await getCurrentState();
    this.isConnecticut = currentState.state === 'connecticut';

    if (currentState.aroundLatLng) {
      initialState.aroundLatLng = currentState.aroundLatLng;
    }
    if (currentState.state) {
      initialState.aroundLatLngGeoState = currentState.state;
    }
    if (!currentState.aroundLatLng) {
      navigator.geolocation.watchPosition(
        (pos) => {
          this.updateState({aroundLatLng: `${pos.coords.latitude}, ${pos.coords.longitude}`});
        },
        async () => {
          try {
            const {state, aroundLatLng} = await getCurrentState();
            aroundLatLng && this.updateState({aroundLatLng});
            state && this.updateState({aroundLatLngGeoState: state});
          } catch (err) {
            //
          }
        }
      );
    }

    // Set cookies into initial state
    COOKIES_CONFIG.forEach((cookie) => {
      if (cookie.cookieKey === 'resp-agev-age-verification-passed' || cookie.cookieKey === 'swa_Common/isAgeChecked') {
        return; //skip
      }

      if (Cookies.get(cookie.cookieKey) && Cookies.get(cookie.cookieKey) !== 'null') {
        initialState[cookie.stateKey] = Cookies.get(cookie.cookieKey);
        if (
          initialState[cookie.stateKey] &&
          ((initialState[cookie.stateKey].includes('{') && initialState[cookie.stateKey].includes('}')) ||
            (initialState[cookie.stateKey].includes('[') && initialState[cookie.stateKey].includes(']')))
        )
          initialState[cookie.stateKey] = JSON.parse(initialState[cookie.stateKey]);
      }
    });

    if (CURRENT_BRAND === BRAND.ZLD) {
      const refer = document.referrer;
      if (this.isConnecticut || initialState.myLocation?.geoState === 'connecticut') {
        if (sessionStorage.getItem('passedAgeGate') === 'true' || refer.includes(window.location.host)) 
          initialState.passedAgeGate = true;
        else 
          initialState.passedAgeGate = false;
      } else {
        if (Cookies.get('resp-agev-age-verification-passed') === 'true' || Cookies.get('swa_Common/isAgeChecked') === 'true') 
          initialState.passedAgeGate = true;
        else 
          initialState.passedAgeGate = false;
      }
    } else {
      if (Cookies.get('resp-agev-age-verification-passed') === 'true' || Cookies.get('swa_Common/isAgeChecked') === 'true') 
        initialState.passedAgeGate = true;
      else 
        initialState.passedAgeGate = false;
    }

    this.updateState(initialState);
    this.subscribeToStateChanges(Object.keys(initialState));
  }

 handleMyLocationChange = async () => {
    const storeLocations = this.getValue('allStoreLocations');
    const myLocation = this.getValue('myLocation');
    const slug = myLocation?.id;

    if (slug && storeLocations) {
      const currentStoreLocation = findStore(storeLocations, slug);
      if (currentStoreLocation) this.updateState({storeLocation: currentStoreLocation});
    }

    if (CURRENT_BRAND === BRAND.ZLD) {
      const geoState = myLocation?.geoState;
      if (geoState) {
        const geoStateData = await getStateBySlug(geoState);
        // const geoStateData = BRAND_DATA[BRAND.ZLD].statesCallAndChatIds.find(stateObj=>stateObj.slug===geoState);
        this.updateState({
          callId: geoStateData?.state_integrations?.phoneNumber, 
          liveChat: geoStateData?.state_integrations?.liveChatId
        });
      }
      if (this.getValue('passedAgeGate')) {
        if (geoState === 'connecticut') {
          sessionStorage.setItem('passedAgeGate', true);
          Cookies.remove('resp-agev-age-verification-passed');
          Cookies.remove('swa_Common/isAgeChecked');
        } else {
          Cookies.set('resp-agev-age-verification-passed', true, {expires: 30});
          document.cookie = `swa_Common/isAgeChecked=${true}; path=/;`;
          sessionStorage.removeItem('passedAgeGate');
        }
      }
    }
  }

  subscribeToStateChanges = (keys) => {
    keys.forEach((key) => {
      if (key === 'myLocation' || key === 'allStoreLocations') {
        this.handleMyLocationChange();
      }
    });
  }

  updateState = (partialState) => {
    const myLocation = this.getValue('myLocation');
    const geoState = myLocation?.geoState;
    const keys = Object.keys(partialState);

    keys.forEach((key) => {
      const cookieMeta = COOKIES_CONFIG.find((c) => c.stateKey === key);
      if (cookieMeta) {
        if (cookieMeta.stateKey === 'passedAgeGate') {
          if (this.isConnecticut || geoState === 'connecticut') {
            sessionStorage.setItem('passedAgeGate', partialState[key]);
            Cookies.remove('resp-agev-age-verification-passed');
            Cookies.remove('swa_Common/isAgeChecked');
          } else {
            Cookies.set('resp-agev-age-verification-passed', partialState[key], {expires: 365});
            document.cookie = `swa_Common/isAgeChecked=${partialState[key]}; path=/;`;
            sessionStorage.removeItem('passedAgeGate');
          }
          return;
        }

        if (typeof partialState[key] === 'object' && partialState[key] != null) {
          Cookies.set(cookieMeta.cookieKey, JSON.stringify(partialState[key]), {expires: 365});
        } else if (key === 'closedInstallAppBanner') {
          Cookies.set(cookieMeta.cookieKey, partialState[key], {expires: 30});
        } else {
          Cookies.set(cookieMeta.cookieKey, partialState[key], {expires: 365});
        }
      }
    });

    super.updateState(partialState);
    this.subscribeToStateChanges(keys);
  }

  partialUpdateKey = (key, obj) => {
    const prevState = this.getValue(key);
    return this.updateState({[key]: {...prevState, ...obj}});
  }

  menuLocationRouter = (variant = 'stateSpecific') => {
    Cookies.remove('last_store');
    let storeLocations = this.getValue('allStoreLocations');
    const aroundLatLng = this.getValue('aroundLatLng');
    const myLocation = this.getValue('myLocation');
    let id = myLocation?.id;
    let geoState = myLocation?.geoState;
    let aroundLatLngGeoState = this.getValue('aroundLatLngGeoState');
    let storeType = myLocation?.storeType;
    let menuUrl = '/store-locator';

    // Extract & process brand search params
    let searchParams = new URLSearchParams(window.location.search);
    let brandParam = searchParams.get('brand');
    if (brandParam) {
      let brand;
      if (geoState) {
        brand = brandsInState[geoState]?.find((brand) => brand.slug === brandParam);
      } else if (aroundLatLngGeoState) {
        brand = brandsInState[aroundLatLngGeoState]?.find((brand) => brand.slug === brandParam);
        geoState = aroundLatLngGeoState;
        id = null;
        if (!brand) {
          const sortedStores = sortStoresByMiles(storeLocations, aroundLatLng);
          for (const store of sortedStores) {
            const stateBrands = brandsInState[store.state?.slug];
            if (stateBrands) {
              brand = stateBrands.find((brand) => brand.slug === brandParam);
              if (brand) {
                geoState = store.state?.slug;
                id = null;
                break;
              }
            }
          }
        }
      }
      if (!brand) {
        const filteredBrandAndState = findBrandStateBySlug(brandParam);
        geoState = filteredBrandAndState.state;
        id = null;
        brand = filteredBrandAndState.brand;
      }
      if (brand) {
        const url = new URL(brand.url, STORE_URL);
        const newSearchParams = new URLSearchParams(url.search);
        searchParams.delete('brand');
        for (const [key, value] of newSearchParams.entries()) {
          searchParams.set(key, value);
        }
      }
    }

    if (id) {
      if (CURRENT_BRAND === BRAND.MUV || storeType === 'sweed') {
        menuUrl = BRAND_DATA.medicalMenuSweedStates?.includes(geoState) ? `/locations/${id}/medical-menu` : `/locations/${id}/menu`;
      } else {
        menuUrl = `/locations/${id}/${storeType}-menu`;
      }
    } else if (aroundLatLng) {
      if (variant === 'stateSpecific' && geoState && geoState !== 'other') {
        storeLocations = filterStores(storeLocations, null, geoState);
      }
      const sortedStores = sortStoresByMiles(storeLocations, aroundLatLng);
      const nearestStoreLocation = sortedStores[0];
      const {storeType: menutype, storeMenuUrl} = getStoreMenuTypeAndUrl(nearestStoreLocation);
      id = nearestStoreLocation?.slug;
      geoState = geoState === 'other' ? geoState : nearestStoreLocation?.state?.slug;
      storeType = menutype;
      menuUrl = storeMenuUrl;
      
      this.updateState({
        myLocation: {
          id,
          idType: 'SLUG',
          storeType,
          orderType: 'pickup',
          geoState
        }
      });
    }

    if (id) {
      let path = '';
      if (storeType === 'sweed' || CURRENT_BRAND === BRAND.MUV) {
        path = searchParams.get('path') ? '/' + searchParams.get('path') : '';
        searchParams.delete('path');
      }
      const searchParamString = searchParams.size > 0 ? '?' + searchParams.toString() : '';
      menuUrl = `${menuUrl}${path}${searchParamString}`;
    }
    return menuUrl;
  }
}

export const appController = new AppController();

