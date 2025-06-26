import {APP_IMAGES, APP_URLS, BRAND, CURRENT_BRAND} from '@/config/constant'
// import {sendGTMEvent} from '@next/third-parties/google'

/**
 *
 * @param props0
 * @param props0.id
 * @param props0.altText
 * @param props0.className
 * @param props0.GTMEventName
 */
export default function IOSAppButton({id = 'ios-app-button', altText = 'Download the iOS app', className, GTMEventName}) {
  return (
    <a
      href={APP_URLS[CURRENT_BRAND]}
      className={`inline-block ${className}`}
      id={id}
      // onClick={() => sendGTMEvent({event: GTMEventName})}
      aria-label="Install App"
    >
      <image
        src={APP_IMAGES[CURRENT_BRAND]['ios']}
        alt={altText}
        width={173}
        height={49}
        className={`h-full rounded border border-white p-2 ${CURRENT_BRAND === BRAND.ZLD ? '' : ' invert'}`}
      />
    </a>
  )
}
