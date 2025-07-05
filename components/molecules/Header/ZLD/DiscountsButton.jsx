import {appController} from '@/components/common/hooks/hookstate/appController'
import states from 'us-state-converter'
import MenuButton from './MenuButton'
const DiscountsButton = ({isMobile, closeMenu}) => {
  const stateValues = appController.useState(['myLocation', 'storeLocation'])
  const {myLocation, storeLocation} = stateValues
  const geoState = myLocation?.geoState
  let href = '/discounts'
  let text = 'Discounts'

  const stateSlug = storeLocation?.state?.slug

  const isOhio = geoState === 'ohio'

  const stateSpecificDeals = ['arizona', 'nevada']
  const locationSpecificDeals = ['west-virginia']

  if (isOhio) {
    href = 'https://oh.zenleafdispensaries.com/deals'
    text = 'Calendar'
  }
  if (stateSpecificDeals.includes(geoState)) {
    href = `/deals/${states.abbr(geoState?.replace(/-/g, ' ')).toLowerCase()}`
    text = `Deals`
  }
  if (locationSpecificDeals.includes(stateSlug)) {
    href = `/locations/${storeLocation?.slug}/medical-menu/discounts/`
    text = 'Deals'
  }

  return <MenuButton closeMenu={closeMenu} href={href} text={text} isMobile={isMobile} />
}

export default DiscountsButton
