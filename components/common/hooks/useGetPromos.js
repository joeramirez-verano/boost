import getPromos from '@/functions/verano/getPromos'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

const useGetPromos = () => {
  const [promos, setPromos] = useState(null)
  const pathname = usePathname()

  const fetchPromos = async () => {
    const promos = await getPromos()
    // console.warn('promos: ', promos)
    setPromos(promos)
  }

  useEffect(() => {
    if (pathname !== '/') return
    fetchPromos()
  }, [pathname])

  return promos
}

export default useGetPromos
