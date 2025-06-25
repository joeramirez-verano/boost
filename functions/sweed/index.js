import {getCurrentDayStoreHours} from '@/components/common/map'
import {BRAND, CURRENT_BRAND} from '@/config/constant'
import {convertTimeFrom24To12HourFormat, getDayOfWeek} from '@/lib/common'

/**
 *
 * @param slug
 * @param sweedStore
 */
export function getSweedStoreAmenities(slug, sweedStore) {
  if (!slug || !sweedStore) return
  const amenities = sweedStore?.amenities?.map((amenity) => {
    return amenity.name
  })
  return amenities
}
/**
 *
 * @param slug
 * @param stores
 */
export function findSweedStore(slug, stores) {
  if (!slug || !stores) return
  const matchingStore = stores?.find((store) => store?.routeName?.includes(slug))
  return matchingStore
}

/**
 *
 * @param sweedStore
 */
export function getSweedStoreDeliveryInfo(sweedStore) {
  let schedule
  for (const zone of sweedStore.deliveryZones) {
    if (zone.schedule && zone.schedule.length > 0) {
      schedule = zone.schedule[0]
      break
    }
  }

  const storeDeliveryinfo = {
    type: 'sweed',
    name: sweedStore.name,
    storeHoursDay: getDayOfWeek(schedule?.date),
    storeHours: {
      open: convertTimeFrom24To12HourFormat(schedule?.intervals[0][0]),
      closed: convertTimeFrom24To12HourFormat(schedule?.intervals[0][1])
    },
    deliveryFee: sweedStore?.deliveryZones[0]?.fee?.toFixed(2),
    minOrder: sweedStore?.deliveryZones[0]?.minOrderAmount?.toFixed(2),
    freeShipmentThreshold: sweedStore?.deliveryZones[0]?.freeShippingPriceThreshold?.toFixed(2)
  }
  return storeDeliveryinfo
}

/**
 *
 * @param storeLocation
 */
export function getJaneStoreDeliveryInfo(storeLocation) {
  const brandName = CURRENT_BRAND === BRAND.ZLD ? 'Zen Leaf' : 'Muv'
  const storeDeliveryinfo = {
    type: 'jane',
    slug: storeLocation?.slug,
    name: `${brandName} ${storeLocation?.title}`,
    storeHoursDay: 'Today',
    storeHours: getCurrentDayStoreHours(storeLocation?.hours)
  }
  return storeDeliveryinfo
}
