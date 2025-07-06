// import {GOOGLE_ANALYTICS_4_ID, GOOGLE_ANALYTICS_ID} from '@/config/constant'
// import DOMPurify from 'isomorphic-dompurify'
// import ReactGA4 from 'react-ga4'

export const eventTrack = (category, action, label) => {
  // ignore event tracking if running in cypress
  if (window && window.Cypress) return
  // ignore event tracking if run by cheerio
  const queryParams = new URLSearchParams(window?.location?.search)
  if (queryParams.has('isCheerio') && queryParams.get('isCheerio') === 'true') return

  // if (GOOGLE_ANALYTICS_ID || GOOGLE_ANALYTICS_4_ID) ReactGA4.event({category, action, label})
}

export const copy = (data) => {
  return data ? JSON.parse(JSON.stringify(data)) : null
}

export const match = (str1, str2) => {
  return str1?.toLowerCase()?.includes(str2?.toLowerCase())
}

/**
 * Validate query parameters against a set of valid parameter rules.
 * @param  {object}      queryParams - The query parameters to validate.
 * @param  {object}      validParams - The object defining valid values for each parameter.
 * @return {object|true}             Returns an error response if invalid, otherwise `true`.
 */
export function validateParameters(queryParams, validParams) {
  for (const [param, validValues] of Object.entries(validParams)) {
    if (queryParams[param] && !validValues.includes(queryParams[param])) {
      return {isValid: false, error: `Invalid "${param}" parameter`}
    }
  }
  return {isValid: true}
}

/**
 * Sanitize HTML string using DOMPurify
 * @param  {string} unsafe - The unsafe HTML string
 * @return {string}        - Sanitized HTML string
 */
export const sanitizeHtml = (unsafe) => {
  if (typeof unsafe !== 'string') {
    return unsafe
  }
  // const safeString = DOMPurify.sanitize(unsafe, {
  //   ALLOWED_TAGS: [], // Strip all HTML tags
  //   ALLOWED_ATTR: [] // Strip all attributes
  // })
  // return safeString
}

/**
 * Recursively sanitize an object's string values
 * @param  {object} obj - The object to sanitize
 * @return {object}     - New object with sanitized values
 */
export const sanitizeObject = (obj) => {
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item))
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (value && typeof value === 'object') {
        return [key, sanitizeObject(value)]
      }
      if (typeof value === 'string') {
        return [key, sanitizeHtml(value)]
      }
      return [key, value]
    })
  )
}

export const searchParamsToObject = (searchParams) => {
  const paramsObject = {}

  searchParams.forEach((value, key) => {
    if (paramsObject[key]) {
      // Convert existing value to an array if not already
      paramsObject[key] = Array.isArray(paramsObject[key]) ? [...paramsObject[key], value] : [paramsObject[key], value]
    } else {
      paramsObject[key] = value
    }
  })

  return paramsObject
}
