'use client'
import isEqual from 'lodash/isEqual'
import {useParams, useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

// custom hook to extract the URL params and URL searchParams as useRouter.query() is no longer supported in next13
// Example URL: http://localhost:3000/author/[slug]/?isPreview=true&id=100
// It will give us an object containg both params and search params like: {slug: 'verano',isPreview: 'true',id: '100'}

export const useQueryParams = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  const [queryParams, setQueryParams] = useState({})

  useEffect(() => {
    const combinedParams = {...params, ...Object.fromEntries(searchParams)}
    setQueryParams((prevState) => {
      if (isEqual(prevState, combinedParams)) {
        return prevState
      }
      return combinedParams
    })
  }, [params, searchParams])

  return queryParams
}
