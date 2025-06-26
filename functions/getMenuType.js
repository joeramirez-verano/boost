/**
 * Get the menu type (medical or recreational) for a store.
 * @param  {object} storeLocation - The store's location data.
 * @param  {string} storeType     - The store type of previously selected store if any (medical or recreational).
 * @return {string}               - The menu type: 'medical', 'recreational'
 */
export const getMenuType = (storeLocation, storeType = null) => {
  const locationHasRecMenu = !!(storeLocation?.storeEmbeds?.recreationalStoreId || storeLocation?.storeEmbeds?.recreational_store_id)
  const locationHasMedMenu = !!(storeLocation?.storeEmbeds?.medicalStoreId || storeLocation?.storeEmbeds?.medical_store_id)
  const locationHasBothMenu = locationHasMedMenu && locationHasRecMenu
  if (storeType) {
    if (locationHasBothMenu) {
      return storeType
    } else if (locationHasRecMenu) {
      return 'recreational'
    } else {
      return 'medical'
    }
  } else if (locationHasBothMenu) {
    return 'recreational'
  } else if (locationHasMedMenu) {
    return 'medical'
  } else {
    return 'recreational'
  }
}
