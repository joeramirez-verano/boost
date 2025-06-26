import Icon from '@/components/atoms/Icon'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import OrderTypeButtons from '@/components/molecules/StoreSwitcherModal/OrderTypeButtons'

const Header = () => {
  return (
    <div className="flex items-center gap-4 bg-white p-2">
      <button className="flex items-center justify-center" onClick={storeSwitcherController.toggle}>
        <Icon name={'close'} />
      </button>
      <div className="flex-1">
        <OrderTypeButtons />
      </div>
    </div>
  )
}

export default Header
