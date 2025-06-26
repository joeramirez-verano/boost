/**
 * Format date
 * @param  {string} string // Get a date string
 * @return {string}        // Return formated date
 */
export function formatDate(string) {
  var options = {year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(string).toLocaleDateString([], options)
}

/**
 * Format date as url
 * @param  {string} string // Get a date string
 * @return {string}        // Return formated date as url
 */
export function formatDateUrl(string) {
  var options = {year: 'numeric', month: '2-digit'}
  return new Date(string).toLocaleDateString(['ja-JP'], options)
}

/**
 *
 * @param  {string} str /
 * @return {string}     /
 */
export function convertToTitleCase(str) {
  if (!str || str === '' || typeof str !== 'string') return str

  // Replace underscores and hyphens with spaces
  str = str.replace(/[_-]/g, ' ')

  // Split the string by spaces
  let words = str.split(' ')

  // Capitalize the first letter of each word
  words = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  // Join the words with spaces
  str = words.join(' ')

  // Extract and append the number at the end of the string, if present
  let regex = /\d+$/
  let match = str.match(regex)
  if (match) {
    let number = match[0]
    str = str.replace(regex, '') + ' ' + number
  }

  return str
}

export const generateQueryString = (params) => {
  const query = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')

  return query
}

export const slugify = (string) => {
  if (!string || string === '' || typeof string !== 'string') return string

  return (
    // Remove trailing dashes
    string
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, '-') // Replace spaces with dashes
      // eslint-disable-next-line no-useless-escape
      .replace(/[^\w\-]+/g, '') // Remove non-word characters except dashes
      // eslint-disable-next-line no-useless-escape
      .replace(/\-\-+/g, '-') // Replace consecutive dashes with a single dash
      .replace(/^-+/, '') // Remove leading dashes
      .replace(/-+$/, '')
  )
}

export const display = (log) => {
  // eslint-disable-next-line no-console
  console.log(log)
}

export const removeCommaAfterState = (address) => {
  return address?.replace(/,([^,]*)$/, '$1')
}

export const convertTimeFrom24To12HourFormat = (time24) => {
  if (!time24) return
  let [hours, minutes] = time24.split(':')
  hours = parseInt(hours)
  const meridiem = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12 || 12 // Convert 0 to 12 for 12-hour format

  return `${hours}:${minutes} ${meridiem}`
}

/**
 *
 * @param dateString
 */
export function getDayOfWeek(dateString) {
  const today = new Date()
  const targetDate = new Date(dateString)

  // Check if targetDate is today
  if (targetDate.toDateString() === today.toDateString()) {
    return 'Today'
  }

  // Check if targetDate is tomorrow
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  if (targetDate.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow'
  }

  // Return day of the week
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[targetDate.getDay()]
}

/**
 *
 * @param dayTimings
 */
function groupDaysWithSameTimings(dayTimings) {
  const groupedDays = []

  let currentGroup = []
  for (let i = 0; i < dayTimings.length; i++) {
    const currentDayTimings = dayTimings[i] ? dayTimings[i][0] : null
    const previousDayTimings = dayTimings[i - 1] ? dayTimings[i - 1][0] : null

    if (JSON.stringify(currentDayTimings) === JSON.stringify(previousDayTimings)) {
      // If timings are the same as previous day, add to current group
      currentGroup.push(i)
    } else {
      // If timings are different or it's the first day, start a new group
      if (currentGroup.length > 0) {
        groupedDays.push(currentGroup)
      }
      currentGroup = [i]
    }
  }

  // Push the last group if it's not empty
  if (currentGroup.length > 0) {
    groupedDays.push(currentGroup)
  }
  return groupedDays
}

/**
 *
 * @param dayTimings
 */
export function formatStoreHourTimings(dayTimings) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const groupedDays = groupDaysWithSameTimings(dayTimings)
  const result = []
  groupedDays.forEach((group) => {
    let startingDay, endingDay, timings, openingHours, closingHours, key, value
    if (group.length === 1) {
      key = days[group[0]]
      timings = dayTimings[group[0]]
    } else {
      startingDay = days[group[0]]
      endingDay = days[group[group.length - 1]]
      key = `${startingDay} - ${endingDay}`
      timings = dayTimings[group[0]]
    }
    if (timings) {
      openingHours = convertTimeFrom24To12HourFormat(timings[0]?.[0])
      closingHours = convertTimeFrom24To12HourFormat(timings[0]?.[1])
      value = `${openingHours}- ${closingHours}`
    } else {
      value = 'Closed'
    }
    result.push({day: key, time: value})
  })
  return result
}

export const generateSessionToken = () => {
  // Implement this function to generate a UUIDv4 session token
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
