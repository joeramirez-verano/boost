import HeaderMenu from '../molecules/Header/ZLD/HeaderDesktopMenu'
import {SkipNavContent, SkipNavLink} from '@reach/skip-nav'
const Header = () => {
  return (
    <>
      <SkipNavLink
        className="fixed -top-16 z-[100] inline-block rounded border border-black bg-white px-6 py-4 focus:left-1 focus:top-1 focus:border-2 focus:border-orange focus:shadow-[0_0_0_200vw_rgba(0,0,0,0.8)]"
        id="skip-nav"
      />
      {/* <CountDown size="bar" props={{datetime: '4/20/2025'}} /> 420 Countdown Bar */}

      <HeaderMenu />
      <SkipNavContent />
    </>
  )
}
export default Header
