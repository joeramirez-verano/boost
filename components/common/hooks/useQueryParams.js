import { useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import isEqual from 'lodash/isEqual'

export const useQueryParams = () => {
  const routeParams = useParams()
  const location = useLocation()
  const [queryParams, setQueryParams] = useState({})

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const searchParamsObject = Object.fromEntries(searchParams.entries())

    const combinedParams = {
      ...routeParams,
      ...searchParamsObject
    }

    setQueryParams((prev) => {
      if (isEqual(prev, combinedParams)) {
        return prev
      }
      return combinedParams
    })
  }, [routeParams, location.search])

  return queryParams
}
