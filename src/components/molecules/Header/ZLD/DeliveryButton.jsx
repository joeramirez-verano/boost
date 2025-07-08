import {appController} from '@/store/appController'
import { BRAND_DATA } from '@/config/constant'
import { BRAND } from '@/config/constant'

const DeliveryButton = ({isMobile, isDark = true, closeMenu}) => {
  const statesWithDelivery = BRAND_DATA[BRAND.ZLD]?.statesWithDelivery
  const stateValues = appController.useState(['myLocation'])
  const {myLocation} = stateValues
  const geoState = myLocation?.geoState

  if (!geoState || !statesWithDelivery.includes(geoState)) {
    return null
  } else {
    return (
      <a
        href={`/delivery/${geoState}/`}
        className={`text-uppercase flex items-center font-heading font-semibold xl:px-4 ${
          isMobile
            ? 'inline-block w-full py-4 font-heading text-base !font-bold capitalize'
            : `rounded-sm ${isDark ? 'text-white hover:bg-gray-900' : 'text-black hover:bg-gray-200'}`
        }`}
        onClick={closeMenu}
      >
        Delivery
      </a>
    )
  }
}

export default DeliveryButton
