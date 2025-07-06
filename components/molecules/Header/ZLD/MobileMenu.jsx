import Button from '@/components/atoms/Button'
import {appController} from '@/components/common/hooks/hookstate/appController'
import {BRAND_DATA} from '@/config/constant'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import ChatButton from './ChatButton'
import DeliveryButton from './DeliveryButton'
import DiscountsButton from './DiscountsButton'
import MenuDropdown from './MenuDropdown'
import RewardsButton from './RewardsButton'

const MobileMenu = () => {
  const stateValues = appController.useState(['myLocation', 'storeLocation', 'currentLocation'])
  const {storeLocation} = stateValues
  return (
    <div className="relative">
      <input type="checkbox" id="mobile-menu-checkbox" className="peer hidden" />

      {/* Overlay */}
      <div className="pointer-events-none fixed inset-0 bg-black/50 opacity-0 transition-opacity duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100" />

      <aside className="fixed right-0 top-0 z-30 h-full w-full max-w-xl translate-x-full transform overflow-y-auto bg-white transition-transform duration-500 peer-checked:translate-x-0">
        <div className="sticky top-0 z-10 bg-white px-4 py-4">
          <div className="mb-6 flex items-center justify-between">
            <a href="/" className="block max-w-[200px] flex-auto">
              <img
                src="https://admin.zenleafdispensaries.com/wp-content/uploads/2022/02/zen-leaf-logo-with-text-67h1.svg"
                alt="Cannabis store Zen Leaf"
                layout="fill"
                className="!relative block max-h-10 max-w-full"
              />
            </a>
            <label htmlFor="mobile-menu-checkbox" className="flex size-10 cursor-pointer items-center justify-center rounded-[3px] border-2 border-black">
              <span className="sr-only">Close main menu</span>
              <span className="inline-block size-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="sw_f126cc4b" role="presentation">
                  <path d="M5.53 4.47a.75.75 0 0 0-1.06 1.06L10.94 12l-6.47 6.47a.75.75 0 1 0 1.06 1.06L12 13.06l6.47 6.47a.75.75 0 1 0 1.06-1.06L13.06 12l6.47-6.47a.75.75 0 0 0-1.06-1.06L12 10.94 5.53 4.47Z" />
                </svg>
              </span>
            </label>
          </div>
        </div>

        <div className="px-4">
          <a
            href={'/'}
            className="flex items-center gap-2 rounded-md bg-[#FEC00F] p-2 font-heading text-lg font-semibold capitalize text-black 2xl:text-base"
          >
            <span className="inline-block size-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="sw_f126cc4b" role="presentation">
                <path d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                <path
                  fillRule="evenodd"
                  d="M9.568 2.087a3.75 3.75 0 0 1 4.864 0l.683.582c.36.307.808.493 1.28.53l.894.072a3.75 3.75 0 0 1 3.44 3.44l.071.893c.038.472.224.92.53 1.28l.582.684a3.75 3.75 0 0 1 0 4.864l-.581.683a2.25 2.25 0 0 0-.53 1.28l-.072.894a3.75 3.75 0 0 1-3.44 3.44l-.894.071a2.25 2.25 0 0 0-1.28.53l-.683.582a3.75 3.75 0 0 1-4.864 0l-.683-.581a2.25 2.25 0 0 0-1.28-.53l-.895-.072a3.75 3.75 0 0 1-3.44-3.44l-.07-.894a2.25 2.25 0 0 0-.531-1.28l-.582-.683a3.75 3.75 0 0 1 0-4.864l.582-.683a2.25 2.25 0 0 0 .53-1.28l.072-.895a3.75 3.75 0 0 1 3.44-3.44l.893-.07a2.25 2.25 0 0 0 1.28-.531l.684-.582Zm3.891 1.142a2.25 2.25 0 0 0-2.919 0l-.682.582a3.75 3.75 0 0 1-2.134.884l-.894.07A2.25 2.25 0 0 0 4.766 6.83l-.071.894a3.75 3.75 0 0 1-.884 2.134l-.582.682a2.25 2.25 0 0 0 0 2.92l.582.682c.511.6.82 1.347.884 2.134l.07.894a2.25 2.25 0 0 0 2.065 2.064l.894.071a3.75 3.75 0 0 1 2.134.884l.682.582a2.25 2.25 0 0 0 2.92 0l.682-.582a3.75 3.75 0 0 1 2.134-.884l.894-.071a2.25 2.25 0 0 0 2.064-2.064l.071-.894a3.75 3.75 0 0 1 .884-2.134l.582-.683a2.25 2.25 0 0 0 0-2.919l-.582-.682a3.75 3.75 0 0 1-.884-2.134l-.071-.894a2.25 2.25 0 0 0-2.064-2.064l-.894-.071a3.75 3.75 0 0 1-2.134-.884l-.683-.582Z"
                  clipRule="evenodd"
                ></path>
                <path fillRule="evenodd" d="M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd"></path>
              </svg>
            </span>
            <span>Refer friends - Get $10.00 off</span>
          </a>

          {/* Navigation Menu */}
          <nav className="mt-4 flex flex-col divide-y divide-black/10">
            <a href="/" className="py-4 font-heading text-base font-bold capitalize">
              Home
            </a>
            {storeLocation && <MenuDropdown isMobile />}
            <DiscountsButton isMobile />
            <RewardsButton isMobile />
            <>
              <input type="checkbox" id={`submenu-locations`} className="peer hidden" />
              <label
                htmlFor={`submenu-locations`}
                className="flex w-full cursor-pointer items-center justify-between py-4 font-heading text-base font-bold capitalize"
                onClick={() => {
                  sendGTMEvent({event: 'store_switch_intent', label: 'Locations Dropdown'})
                }}
              >
                Locations
                <ChevronDownIcon className="size-6 transition-transform duration-200 peer-checked:rotate-180" />
              </label>
              <div className="max-h-0 overflow-hidden pl-4 transition-all duration-300 peer-checked:max-h-screen">
                <a
                  href={`/locations/`}
                  className="inline-block w-full py-4 font-heading text-base font-semibold capitalize"
                  onClick={() => {
                    sendGTMEvent({event: 'store_switch_intent', label: 'Locations Dropdown'})
                  }}
                >
                  Nationwide
                </a>
                {BRAND_DATA?.states?.map((state, index) => (
                  <a
                    key={index}
                    href={`/state-resources/${state.slug}/`}
                    className="block w-full py-4 font-heading text-base font-semibold capitalize"
                    onClick={() => {
                      sendGTMEvent({event: 'store_switch_intent', label: `Locations Dropdown`})
                    }}
                  >
                    {state.title}
                  </a>
                ))}
              </div>
            </>

            <DeliveryButton href={'/delivery/'} text={'Delivery'} isMobile />
            {dataMMenu?.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu === null ? (
                  <a href={item.href} className="block w-full py-4 font-heading text-base font-bold capitalize">
                    {item.text}
                  </a>
                ) : (
                  <>
                    <input type="checkbox" id={`submenu-${index}`} className="peer hidden" />
                    <label
                      htmlFor={`submenu-${index}`}
                      className="flex w-full cursor-pointer items-center justify-between py-4 font-heading text-base font-bold capitalize"
                    >
                      {item.text}
                      <ChevronDownIcon className="size-6 transition-transform duration-200 peer-checked:rotate-180" />
                    </label>
                    <div className="max-h-0 overflow-hidden pl-4 transition-all duration-300 peer-checked:max-h-screen">
                      {item.submenu?.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.href} className="block w-full py-4 font-heading text-base font-semibold capitalize">
                          {subItem.text}
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <Button className="!mt-6 gap-2 !rounded-sm !px-0 !py-0 !text-base hover:!bg-black [&>*]:w-full [&_a]:justify-center" tag="div">
              <ChatButton />
            </Button>
          </nav>
        </div>
      </aside>
    </div>
  )
}

export default MobileMenu

const dataMMenu = [
  {
    text: 'About',
    submenu: [
      {text: 'Discounts', href: '/discounts/'},
      {text: 'Medical Marijuana FAQs', href: '/about/medical-faqs/'},
      {text: 'Recreational Marijuana FAQs', href: '/about/recreational-faqs/'},
      {text: 'Our History', href: '/about/'},
      {text: 'Careers', href: '/about/careers/'}
    ]
  },
  {
    text: 'Learn',
    href: '/',
    submenu: [
      {text: 'Getting Started', href: '/learn'},
      {text: 'Resources by state', href: '/state-resources/'},
      {text: 'Featured brands', href: '/brands/'},
      {text: 'Cannabis products', href: '/learn/cannabis-products/'},
      {text: 'Cannabis Strain Guide', href: '/learn/strain-guide/'},
      {text: 'Plant Anatomy', href: '/learn/plant-anatomy/'},
      {text: 'Terpene Guide', href: '/learn/terpene-guide/'},
      {text: 'Administration Methods', href: '/learn/administration-methods/'},
      {text: 'Cannabis Glossary', href: '/learn/cannabis-glossary/'},
      {text: 'Quizzes', href: '/learn/quizzes'}
    ]
  },
  {
    text: 'Blog',
    submenu: [
      {text: 'All Categories', href: '/blog/'},
      {text: 'Cannabis 101', href: '/blog/category/cannabis-101/'},
      {text: 'CBD', href: '/blog/category/cbd/'},
      {text: 'Cooking', href: '/blog/category/cooking/'},
      {text: 'Culture', href: '/blog/category/culture/'},
      {text: 'Dosing', href: '/blog/category/dosing/'},
      {text: 'health wellness', href: '/blog/category/health-wellness/'},
      {text: 'industry news', href: '/blog/category/industry-news/'},
      {text: 'legal', href: '/blog/category/legal/'},
      {text: 'medical cannabis', href: '/blog/category/medical-cannabis/'},
      {text: 'products', href: '/blog/category/products/'},
      {text: 'recreational cannabis', href: '/blog/category/recreational-cannabis/'},
      {text: 'strains', href: '/blog/category/strains/'},
      {text: 'terpenes', href: '/blog/category/terpenes/'},
      {text: 'zen news', href: '/blog/category/zen-news/'}
    ]
  },
  {text: 'Contact', href: '/contact/', submenu: null}
]
