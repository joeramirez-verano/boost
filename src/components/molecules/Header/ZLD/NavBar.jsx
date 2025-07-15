'use client'
import React, { useState } from 'react';
import {appController} from '@/store/appController'
import DeliveryButton from '@/components/molecules/Header/ZLD/DeliveryButton'
import DiscountsButton from '@/components/molecules/Header/ZLD/DiscountsButton'
// import HeaderSearchBar from '../HeaderZld/Icon/HeaderSearchBar'
import MenuButton from '@/components/molecules/Header/ZLD/MenuButton'
import MenuDropdown from '@/components/molecules/Header/ZLD/MenuDropdown'
import MobileMenu from '@/components/molecules/Header/ZLD/MobileMenu'
import RewardsButton from '@/components/molecules/Header/ZLD/RewardsButton'
import ShoppingCart from '@/components/molecules/Header/ZLD/ShoppingCart'
import Logo from '@/components/atoms/Logo'

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const stateValues = appController.useState(['myLocation'])
  const {myLocation} = stateValues
  const isDelivery = myLocation?.orderType === 'delivery'
  return (
    <>
      <header className={`sticky top-0 z-40 w-full bg-black uppercase`}>
        <div className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-end px-3 text-white sm:px-10">
          <div className="flex h-[72px] w-full items-center justify-between gap-8">
            <div className="flex items-center justify-between gap-8">
              <a href="/" className="block max-w-[200px] flex-auto" id="home-button">
                <Logo  className="!relative block max-h-10 max-w-full" />
              </a>

              <div className="hidden gap-8 text-base text-white xl:flex">
                <MenuDropdown />
                <DiscountsButton />
                <RewardsButton />
                {isDelivery ? (
                  <MenuButton href="/store-locator/" text="Store Locator" />
                ) : (
                  <MenuButton
                    href={myLocation?.id ? `/locations/${myLocation?.id}` : '/store-locator'}
                    text={myLocation?.id ? 'Store Info' : 'Store Locator'}
                  />
                )}
                <DeliveryButton />
              </div>
            </div>

            <div className="flex flex-1 justify-end gap-4 xl:gap-8">
              {/* <HeaderSearchBar /> */}
              <ShoppingCart />
              <label
                className="flex size-10 cursor-pointer items-center justify-center rounded-[3px] border-2 border-white xl:hidden"
                id="mobile-menu-button"
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <span className="sr-only">Open main menu</span>
                <span className="inline-block size-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="sw_f126cc4b" role="presentation">
                    <path d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5ZM2.25 12a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM3 18.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Z"></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* Header bottom mobile menu */}
        <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>
    </>
  )
}

export default NavBar
