import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import ShopButton from '@/components/molecules/StoreSwitcherModal/ShopButton.js'

const Footer = ({allStoreLocations}) => {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['activeTab'])
  const {activeTab} = switcherStateValues
  return (
    <div className="absolute bottom-0 z-50 flex w-full flex-col gap-4 p-4">
      {activeTab === 'pickup' && (
        <div>
          <button
            className="flex items-baseline justify-center gap-1 rounded-sm border-2 border-gray-200 bg-gray-50 p-2 py-1 text-center"
            onClick={() => {
              storeSwitcherController.toggleAllStoresModal()
            }}
          >
            <span>All Stores</span>
            {allStoreLocations && <span className="rounded-sm bg-black px-[6px] text-sm text-white">{allStoreLocations.length}</span>}
          </button>
        </div>
      )}
      <div className="flex justify-between gap-4">
        <button className="w-full rounded-sm border-2 border-gray-200 bg-gray-50 p-4 transition-colors delay-700" onClick={storeSwitcherController.toggle}>
          Cancel
        </button>
        <ShopButton />
      </div>
    </div>
  )
}

export default Footer
