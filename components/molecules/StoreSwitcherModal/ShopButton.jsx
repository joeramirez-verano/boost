import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {CURRENT_BRAND} from '@/config/constant'
import {useEffect, useState} from 'react'

/**
 *
 * @param props0
 * @param props0.variant
 */
export default function ShopButton({variant}) {
  const theme = {
    ZLD: {
      shopButton: 'bg-black text-white'
    },
    MUV: {
      shopButton: 'bg-orange-lighter border-orange border'
    }
  }
  const {
    stateValues: switcherStateValues,
    pickupSelectedStore,
    deliverySelectedStore
  } = storeSwitcherController.useState(['activeTab', 'pickupSelectedStore', 'deliverySelectedStore'])
  const {activeTab} = switcherStateValues
  const isDisabled = activeTab === 'delivery' && !switcherStateValues.deliverySelectedStore
  const [shopUrl, setStopUrl] = useState('/')

  useEffect(() => {
    setStopUrl(storeSwitcherController.getshopNowUrl())
  }, [pickupSelectedStore, deliverySelectedStore])

  return (
    <a
      href={shopUrl}
      onClick={() => {
        storeSwitcherController.saveStatesToAppController()
        if (variant === 'storeDetailsMobile') {
          storeSwitcherController.toggleStoreDetailsModal()
        }
        storeSwitcherController.toggle()
      }}
      className={`w-full rounded-sm p-4 text-center transition-colors delay-700 ${
        isDisabled ? 'pointer-events-none bg-gray-200 text-gray-500' : theme[CURRENT_BRAND].shopButton
      }`}
      aria-disabled={isDisabled}
    >
      Shop Now
    </a>
  )
}
