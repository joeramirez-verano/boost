import {appController} from '@/components/common/hooks/hookstate/appController'
import states from 'us-state-converter'
import MenuButton from './MenuButton'

const RewardsButton = ({isMobile, closeMenu}) => {
  const stateValues = appController.useState(['myLocation'])
  const {myLocation} = stateValues
  const geoState = myLocation?.geoState
  let href = '/rewards'
  let text = 'Rewards'

  const statesWithRewards = ['illinois', 'maryland', 'new-jersey', 'connecticut', 'massachusetts', 'michigan']

  const statesWithConsolidatedRewards = ['arizona', 'nevada', 'west-virginia', 'pennsylvania']

  const shouldShowButton = [...statesWithRewards, ...statesWithConsolidatedRewards]

  if (statesWithConsolidatedRewards.includes(geoState)) href = `/rewards/`

  if (statesWithRewards.includes(geoState)) {
    href = `/rewards/${states.abbr(geoState?.replace(/-/g, ' ')).toLowerCase()}`
  }

  if (!shouldShowButton.includes(geoState)) return null
  return <MenuButton closeMenu={closeMenu} href={href} text={text} isMobile={isMobile} />
}

export default RewardsButton
