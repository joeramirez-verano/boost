import React from 'react'
import {useEffect} from 'react'
import { appController } from '../../../store/appController'
import { useLocation } from 'react-router-dom'
/**
 * Muv Live Chat widget for live support (medchatapp.com/widget)
 * @return {Element} //
 */
function Chat() {
  const {passedAgeGate, liveChat, showMobileStrainFilter, } = appController.useState([
    'passedAgeGate',
    'liveChat',
    'myLocation',
    'showMobileStrainFilter'
  ])
  const location = useLocation();
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
    if (liveChat  && !showMobileStrainFilter && passedAgeGate) {
      var script = document.createElement('script')
      script.src = `https://medchatapp.com/widget/widget.js?api-key=${liveChat}`
      script.id = 'medchat-script'
      script.async = true
      document.head.appendChild(script)
    }
  }

  useEffect(() => {
    handleRouteChange()
  }, [liveChat, passedAgeGate, showMobileStrainFilter])

  useEffect(() => {
    if (window && window.innerWidth <= 767) {
      const interval = setInterval(() => {
        if (window && window.medchatapp) {
          if ((location.pathname.includes('/recreational-menu') || location.pathname.includes('/medical-menu')) && window.medchatapp.hideLauncher ) {
            window.medchatapp.hideLauncher()
          }
          clearInterval(interval)
        }
      }, 500)
      return () => clearInterval(interval)
    }
  }, [location.pathname])
  return <></>
}

export default Chat
