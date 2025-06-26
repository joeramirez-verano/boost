import * as turf from '@turf/turf'

/**
 *
 * @param geoState
 * @param zipCode
 * @param allStores
 * @param deliveryAreasConfig
 * @param lat
 * @param lng
 */
export default function findDeliveryStore(geoState, zipCode, allStores, deliveryAreasConfig, lat, lng) {
  const pointToCheck = turf.point([lng, lat]) // Turf.js expects [longitude, latitude]

  if (!deliveryAreasConfig) return

  const deliveryStore = allStores.find((store) => {
    if (geoState !== store?.state?.post_title) return false

    const deliveryStore = deliveryAreasConfig[store?.slug]
    if (!deliveryStore) return false

    if (deliveryStore.zipCodes?.includes(zipCode)) return true

    if (deliveryStore.medical?.zipCodes?.includes(zipCode)) return true

    if (deliveryStore.recreational?.zipCodes?.includes(zipCode)) return true

    if (deliveryStore.geoJson) {
      const isWithin = turf.booleanWithin(pointToCheck, deliveryStore.geoJson.features[0])
      if (isWithin) return true
    }

    if (deliveryStore.radius) {
      const storePoint = turf.point([store.lng, store.lat])
      var distance = turf.distance(storePoint, pointToCheck, {units: 'miles'})
      if (distance <= deliveryStore.radius) return true
    }

    return false
  })
  return deliveryStore
}

/**
 *
 * @param sweedStoreId
 * @param sweedStoreConfig
 * @param allStoreLocations
 */
export function getSweedStoreDetails(sweedStoreId, sweedStoreConfig, allStoreLocations) {
  const storeConfig = sweedStoreConfig.find((store) => {
    return store.id === sweedStoreId
  })

  const sweedStore = allStoreLocations.find((storelocation) => {
    return storelocation?.slug === storeConfig?.slug
  })

  return sweedStore
}
