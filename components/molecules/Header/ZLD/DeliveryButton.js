import {appController} from '@/components/common/hooks/hookstate/appController'
import Link from 'next/link'
const statesWithDelivery = ['new-jersey']

const DeliveryButton = ({isMobile, isDark = true, closeMenu}) => {
  const {stateValues} = appController.useState(['myLocation'])
  const {myLocation} = stateValues
  const geoState = myLocation?.geoState
  if (!geoState || !statesWithDelivery.includes(geoState)) {
    return null
  } else {
    return (
      <Link
        href={`/delivery/${geoState}/`}
        className={`text-uppercase flex items-center font-heading font-semibold xl:px-4 ${
          isMobile
            ? 'inline-block w-full py-4 font-heading text-base !font-bold capitalize'
            : `rounded-sm ${isDark ? 'text-white hover:bg-gray-900' : 'text-black hover:bg-gray-200'}`
        }`}
        onClick={closeMenu}
      >
        Delivery
      </Link>
    )
  }
}

export default DeliveryButton
