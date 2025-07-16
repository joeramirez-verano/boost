// import * as Sentry from '@sentry/nextjs'

/**
 *
 * @param {string} slug //
 */
export default async function getStateBySlug(slug) {
  if (!slug) {
    return {}
  }
  let response;
  try {
    response = await fetch(`https://hqdkgw1gc17otizysmx0zqih6.js.wpenginepowered.com/api/locations/${slug}/`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (e) {
    // fallback to zenleafdispensaries.com
    response = await fetch(`https://zenleafdispensaries.com/api/locations/${slug}/`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  }
}
