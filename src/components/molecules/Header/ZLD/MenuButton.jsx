const MenuButton = ({href, text, isMobile, isDark = true, closeMenu}) => {
  return (
    <a
      href={href}
      className={`text-uppercase flex items-center font-body font-semibold ${
        isMobile
          ? 'inline-block w-full py-4 font-body text-base !font-bold capitalize'
          : `rounded-sm ${isDark ? 'text-white hover:bg-gray-900' : 'text-black hover:bg-gray-200'}`
      }`}
      onClick={closeMenu}
    >
      {text}
    </a>
  )
}

export default MenuButton
