/**
 *
 * @param storeId
 * @param searchTerm
 */
export default async function getSweedStoreProductList(storeId, searchTerm) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        headers: {accept: 'application/json', 'content-type': 'application/json'}
      },
      body: JSON.stringify({
        StoreId: storeId, //pass any Sotre id to get all the stores
        searchTerm: searchTerm
      })
    }
    const response = await fetch(`/api/sweed/get-sweed-store-products-list`, requestOptions)
    const productList = await response.json()
    if (productList.message) return null
    return productList?.list
  } catch (error) {
    return null
  }
}
