'use client'
import {appController} from '@/components/common/hooks/hookstate/appController'
import {usePathname} from 'next/navigation'
import {useEffect} from 'react'
/**
 * Muv Live Chat widget for live support (medchatapp.com/widget)
 * @return {Element} //
 */
function Chat() {
  const {passedAgeGate, hideDeliveryModal, liveChat, showMobileStrainFilter, stateValues} = appController.useState([
    'passedAgeGate',
    'hideDeliveryModal',
    'liveChat',
    'myLocation',
    'showMobileStrainFilter'
  ])
  const pathname = usePathname()

  const handleRouteChange = () => {
    // removing medchat script and chat
    window.medchatapp = undefined
    const launcher = document.getElementById('medchat-launcher-frame')
    const frame = document.getElementById('medchat-chat-frame')
    const scriptElement = document.getElementById('medchat-script')
    scriptElement?.remove()
    launcher?.remove()
    frame?.remove()

    // adding medchat script to load new chat for zld
    if (stateValues.liveChat && stateValues.hideDeliveryModal !== 'appeared' && !stateValues.showMobileStrainFilter && stateValues.passedAgeGate) {
      var script = document.createElement('script')
      script.src = `https://medchatapp.com/widget/widget.js?api-key=${stateValues.liveChat}`
      script.id = 'medchat-script'
      script.async = true
      document.head.appendChild(script)
    }
  }

  useEffect(() => {
    handleRouteChange()
  }, [liveChat, hideDeliveryModal, passedAgeGate, showMobileStrainFilter])

  useEffect(() => {
    if (window && window.innerWidth <= 767) {
      const interval = setInterval(() => {
        if (window && window.medchatapp) {
          if (pathname.includes('/recreational-menu') || pathname.includes('/medical-menu')) {
            window.medchatapp.hideLauncher()
          }
          clearInterval(interval)
        }
      }, 500)
    }
  }, [pathname])
  return <></>
}

export default Chat
