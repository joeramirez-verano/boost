/**
 *
 * @param storeId
 */
async function getSweedStoreInfoList(storeId) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        StoreId: storeId // Include the store ID in the headers
      }
    }
    const response = await fetch(`https://sweed.app/_api/proxy/Store/GetStoreInfoList`, requestOptions)
    const storeInfolist = await response.json()
    if (storeInfolist.message) return null
    return storeInfolist
  } catch (error) {
    return null
  }
}

module.exports = {
  getSweedStoreInfoList
}
