'use client'
import AndroidAppButton from '@/components/atoms/AndroidAppButton'
import IOSAppButton from '@/components/atoms/IOSAppButton'
import {usePlatformDetection} from '@/components/common/hooks/usePlatformDetection'
import {appController} from '@/store/appController'

/**
 *
 */
export default function FooterAppButtons() {
  const {isIOS, isAndroidChrome, isMobile} = usePlatformDetection()
  const {myLocation} = appController.useState(['myLocation'])
  const geoState = myLocation?.geoState
  const sweedStates = ['florida', 'pennsylvania', 'arizona', 'west-virginia', 'nevada']

  if (!isMobile || !sweedStates.includes(geoState)) return null

  return (
    <div className="mx-auto px-4 pb-0 pt-6 sm:hidden">
      {isIOS && <IOSAppButton id={'install-app-footer'} GTMEventName={'footer_install_app_button'} />}
      {isAndroidChrome && <AndroidAppButton id={'install-app-footer'} GTMEventName={'footer_install_app_button'} />}
    </div>
  )
}
