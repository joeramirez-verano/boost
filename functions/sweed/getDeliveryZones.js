/**
 *
 * @param storeId
 * @param deliveryAddress
 * @param deliverySecondaryAddress
 * @param deliveryLatitude
 * @param deliveryLongitude
 */
export async function getDeliveryZones(storeId, deliveryAddress, deliverySecondaryAddress, deliveryLatitude, deliveryLongitude) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        headers: {accept: 'application/json', 'content-type': 'application/json'}
      },
      body: JSON.stringify({
        StoreId: storeId, //pass any Sotre id to get delivery zone

        address: deliveryAddress,
        secondaryAddress: deliverySecondaryAddress,
        coordinates: {
          lat: deliveryLatitude,
          lng: deliveryLongitude
        }
      })
    }
    const response = await fetch(`/api/sweed/get-delivery-zones`, requestOptions)
    const sweedStore = await response.json()
    if (Array.isArray(sweedStore) && sweedStore.length > 0) {
      return sweedStore[0]
    }
    return null
  } catch (error) {
    return null
  }
}
