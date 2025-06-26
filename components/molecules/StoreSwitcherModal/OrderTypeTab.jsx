import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import DeliveryTab from './DeliveryTab'
import OrderTypeButtons from './OrderTypeButtons'
import PickupTab from './PickupTab'
import ShopButton from './ShopButton'
import StoreDetailsTab from './StoreDetailsTab'
/**
 * Delivery component.
 * @return {Element} - The Delivery component.
 */
export default function OrderTypeTab() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['activeTab', 'deliverySelectedStore'])
  const {activeTab} = switcherStateValues

  const theme = {
    ZLD: {
      shopButton: 'bg-black text-white'
    },
    MUV: {
      shopButton: 'bg-orange-lighter border-orange border'
    }
  }

  if (activeTab !== 'pickup' && activeTab !== 'delivery' && activeTab !== 'storeDetails') return

  return (
    <div className="flex h-full w-full flex-col">
      {activeTab !== 'storeDetails' ? (
        <>
          <h1 className="px-8 pt-8 text-xl tracking-tight">Order Type</h1>
          {/* Content */}
          <div className="overflow-y-auto px-8 pb-8">
            <div className="pt-6">
              <OrderTypeButtons />
            </div>
            <div className="mt-8">
              <DeliveryTab />
            </div>
            <PickupTab />
          </div>
        </>
      ) : (
        <StoreDetailsTab variant={'desktop'} />
      )}

      {/* Footer Shop Now button */}
      <div id="shop-now-btn" className="flex justify-center p-8">
        <ShopButton />
      </div>
    </div>
  )
}
