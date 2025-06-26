import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {CURRENT_BRAND} from '@/config/constant'

/**
 *
 */
export default function OrderTypeButtons() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['activeTab'])
  const {activeTab} = switcherStateValues

  const theme = {
    ZLD: {
      orderType: 'bg-gray-200 rounded-md flex-row-reverse',
      activeButton: 'border-black border-2 text-black bg-white text-black shadow-lg'
    },
    MUV: {
      orderType: 'bg-gray-200 rounded-sm',
      activeButton: 'border-orange-light border-2  bg-white text-black shadow-lg'
    }
  }
  return (
    <div id="switch-active-tab-Buttons" className={`flex ${theme[CURRENT_BRAND].orderType}`}>
      <button
        onClick={() => storeSwitcherController.switchActiveTab('delivery')}
        className={`flex-1 rounded-sm p-2  ${activeTab === 'delivery' ? theme[CURRENT_BRAND].activeButton : ''}`}
      >
        <span>Delivery</span>
      </button>
      <button
        onClick={() => storeSwitcherController.switchActiveTab('pickup')}
        name="pickup"
        className={`flex-1 rounded-sm p-2 ${activeTab === 'pickup' ? theme[CURRENT_BRAND].activeButton : ''}`}
      >
        <span>Pickup</span>
      </button>
    </div>
  )
}
