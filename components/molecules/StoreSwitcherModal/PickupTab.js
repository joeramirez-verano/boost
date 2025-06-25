import {appController} from '@/components/common/hooks/hookstate/appController'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {CURRENT_BRAND} from '@/config/constant'
import PickupStoreInfoCard from './PickupStoreInfoCard'

/**
 *
 */
export default function PickupTab() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['activeTab', 'pickupSelectedStore'])
  const {stateValues: appStateValues} = appController.useState(['allStoreLocations'])
  const {activeTab, pickupSelectedStore} = switcherStateValues
  const {allStoreLocations} = appStateValues
  const theme = {
    MUV: {
      allStoresBtn: 'rounded-sm border-2 border-gray-200 bg-gray-50'
    },
    ZLD: {
      allStoresBtn: 'rounded-sm border-2 border-gray-200 bg-gray-100'
    }
  }
  if (activeTab !== 'pickup') return
  return (
    <>
      <div className="my-8 flex flex-col gap-4">
        <div id="Top" className="flex flex-col items-start gap-4 self-stretch ">
          <h3 className="m-0 p-0 text-lg font-bold">Selected Store</h3>
          <PickupStoreInfoCard storeLocation={pickupSelectedStore} variant={'currentStore'} />
        </div>

        <div className="flex justify-center">
          <button
            className={`flex w-full items-baseline justify-center gap-1 ${theme[CURRENT_BRAND].allStoresBtn} py-1 text-center`}
            onClick={() => {
              storeSwitcherController.switchActiveTab('allStores')
            }}
          >
            <span>All Stores</span>
            {allStoreLocations && <span className="rounded-sm bg-black px-[6px] text-sm text-white">{allStoreLocations.length}</span>}
          </button>
        </div>
      </div>
    </>
  )
}
