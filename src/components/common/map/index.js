import * as turf from '@turf/turf'

/**
 * Get the opening and closing hours for the current day of the week.
 * @param  {object}           storeHours - An object containing store hours for each day of the week.
 * @return {string|undefined}            - The opening and closing hours for the current day or undefined if not available.
 */
export const getCurrentDayStoreHours = (storeHours) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const currentDayOfWeek = (new Date().getDay() + 6) % 7
  return storeHours[daysOfWeek[currentDayOfWeek].toLowerCase()]
}

export const getIsStoreClosed = (storeHours) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const currentDayOfWeek = (new Date().getDay() + 6) % 7
  return storeHours[daysOfWeek[currentDayOfWeek].toLowerCase()]?.closedB
}

/**
 * Calculate the distance between a store's location and the user's location in miles.
 * @param  {string}           storeLat     - The latitude of the store's location.
 * @param  {string}           storeLong    - The longitude of the store's location.
 * @param  {string}           aroundLatLng - The user's location in the format "latitude, longitude".
 * @return {number|undefined}              - The distance in miles or undefined if the input is missing.
 */
export const getStoreDistanceFromUser = (storeLat, storeLong, aroundLatLng) => {
  if (storeLat && storeLong && aroundLatLng) {
    aroundLatLng = aroundLatLng.split(', ')
    const referencePoint = turf.point([Number(aroundLatLng[0]), Number(aroundLatLng[1])])
    const location = turf.point([Number(storeLat), Number(storeLong)])
    const distance = turf.distance(referencePoint, location, {units: 'miles'})
    return Math.round(distance)
  }
  return
}

/**
 * Filters stores and then Sort them by their distance from a given location (aroundLatLng).
 * @param  {Array}  initialStores - The list of stores to be sorted.
 * @param  {string} aroundLatLng  - The current user's location (latitude and longitude).
 * @param  {object} currentStore  - The current store (can be null).
 * @param  {string} geoState      - The geographical state.
 * @return {Array}                - The sorted list of stores.
 */
export function filterAndSortStoresByMiles(initialStores, aroundLatLng, currentStore, geoState) {
  const filteredStores = filterStores(initialStores, currentStore, geoState)
  const sortedStores = sortStoresByMiles(filteredStores, aroundLatLng)
  return sortedStores
}

/**
 * Sort stores by their distance from a given location (aroundLatLng).
 * @param  {Array}  storeLocations - The list of stores to be sorted.
 * @param  {string} aroundLatLng   - The current user's location (latitude and longitude).
 * @return {Array}                 - The sorted list of stores.
 */
export function sortStoresByMiles(storeLocations, aroundLatLng) {
  const sortedStoreLocations = [...storeLocations]
  sortedStoreLocations.sort((a, b) => {
    const distanceA = getStoreDistanceFromUser(a._geoloc.lat, a._geoloc.lng, aroundLatLng)
    const distanceB = getStoreDistanceFromUser(b._geoloc.lat, b._geoloc.lng, aroundLatLng)
    return distanceA - distanceB // Sort in ascending order
  })
  return sortedStoreLocations
}
export const findStore = (initialStores, slug) => {
  return initialStores.find((store) => store.slug === slug)
}

export const filterStores = (initialStores, currentStore, geoState) => {
  const storesByState = initialStores.filter((store) => store.nap.state.slug == geoState && store.location_status === 'Open')
  return storesByState.filter((store) => store.slug !== currentStore?.slug)
}

export const getSuggessions = async (q, access_token, session_token, bbox) => {
  const queryParams = new URLSearchParams({
    q: q,
    access_token: access_token,
    session_token: session_token,
    language: 'en',
    country: 'US',
    bbox: bbox,
    limit: 10,
    types: ['region', 'place', 'postcode', 'locality', 'neighborhood', 'street', 'address', 'district', 'country']
  })

  const res = await fetch(`https://api.mapbox.com/search/searchbox/v1/suggest?${queryParams}`)
  const suggestions = await res.json()
  return suggestions?.suggestions
}

export const retrieveAddress = async (access_token, session_token, mapbox_id) => {
  const queryParams = new URLSearchParams({
    access_token: access_token,
    session_token: session_token
  })
  const res = await fetch(`https://api.mapbox.com/search/searchbox/v1/retrieve/${mapbox_id}?${queryParams}`)
  const address = await res.json()
  return address
}
