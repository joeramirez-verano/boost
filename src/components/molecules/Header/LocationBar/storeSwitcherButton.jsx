'use client'
import Icon from '@/components/atoms/Icon'
import {appController} from '@/store/appController'
import {CURRENT_BRAND} from '@/config/constant'
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import { getStoreMenuTypeAndUrl } from '../../../../functions/getMenuUrl'
import { Link } from 'react-router-dom'
// import {sendGTMEvent} from '@next/third-parties/google'

const StoreSwitcherButton = () => {
  const stateValues = appController.useState(['myLocation', 'storeLocation', 'deliveryAddress'])
  const {myLocation, storeLocation, deliveryAddress} = stateValues
  const orderType = myLocation?.orderType
  function switchTheStore(newStore, userLocation) {
    appController.updateState({
      myLocation: {
        id: newStore.id,
        idType: newStore.idType,
        storeType: newStore.storeType,
        orderType: newStore.orderType,
        geoState: newStore.geoState
      }
    })

    appController.updateState({passedAgeGate: true})

    if (newStore.orderType === 'delivery') {
      appController.updateState({
        deliveryAddress: userLocation.address,
        deliverySecondaryAddress: '',
        deliveryLatitude: userLocation.latitude,
        deliveryLongitude: userLocation.longitude
      })
    }
  }

  // this is for the global age gate to switch the store - do not remove
  window.switchTheStore = switchTheStore

  /**
   * getStoreTitle
   * @param  {any} storeLocation Store Location
   * @return {any}               Return store title
   */
  function getStoreTitle(storeLocation) {
    let shortTitle = storeLocation?.nap?.shortTitle
    let title = storeLocation?.title
    let stateAbbr = getStateAbbr(storeLocation)
    if (shortTitle) {
      return shortTitle
    } else if (title && !shortTitle) {
      return stateAbbr ? `${title}, ${stateAbbr}` : title
    }
    return ''
  }

  /**
   * getStateAbbr
   * @param  {any} storeLocation Store Location
   * @return {any}               Return state Abbr
   */
  function getStateAbbr(storeLocation) {
    let stateAbbr = storeLocation?.state?.abbr.toUpperCase()
    return stateAbbr
  }

  const theme = {
    ZLD: {
      textColor: 'text-white'
    },
    MUV: {
      textColor: 'text-black'
    }
  }

  return (
    <>
    <Link to={"https://zenleafdispensaries.com/locations"}>
      <div className={`${theme[CURRENT_BRAND].textColor} relative z-30 max-sm:flex-1 lg:inline-block`}>
        <button
          // onClick={() => {
          //   sendGTMEvent({event: 'store_switch_intent', label: 'Store Switcher Button'})
          //   storeSwitcherController.toggle()
          // }}
          className="flex items-center gap-4 text-sm tracking-widest md:px-3 md:py-2"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <Icon size="lg" name={orderType === 'pickup' ? `pickup-${CURRENT_BRAND}` : `delivery-${CURRENT_BRAND}`} />
            <div className="flex flex-col items-start gap-1 max-sm:gap-0.5">
              <div className="flex items-center gap-2">
                <span className="leading-none max-sm:text-xs">{orderType === 'pickup' ? 'Pickup At' : 'Delivery Address'}</span>
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="leading-none">{orderType === 'pickup' ? getStoreTitle(storeLocation) : deliveryAddress}</span>
            </div>
          </div>
        </button>
      </div>
      </Link>
    </>
  )
}

export default StoreSwitcherButton
