import {appController} from '@/components/common/hooks/hookstate/appController'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import MapTab from '@/components/molecules/StoreSwitcherModal/MapTab.js'
import PickupStoreInfoCard from '@/components/molecules/StoreSwitcherModal/PickupStoreInfoCard.js'
import AllStoresDialogBox from '@/components/molecules/StoreSwitcherModalMobile/AllStoresDialogBox.js'
import DeliveryTab from '../StoreSwitcherModal/DeliveryTab'
import AddressDialogBox from './AddressDialogBox'
import Footer from './Footer'
import Header from './Header'
import StoreDetailsDialogbox from './StoreDetailsDialogBox'

/**
 *
 */
export default function StoreSwitcherModalMobile() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['pickupSelectedStore', 'activeTab'])
  const {pickupSelectedStore, activeTab} = switcherStateValues
  const {stateValues: appStateValues} = appController.useState(['allStoreLocations'])
  const {allStoreLocations} = appStateValues
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <Header />
        <div className="absolute top-24 z-50 flex w-full rounded-xl">
          <div className="mx-4 w-full">
            {activeTab === 'pickup' && <PickupStoreInfoCard storeLocation={pickupSelectedStore} variant={'currentStore'} />}
            {activeTab === 'delivery' && <DeliveryTab />}
          </div>
        </div>
        <MapTab height={'100%'} />
        <Footer allStoreLocations={allStoreLocations} />
      </div>
      <AllStoresDialogBox />
      <AddressDialogBox />
      <StoreDetailsDialogbox />
    </>
  )
}
