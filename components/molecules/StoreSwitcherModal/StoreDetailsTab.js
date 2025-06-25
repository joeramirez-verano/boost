import Icon from '@/components/atoms/Icon'
import {appController} from '@/components/common/hooks/hookstate/appController'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {findSweedStore} from '@/functions/sweed'
import {convertToTitleCase, formatStoreHourTimings} from '@/lib/common'
import Image from 'next/image'

/**
 *
 * @param props0
 * @param props0.variant
 */
export default function StoreDetailsTab({variant}) {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState([
    'activeTab',
    'previousActiveTabs',
    'deliverySelectedStore',
    'pickupSelectedStore'
  ])
  const {activeTab, previousActiveTabs, deliverySelectedStore, pickupSelectedStore} = switcherStateValues
  const {stateValues: appStateValues} = appController.useState(['sweedStoreInfolist'])
  const {sweedStoreInfolist} = appStateValues
  let sweedStoreDetails

  if (variant === 'desktop') {
    if (previousActiveTabs.at(-1) === 'pickup' || previousActiveTabs.at(-1) === 'allStores') {
      sweedStoreDetails = findSweedStore(pickupSelectedStore.slug, sweedStoreInfolist)
    } else {
      sweedStoreDetails = findSweedStore(deliverySelectedStore.slug, sweedStoreInfolist)
    }
  } else {
    if (activeTab === 'pickup' || activeTab === 'allStores') {
      sweedStoreDetails = findSweedStore(pickupSelectedStore?.slug, sweedStoreInfolist)
    } else {
      sweedStoreDetails = findSweedStore(deliverySelectedStore?.slug, sweedStoreInfolist)
    }
  }

  if (!sweedStoreDetails) return

  return (
    <div className="flex w-full flex-col gap-4 overflow-y-hidden">
      <div id="store-details-heading" className={`flex items-center gap-3 p-8 pb-0`}>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-sm border-2 border-gray-100 bg-gray-50 hover:bg-gray-200"
          onClick={() => {
            if (variant === 'desktop') storeSwitcherController.gotoPreviousTab()
            else storeSwitcherController.toggleStoreDetailsModal()
          }}
        >
          <Icon name={'left'} />
        </button>
        <h1 className="m-0 p-0 text-xl tracking-tight">{sweedStoreDetails.name}</h1>
      </div>

      <div
        id="store-details-body"
        style={{mask: 'linear-gradient(0deg, transparent, #000 5%, #000 95%, transparent)'}}
        className=" flex flex-col gap-8 overflow-y-auto p-8 pt-0"
      >
        {/* Store Image */}
        <div>
          <div className="relative h-32 w-full rounded">
            <Image alt={sweedStoreDetails.name} fill className="rounded" objectFit="cover" src={sweedStoreDetails.images[0]} sizes="100vw" />
          </div>
        </div>

        {/* Store Hours */}
        <div className="flex flex-col gap-4">
          <h1 className="m-0 p-0 text-xl tracking-tight">Hours</h1>

          {sweedStoreDetails.schedules.map((schedule, index) => {
            const filteredDays = schedule.days.filter((day) => day.length !== 0)
            const storeHours = formatStoreHourTimings(filteredDays)
            return (
              <div key={index} className="flex justify-between border-t border-gray-400 py-4">
                <span>{schedule.name}</span>
                <div>
                  {storeHours.map((storeHour, index) => {
                    return (
                      <p key={index} className="text-right">
                        {storeHour.day} : {storeHour.time}
                      </p>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Store Amenities */}
        <div className="flex flex-wrap gap-4 rounded-md bg-gray-200 p-4">
          {sweedStoreDetails.amenities.map((amenity, index) => (
            <div key={index} className="flex gap-1">
              <Icon name={amenity.name} />
              <p>{amenity.name}</p>
            </div>
          ))}
        </div>

        {/* Contact details: */}
        <div className="flex flex-col gap-4">
          <h1 className="m-0 p-0 text-xl tracking-tight">Contacts</h1>
          {Object.keys(sweedStoreDetails.contacts).map((key) => (
            <div key={key} className="flex justify-between border-t border-gray-400 py-4">
              <p>{convertToTitleCase(key)}</p>
              <p className="text-right">{sweedStoreDetails.contacts[key]}</p>
            </div>
          ))}
        </div>

        {/* description */}
        <div className="flex flex-col gap-4 [&_span]:!bg-white" dangerouslySetInnerHTML={{__html: sweedStoreDetails.description}} />
      </div>
    </div>
  )
}
