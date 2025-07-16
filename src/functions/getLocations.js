/**
 *
 */
export default async function getLocations() {
  let response;
  try {
    response = await fetch(`https://hqdkgw1gc17otizysmx0zqih6.js.wpenginepowered.com/api/locations/?exclude_keys=false`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (e) {
    // fallback to zenleafdispensaries.com
    response = await fetch(`https://zenleafdispensaries.com/api/locations/?exclude_keys=false`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  }
}
