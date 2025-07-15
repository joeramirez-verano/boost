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
    response = await fetch(`${import.meta.env.VITE_PUBLIC_API_BASE_URL}/api/locations/${slug}/`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (e) {
    // fallback to zenleafdispensaries.com
    response = await fetch(`https://zenleafdispensaries.com/api/locations/${slug}/`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  }
}
