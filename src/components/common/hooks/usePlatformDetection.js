import {useEffect, useState} from 'react'

/**
 *
 */
export function usePlatformDetection() {
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroidChrome, setIsAndroidChrome] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkPlatform = () => {
      const isIOS = /iPad|iPhone/.test(navigator.userAgent) && !window.MSStream
      const isAndroidChrome = /Chrome/.test(navigator.userAgent) && /Android/.test(navigator.userAgent)
      setIsIOS(isIOS)
      setIsAndroidChrome(isAndroidChrome)
      setIsMobile(isIOS || isAndroidChrome)
    }

    checkPlatform()
  }, [])

  return {isIOS, isAndroidChrome, isMobile}
}
