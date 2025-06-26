import {useParams, usePathname} from 'next/navigation'

import {useEffect} from 'react'

const useOnRouteChange = (hanleRouteChange, initialUseEffect = false) => {
  const pathname = usePathname()
  const params = useParams()

  useEffect(() => {
    if (initialUseEffect) hanleRouteChange()
  }, [])

  useEffect(() => {
    hanleRouteChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, params])
}

export default useOnRouteChange
