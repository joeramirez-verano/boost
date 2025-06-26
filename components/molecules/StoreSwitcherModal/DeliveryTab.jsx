import Icon from '@/components/atoms/Icon'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {CURRENT_BRAND} from '@/config/constant'
import DeliveryStoreInfoCard from './DeliveryStoreInfoCard'
import SearchInput from './SearchInput'
/**
 * Delivery component.
 * @return {Element} - The Delivery component.
 */
export default function DeliveryTab() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState([
    'activeTab',
    'deliveryAddress',
    'deliverySecondaryAddress',
    'deliverySelectedStore'
  ])
  const {activeTab, deliveryAddress, deliverySecondaryAddress, deliverySelectedStore} = switcherStateValues
  const theme = {
    MUV: {
      errorMsg: 'bg-yellow  text-xs',
      addressInput: 'focus-within:!border-orange focus-within:hover:none hover:border-gray-400 rounded-sm'
    },
    ZLD: {
      errorMsg: 'bg-yellow',
      addressInput: 'focus-within:!border-black border-gray-600 focus-within:hover:none hover:border-gray-800 rounded-sm'
    }
  }
  const addressLine2ChangeHandler = (event) => {
    const value = event.target.value.trim()
    storeSwitcherController.update({deliverySecondaryAddress: value})
  }
  const clearAddressLine2 = (event) => {
    storeSwitcherController.update({deliverySecondaryAddress: ''})
  }

  if (activeTab !== 'delivery') return
  return (
    <>
      <div className="flex flex-col gap-4">
        <SearchInput placeholder={'Enter your address'} searchInputValue={deliveryAddress} />
        <div id="Address-2" className={`flex items-center gap-2 border  bg-white px-2 ${theme[CURRENT_BRAND].addressInput}`}>
          <input
            type="text"
            id="address-line2"
            value={deliverySecondaryAddress}
            className="w-full py-1 outline-none"
            placeholder="Apartment, Suite, Floor, etc"
            onChange={addressLine2ChangeHandler}
          />
          {deliverySecondaryAddress?.length > 0 && (
            <button className="mt-1" onClick={clearAddressLine2}>
              <Icon name={'close'} />
            </button>
          )}
        </div>
        {!deliveryAddress && (
          <div className="flex items-center gap-3 rounded-md bg-gray-200 p-4">
            <p>You can enter the address manually in the address field or drag the map to pinpoint the actual location.</p>
          </div>
        )}
        {deliveryAddress && !deliverySelectedStore && (
          <div id="error-msg" className={`flex items-center gap-3 rounded-sm p-4 ${theme[CURRENT_BRAND].errorMsg}`}>
            <div>
              <Icon name={'location-pin-alt'} />
            </div>
            <div className="flex flex-col items-start justify-start text-sm">
              <strong>Out of delivery area</strong>
              <span>Change your delivery address yourself or choose pickup</span>
            </div>
          </div>
        )}
        <DeliveryStoreInfoCard deliveryStore={deliverySelectedStore} />
      </div>
    </>
  )
}
