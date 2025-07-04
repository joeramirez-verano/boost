/**
 * Format date
 * @param  {string} string // Get a date string
 * @return {string}        // Return formated date
 */
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
