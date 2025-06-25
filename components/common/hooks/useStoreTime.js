import {useEffect, useState} from 'react'

const weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const addDays = (date, days) => {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const useStoreTime = ({storeHours, locationStatus}) => {
  const [timeState, setTimeState] = useState({})
  const storeHoursTemp = storeHours ? JSON.parse(JSON.stringify(storeHours)) : storeHours
  useEffect(() => {
    if (!storeHours) return setTimeState({noHours: true})
    setTimeState({locationTime: locationTime(openTime, closeTime, dayIndex), specialMessage, isClosed})
  }, [storeHours])

  var specialMessage = false
  if (!storeHoursTemp) return {noHours: true}
  const d = new Date(new Date().toLocaleString('en', {timeZone: storeHoursTemp.timezoneOffset || undefined}))
  const dayIndex = d.getDay()
  let day = weekday[dayIndex]

  let yyyy = d.getFullYear()
  let mm = d.getMonth() + 1 // Months start at 0!
  let dd = d.getDate()
  var hours = d.getHours()
  var amPm = hours >= 12 ? 'pm' : 'am'
  if (dd < 10) dd = `0${dd}`
  if (mm < 10) mm = `0${mm}`

  const todaysDate = `${dd}${mm}${yyyy}`

  let isClosed = storeHoursTemp[day].closedB
  let openTime = storeHoursTemp[day].open
  let closeTime = storeHoursTemp[day].closed

  storeHoursTemp.specialHoursOverride &&
    storeHoursTemp.specialHoursOverride.map(function (specialDay) {
      const specialDateString = new Date(specialDay.date)
      let yyyy = specialDateString.getFullYear()
      let mm = specialDateString.getMonth() + 1 // Months start at 0!
      let dd = specialDateString.getDate()

      if (dd < 10) dd = `0${dd}`
      if (mm < 10) mm = `0${mm}`

      let specialDateStringSimple = `${dd}${mm}${yyyy}`
      if (todaysDate == specialDateStringSimple) {
        specialMessage = specialDay.noticeToDisplayOnWebsite
        isClosed = specialDay.closed
        if (specialDay.openingTime) openTime = specialDay.openingTime
        if (specialDay.closingTime) closeTime = specialDay.closingTime
        storeHoursTemp[day] = {
          ...storeHoursTemp[day],
          closedB: isClosed,
          open: openTime,
          closed: closeTime
        }
      }
    })

  const locationTime = (open, closed, dayIndex) => {
    if (locationStatus && locationStatus !== 'Open') return locationStatus
    const currentTime = new Date(new Date()).toLocaleString('en', {
      timeZone: storeHoursTemp.timezoneOffset || undefined
    })
    let currentTimeForEnd = currentTime
    if (closed?.includes('AM')) {
      currentTimeForEnd = new Date(
        addDays(new Date(new Date().toLocaleString('en', {timeZone: storeHoursTemp.timezoneOffset || undefined})), 1)
      ).toLocaleString('en', {timeZone: storeHoursTemp.timezoneOffset || undefined})
    }
    const openTime = currentTime.split(',')[0] + `, ${open}`
    const closeTime = currentTimeForEnd.split(',')[0] + `, ${closed}`

    var cDate = new Date(currentTime).getTime()
    var oDate = new Date(openTime).getTime()
    var clDate = new Date(closeTime).getTime()

    if (cDate > oDate && cDate < clDate && !isClosed) return `Open until ${closed}`
    else {
      let msg = amPm === 'pm' ? 'Tomorrow' : ''
      let nextOpenTime = amPm === 'pm' ? storeHoursTemp[weekday[(dayIndex + 1) % 7]].open : storeHoursTemp[weekday[dayIndex % 7]].open
      let nextCloseTime = amPm === 'pm' ? storeHoursTemp[weekday[(dayIndex + 1) % 7]].closed : storeHoursTemp[weekday[dayIndex % 7]].closed
      let count = 0
      while (storeHoursTemp[weekday[dayIndex % 7]].closedB && count < 7) {
        count++
        dayIndex++
        nextOpenTime = storeHoursTemp[weekday[dayIndex % 7]].open
        nextCloseTime = storeHoursTemp[weekday[dayIndex % 7]].closed
        msg = weekday[dayIndex % 7]
        msg = msg.charAt(0).toUpperCase() + msg.slice(1)
      }
      return `Open ${msg} ${nextOpenTime} - ${nextCloseTime}`
    }
  }

  return timeState
}

export default useStoreTime
