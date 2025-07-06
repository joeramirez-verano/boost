const getCurrentState = async () => {
  try {
    let state, aroundLatLng
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json/')
    if (response && response.status === 200) {
      const res = await response.json()
      if (res.latitude && res.latitude !== 'Not found' && res.longitude && res.longitude !== 'Not found') {
        aroundLatLng = `${res.latitude}, ${res.longitude}`
      }
      if (res.region && res.region !== 'Not found') {
        state = res.region.toLowerCase()
      }
      return {state: state, aroundLatLng}
    }
  } catch (err) {
    //
  }
  return {}
}
export default getCurrentState
