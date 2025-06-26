import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import Image from '@/components/atoms/Image/index'
import {appController} from '@/components/common/hooks/hookstate/appController'
import {GeoStateFlag, isGeoState} from '@/config'
import {BRAND, CURRENT_BRAND, GEOSTATE} from '@/config/constant'
import {getStoreInfoUrl, getStoreMenuTypeAndUrl} from '@/functions/getMenuUrl'
// import {sendGTMEvent} from '@next/third-parties/google'
import {isEqual} from 'lodash'
import {memo} from 'react'
import States from 'us-state-converter'
import StoreTime from './StoreTime'

const Location = ({
  store,
  storeTimings,
  showBorder = true,
  isOnMap = false,
  mapView = false,
  selectedStore = {},
  setPopover = (value) => {},
  selectStore = (value) => {},
  fixWidth,
  isDark,
  hideButtons
}) => {
  const muvSample = '/assets/images/muv-webclip.jpg'
  const zldSample = '/images/sample.png'
  const sampleImage = CURRENT_BRAND === BRAND.MUV ? muvSample : zldSample

  const address1 = store?.address_1 || store.nap?.address1 || ''
  const address2 = store?.address_2 || store.nap?.address2 || ''
  const city = store.city || store.nap.city || ''
  const zip = store.zip || store.nap.zip || zip
  const abbr = store?.state?.abbr || (store.state?.post_title ? States.abbr(store.state?.post_title) : null)

  store.address = {
    line1: `${address1} ${address2}`,
    line2: `${city}, ${abbr ? abbr : ''} ${zip}`
  }

  const isOhio = store?.state?.post_title === 'Ohio' || store?.title === 'Ohio'

  const iconRound = isGeoState(GEOSTATE.USA) ? 'rounded' : 'rounded'
  const locationClass = `${isEqual(store, selectedStore) ? 'border-2 border-gray-800 scroll-auto mb-0' : `${isOnMap ? 'mb-0' : 'mb-0'}`} cursor-pointer ${
    isOnMap ? 'mb-0' : ''
  }`
  const {storeMenuUrl, storeType} = getStoreMenuTypeAndUrl(store)

  return (
    <div key={store.post_id} id={`store-id-${store.post_id}`} className={''}>
      <div
        className={`h-full flex-col rounded border-2 border-gray-400 bg-white p-3 hover:border-gray-900 hover:shadow sm:p-4 ${locationClass}`}
        // onClick={() => {
        //   sendGTMEvent({event: 'store_switch_intent', label: 'Location Card'})
        //   selectStore(store)
        // }}
      >
        <div className="grid h-full grid-cols-5 gap-4">
          <div className="col-span-2 h-full">
            <section className="relative h-full">
              <Image
                src={store.thumbnail_image?.url || store.media?.thumbnailImage?.sourceUrl || sampleImage?.src}
                alt={store?.slug}
                objectFit="cover"
                layout="fill"
                className="h-full w-full overflow-hidden "
                nextImageFill
                props={{objectFit: 'cover'}}
              />
            </section>
          </div>
          <div className="col-span-3 flex h-full flex-col justify-between">
            <a href={store.location_status !== 'Open' ? getStoreInfoUrl(store) : storeMenuUrl} className="leading-0 flex justify-between">
              <h2 className="mt-0 font-heading text-base font-bold tracking-wide text-gray-900 md:text-lg">{store?.post_title || store?.title}</h2>
              {isOnMap && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`relative bottom-2 h-5 w-5 ${isDark ? 'fill-white' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setPopover(false)}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </a>
            <div>
              <p className={`!mb-0 font-body !text-sm ${isDark ? 'text-white' : 'text-black'}`}>{store.address.line1}</p>
              <p className={`!mb-0 !mt-0 font-body !text-sm ${isDark ? 'text-white' : 'text-black'}`}>{store.address.line2}</p>
            </div>

            <div className="font-body text-sm text-green">
              {storeTimings ? <StoreTime storeTimings={storeTimings} slug={store?.slug} timezoneOffset={store.timezone_offset} /> : ''}
            </div>
            {!hideButtons && (
              <div className="flex gap-3 pb-0 pt-4 lg:gap-4 [&>*:first-child]:!px-1">
                <GeoStateFlag geoState={GEOSTATE.USA}>
                  {store.location_status !== 'Open' ? (
                    <Button className="!mb-0 flex-auto !text-base" size="sm" tag="div">
                      <a href={getStoreInfoUrl(store)} aria-label={'View Store Info for ' + store?.post_title || store?.title}>
                        <>
                          View Store Info
                          <span className={`sr-only ${isDark ? 'text-white' : ''}`}> for {store?.post_title || store?.title}</span>
                        </>
                      </a>
                    </Button>
                  ) : (
                    <Button className="!mb-0 flex-auto !text-base" size="sm" tag="div">
                      <a
                        href={storeMenuUrl}
                        aria-label={'Shop at ' + store?.post_title || store?.title}
                        onClick={() => {
                          sendGTMEvent({event: 'store_switch_intent', label: 'Location Card Button'})
                          if (storeType === 'sweed') {
                            appController.update({
                              myLocation: {id: store.slug, idType: 'SLUG', storeType, orderType: 'pickup', geoState: store?.nap?.state?.slug}
                            })
                          } else if (isOhio) {
                            appController.update({myLocation: null, storeLocation: null})
                          }
                        }}
                      >
                        <>
                          Shop<span className="hidden pl-1.5 sm:inline">{'Here'}</span>
                          <span className={`sr-only ${isDark ? 'text-white' : ''}`}> for {store?.post_title || store?.title}</span>
                        </>
                      </a>
                    </Button>
                  )}
                </GeoStateFlag>

                {/* Muv button */}
                {store.location_status !== 'Open' ? (
                  <GeoStateFlag geoState={GEOSTATE.FLORIDA}>
                    <Button className="!mb-0 flex-auto !text-base" size="sm" url={getStoreInfoUrl(store)}>
                      View Store Info
                    </Button>
                  </GeoStateFlag>
                ) : (
                  <GeoStateFlag geoState={GEOSTATE.FLORIDA}>
                    <Button className="!mb-0 flex-auto !text-base" size="sm" url={storeMenuUrl}>
                      Shop <span className="hidden pl-1.5 sm:inline">{'Here'}</span>
                    </Button>
                  </GeoStateFlag>
                )}

                {store.location_status !== 'Coming Soon' ? (
                  <a href={`${getStoreInfoUrl(store)}`} className={`has-tooltip group flex items-center ${fixWidth ? 'w-64' : ''}`}>
                    <span
                      className={`invisible absolute z-50 -ml-7 -mt-10 rounded border p-1 shadow-lg group-hover:visible ${
                        isDark ? 'border-white text-white' : 'border-2 border-gray-500 bg-white'
                      }`}
                    >
                      Store Info
                    </span>
                    <div
                      className={`inline-flex items-center justify-center group-hover:visible ${iconRound} h-full w-full border-2 border-gray-400 px-4 py-3 text-sm hover:border-gray-900 hover:bg-gray-100 hover:text-black hover:no-underline hover:shadow ${
                        isDark ? 'border-white text-white' : 'border-black bg-white text-black'
                      }`}
                    >
                      <>
                        <Icon name="info" />
                        <span className={`sr-only`}>{'Info page for ' + store?.post_title || store?.title}</span>
                      </>
                    </div>
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Location)
