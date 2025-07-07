// import Chat from '../../Chat'
import Chat from '../../Chat/Chat'
import FooterAppButtons from '../FooterAppButtons'
import BottomMenu from './BottomMenu'
import FooterLogo from './FooterLogo'
import FooterMenuZLD from './FooterMenuZLD'

const FooterZLD = () => {
  return (
    <footer className="overflow-x-hidden bg-black leading-snug tracking-normal">
      <FooterAppButtons />
      <div className="mx-auto grid w-screen grid-cols-1 gap-6 px-4 py-6 pb-14 text-white 2xl:container sm:px-10 lg:grid-cols-[300px_auto] lg:px-10">
        <FooterLogo />
        <FooterMenuZLD />
        <BottomMenu />
        <Chat />
      </div>
    </footer>
  )
}

export default FooterZLD
