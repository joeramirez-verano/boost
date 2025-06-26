import Link from 'next/link'
/**
 * ZLD Footer Store Locator CTA
 * @return {Element} Plane JSX
 */
const StoreLocatorCTA = () => {
  return (
    <div className="mx-auto px-3 py-6 xl:container md:mb-4 md:border-b md:border-b-gray-800" id="footer-cta">
      <div className="flex flex-col text-center md:flex-row md:text-left">
        <div className="flex-1 pb-1 text-center md:text-left">
          <strong className="font-tagline text-6xlcapitalize mb-4 block text-center tracking-wider text-white sm:mb-0 sm:inline md:text-left">
            Find your zen <span className="hidden lg:inline-block">today!</span>
          </strong>
        </div>
        <div className="flex-1 ">
          <div className="mt-2  py-4 text-center md:mt-0 md:text-right">
            <Link
              href="/store-locator"
              className="rounded border-2 border-white bg-gray-900 px-12 py-4 font-heading font-bold  capitalize tracking-widest text-white hover:bg-white hover:text-black hover:no-underline focus:bg-gray-800 focus:no-underline active:no-underline "
            >
              Store Locator
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StoreLocatorCTA
