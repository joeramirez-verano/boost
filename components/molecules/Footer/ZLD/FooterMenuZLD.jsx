'use client'
import {Disclosure} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
// import Link from 'next/link'
import menuItems from './menuData'

/**
 * Accordion Menu
 * @param  {object}  data Menu Items with title
 * @return {Element}      Disclosure with custom Style
 */
function AccordionMenu(data) {
  // eslint-disable-next-line jsdoc/require-jsdoc
  function process(value) {
    return value == undefined
      ? ''
      : value
          .replace(/[^a-z0-9_]+/gi, '-')
          .replace(/^-|-$/g, '')
          .toLowerCase()
  }
  // Building the footer menu into a string we can use as an button ID
  var idReadyQ = process(data.title)
  return (
    <Disclosure>
      {({open}) => (
        <div className="border-b-2 border-gray-800 py-3">
          <Disclosure.Button className="w-full" id={'mobile-footer-menu-' + idReadyQ}>
            <h3 className="my-0 flex w-full justify-between py-0 text-left text-lg font-bold">
              <span>{data?.title}</span>
              <div>
                <ChevronRightIcon className={`ml-2 h-6 w-6  ${open ? '-rotate-90 transform' : 'rotate-90 transform'}`} />
              </div>
            </h3>
          </Disclosure.Button>

          <Disclosure.Panel>
            <div className="mt-3 flex flex-col gap-2">{data.children}</div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

/**
 * Footer Menu for ZLD with Logo and social icon (Only menu Items for Desktop and Mobile)
 * @return {Element} Plane JSX
 */
const FooterMenuZLD = () => {
  return (
    <nav id="footer-menu" className="order-1 sm:order-2">
      <div className="flex grid-rows-2 flex-col gap-3 sm:flex-row lg:grid lg:grid-cols-4 xl:grid-cols-5">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className={`flex-1 border-b border-white pb-4 sm:border-0 ${menuItem.title == 'About' ? 'lg:order-last xl:order-none' : ''} ${
              menuItem.title == 'About' || menuItem.title == 'Shop' ? '' : 'lg:row-span-2'
            }`}
          >
            <h3 className="mb-6 font-heading text-base font-bold">{menuItem.title}</h3>
            <ul>
              {menuItem.items.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="mb-2 inline-block font-body text-sm font-medium leading-5">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}
export default FooterMenuZLD
