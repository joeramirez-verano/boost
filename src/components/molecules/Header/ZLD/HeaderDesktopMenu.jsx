'use client'
import Icon from '@/components/atoms/Icon/index'
import LocationBar from '@/components/molecules/Header/LocationBar'
import CallButton from './CallButton'
import ChatButton from './ChatButton'
import NavBar from './NavBar'
import menuItems from './menuData'

/**
 * Return ZLD temporary Header
 * @return {Element} Return Header
 */
function ZLDHeader() {
  return (
    <>
      {/* Header top part */}
      <div className="relative z-50 hidden bg-nav-eyebrow sm:w-screen xl:block">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-10">
          <div className="flex h-10 items-center justify-between text-nav-text-primary">
            {/* Header Top Left Desktop Menu */}
            <div className="hidden flex-wrap gap-8 md:flex">
              {menuItems.length > 0 &&
                menuItems.map((menus, index) => (
                  <div key={index} className="group relative">
                    <a
                      href="#"
                      className="dropbtn flex items-center gap-1 py-2 font-body text-sm font-medium uppercase leading-5 tracking-widest transition-colors hover:bg-black"
                    >
                      <span>{menus.title}</span>
                      <Icon name="chevronDown" className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                    </a>
                    <div className="absolute left-0 hidden rounded bg-nav-text-secondary shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                      <div className="divide-y divide-gray-200">
                        {menus.items.map((item, i) => (
                          <a
                            key={i}
                            href={item?.link}
                            className="block whitespace-nowrap px-4 py-3 font-body font-semibold tracking-normal text-nav-background hover:bg-nav-menu-selector/30 focus:bg-nav-menu-selector/60 active:bg-nav-menu-selector/40"
                            // onClick={() => {
                            //   if (menus.title === 'Locations') {
                            //     sendGTMEvent({event: 'store_switch_intent', label: `Locations Dropdown`})
                            //   }
                            // }}
                          >
                            {item?.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              <a
                href="/contact/"
                className="flex items-center py-2 font-body text-sm font-medium uppercase tracking-widest transition-colors hover:bg-black"
              >
                Contact
              </a>
            </div>
            <div className="flex justify-between gap-8">
              <ChatButton />
              <CallButton />
            </div>
          </div>
        </div>
      </div>
      {/* End Header Top */}

      {/* Header bottom part */}
      <NavBar />
      {/* Delivery Location Part */}
      <LocationBar />
    </>
  )
}

export default ZLDHeader
