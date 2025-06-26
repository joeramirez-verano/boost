'use client'
import {useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

/**
 *
 */
export default function useSearchParamsObject() {
  const [params, setParams] = useState({})
  const searchParams = useSearchParams()

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    const obj = {}
    sp.forEach((value, key) => {
      obj[key] = value
    })
    setParams(obj)
  }, [searchParams])

  return params
}
