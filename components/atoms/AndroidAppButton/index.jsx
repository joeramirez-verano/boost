import {APP_IMAGES, BRAND, CURRENT_BRAND} from '@/config/constant'
// import {sendGTMEvent} from '@next/third-parties/google'
// import Image from 'next/image'

/**
 *
 * @param props0
 * @param props0.id
 * @param props0.altText
 * @param props0.className
 * @param props0.GTMEventName
 */
export default function AndroidAppButton({id = 'android-app-button', altText = 'Download the Android app', className, GTMEventName}) {
  // const handlePrompt = () => {
  //   sendGTMEvent({event: GTMEventName})
  //   if (window.deferredPrompt) {
  //     window.deferredPrompt.prompt()
  //   }
  // }

  return (
    <image
      id={id}
      src={APP_IMAGES[CURRENT_BRAND]['android']}
      alt={altText}
      width={173}
      height={49}
      className={`cursor-pointer rounded border border-white p-2 ${CURRENT_BRAND === BRAND.ZLD ? '' : ' invert'} ${className}`}
      onClick={handlePrompt}
    />
  )
}
