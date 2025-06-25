import {appController} from '@/components/common/hooks/hookstate/appController'
import {getStoreInfoUrl, getStoreMenuTypeAndUrl} from '@/functions/getMenuUrl.js'
import {Popover, PopoverButton, PopoverPanel, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import {Fragment} from 'react'
import MenuButton from './MenuButton'
const MenuDropdown = ({isMobile, closeMenu}) => {
  const {stateValues} = appController.useState(['myLocation', 'storeLocation'])
  const {myLocation, storeLocation} = stateValues

  const text = isMobile ? 'Menu' : 'Menu'

  const isDelivery = myLocation?.orderType === 'delivery'
  if (isDelivery) {
    const deliveryMenuRef = `/delivery/${myLocation?.geoState}`
    return <MenuButton closeMenu={closeMenu} href={deliveryMenuRef} text={text} isMobile={isMobile} />
  }

  const isComingSoon = storeLocation?.location_status?.locationStatus === 'Coming Soon'
  if (!storeLocation || isComingSoon) return null

  const {storeType, storeMenuUrl} = getStoreMenuTypeAndUrl(storeLocation)
  const isBothMedAndRec = !!storeLocation?.storeEmbeds?.medicalStoreId && !!storeLocation?.storeEmbeds?.recreationalStoreId

  if (storeType === 'sweed' || !isBothMedAndRec) {
    return <MenuButton closeMenu={closeMenu} href={storeMenuUrl} text={text} isMobile={isMobile} isDark={true} />
  }

  const medicalMenuRef = getStoreInfoUrl(storeLocation) + 'medical-menu'
  const recreationalMenuRef = getStoreInfoUrl(storeLocation) + 'recreational-menu'
  if (isMobile && isBothMedAndRec) {
    return (
      <>
        <MenuButton closeMenu={closeMenu} href={medicalMenuRef} text={'Medical Menu'} isMobile={isMobile} isDark={false} />
        <MenuButton closeMenu={closeMenu} href={recreationalMenuRef} text={'Recreational Menu'} isMobile={isMobile} isDark={false} />
      </>
    )
  }

  return (
    <Popover as="div" className="relative z-30 hidden text-left lg:inline-block">
      <PopoverButton className="text-uppercase flex items-center gap-1 py-2 font-body font-semibold uppercase tracking-widest hover:bg-black">
        <span className="inline-block">
          <span className="">{text}</span>
        </span>
        <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </PopoverButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <PopoverPanel className="absolute -left-0.5 z-50 mt-1 flex origin-top-right scale-100 transform flex-col divide-y divide-gray-200 overflow-hidden rounded bg-nav-text-secondary opacity-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Link
            href={medicalMenuRef}
            className="whitespace-nowrap px-4 py-3 font-body font-semibold tracking-normal text-nav-background hover:bg-nav-menu-selector/60 focus:bg-nav-menu-selector/60 active:bg-nav-menu-selector/40"
            onClick={() => {
              closeMenu()
            }}
          >
            Medical Menu
          </Link>
          <Link
            href={recreationalMenuRef}
            className="whitespace-nowrap px-4 py-3 font-body font-semibold tracking-normal text-nav-background hover:bg-nav-menu-selector/60 focus:bg-nav-menu-selector/60 active:bg-nav-menu-selector/40"
            onClick={() => {
              closeMenu()
            }}
          >
            Recreational Menu
          </Link>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}

export default MenuDropdown
