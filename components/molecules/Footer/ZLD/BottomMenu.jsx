// import Link from 'next/link'
import FooterDisclaimer from './FooterDisclaimer'
import {bottomMenu} from './menuData'

/**
 * ZLD Footer Menu in the bottom Area
 * @return {Element} Plane JSX
 */
const BottomMenu = () => {
  const year = new Date().getFullYear()
  return (
    <div className="order-3 flex flex-col gap-6 border-t border-white pt-4 lg:col-span-2">
      <FooterDisclaimer />
      <nav className="mx-auto flex flex-wrap items-center justify-center gap-6 text-white">
        {bottomMenu.map((item, index) => (
          <a key={index} href={item.link} className="font-semibold">
            {item.name}
          </a>
        ))}
      </nav>
      <p className="mb-0 text-center text-sm font-semibold">{`Copyright © ${year} Zen Leaf.`}</p>
    </div>
  )
}
export default BottomMenu
