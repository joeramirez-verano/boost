import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const requiredKeys = ['utm_source', 'utm_medium', 'utm_campaign']

export const useSetRedirectQueryParams = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !navigator.cookieEnabled) return
    if (typeof sessionStorage === 'undefined') return

    const addedProps = sessionStorage.getItem('redirectProps')
    if (addedProps && addedProps.length > 2) return

    const urlSearchParams = new URLSearchParams(window.location.search)
    const query = Object.fromEntries(urlSearchParams.entries())

    Object.keys(query).forEach((key) => {
      if (query[key] === undefined || query[key] === '' || !requiredKeys.includes(key)) {
        delete query[key]
      }
    })

    sessionStorage.setItem('redirectProps', JSON.stringify(query))
  }, [])
}

export const useShowMenuState = (searchParams) => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname

  useEffect(() => {
    if (typeof window === 'undefined' || !navigator.cookieEnabled) return
    if (typeof sessionStorage === 'undefined') return

    const addedProps = sessionStorage.getItem('redirectProps')

    if (!addedProps || addedProps.length < 2) return
    if (addedProps.length === 2) return setShowMenu(true)

    const index = requiredKeys.findIndex((key) => searchParams[key])
    if (index !== -1) return setShowMenu(true)

    const query = JSON.parse(addedProps)
    const combinedQueryParams = { ...searchParams, ...query }
    const newUrl = `${pathname}?${new URLSearchParams(combinedQueryParams).toString()}`

    if (location.pathname + location.search !== newUrl) {
      navigate(newUrl, { replace: true })
    }
  }, [searchParams, pathname, location.search])

  return [showMenu, setShowMenu]
}
