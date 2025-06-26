export const getStoreInfoUrl = (store) => {
  if (!store) return '/locations'
  const isOhio = store?.state?.post_title === 'Ohio' || store?.title === 'Ohio'
  if (isOhio) {
    store.permalink = store?.permalink?.replace('admin', 'oh').replace('://zenleafdispensaries', '://oh.zenleafdispensaries').replace('locations/', '')
  } else {
    store.permalink = store?.permalink?.replace('admin.', '')
  }
  return isOhio ? store.permalink : new URL(store?.permalink)?.pathname
}
const medicalMenuSweedStates = ['west-virginia', 'pennsylvania']

export const getStoreMenuTypeAndUrl = (store) => {
  let storeMenuUrl = '/locations',
    storeType

  if (!store) return {storeMenuUrl}
  if (CURRENT_BRAND === BRAND.MUV) {
    storeType = 'sweed'
    storeMenuUrl = `/locations/${store?.slug}/menu/`
  } else {
    storeMenuUrl = getStoreInfoUrl(store)
    const isSweedStore = store?.storeEmbeds?.storePlatform === 'Sweed'
    const stateSlug = store?.nap?.state?.slug
    const isMedicalMenuSweedStates = medicalMenuSweedStates?.includes(stateSlug)
    const hasRecreationalStoreId = store?.storeEmbeds?.recreationalStoreId || store?.storeEmbeds?.recreational_store_id
    const hasMedicalStoreId = store?.storeEmbeds?.medicalStoreId || store?.storeEmbeds?.medical_store_id
    if (isSweedStore) {
      storeType = 'sweed'
      // If it's a Sweed store, check for state-specific paths
      storeMenuUrl += isMedicalMenuSweedStates ? 'medical-menu' : 'menu'
    } else if (hasRecreationalStoreId) {
      storeType = 'recreational'
      // If it's not Sweed but has a recreational store ID
      storeMenuUrl += 'recreational-menu'
    } else if (hasMedicalStoreId) {
      storeType = 'medical'
      // Default to medical menu
      storeMenuUrl += 'medical-menu'
    }
  }

  return {storeMenuUrl, storeType}
}

export const getShopButtonUrl = (storeLocation) => {
  if (storeLocation?.type === 'hub') return storeLocation.url
  const {storeMenuUrl} = getStoreMenuTypeAndUrl(storeLocation)
  return storeMenuUrl
}
