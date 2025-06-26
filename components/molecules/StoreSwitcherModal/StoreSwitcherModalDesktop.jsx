import Icon from '@/components/atoms/Icon'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import AddressTab from '@/components/molecules/StoreSwitcherModal/AddressTab.jsx'
import AllStoresTab from '@/components/molecules/StoreSwitcherModal/AllStoresTab'
import MapTab from '@/components/molecules/StoreSwitcherModal/MapTab'
import OrderTypeTab from '@/components/molecules/StoreSwitcherModal/OrderTypeTab'

/**
 *
 */
export default function StoreSwitcherModalDesktop() {
  return (
    <>
      {/* Desktop Dialog */}
      <div style={{height: '80vh'}} className="flex max-w-sm overflow-y-auto md:w-96">
        <OrderTypeTab />

        <AddressTab variant={'desktop'} />
        <AllStoresTab variant={'desktop'} />
      </div>
      <div className="w-[250px] overflow-hidden rounded-br lg:w-[490px]">
        <MapTab height={'80vh'} />
      </div>
      <button
        className="absolute right-0 top-0 z-50 -mr-4 -mt-4 inline-flex items-center justify-center gap-4 rounded-[6px] border border-gray-300 bg-white p-4 shadow-md"
        onClick={storeSwitcherController.toggle}
      >
        <Icon name={'close'} />
      </button>
    </>
  )
}
