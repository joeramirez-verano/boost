/**
 * With Opacity
 * Will add opacity to css varibale that tailwindcss way
 * @param  {string}  variableName //
 * @return {Element}              //
 */
function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

const social = {
  'facebook-blue': withOpacity('--color-facebook-blue'),
  'google-green': withOpacity('--color-google-green'),
  'google-red': withOpacity('--color-google-red'),
  'google-yellow': withOpacity('--color-google-yellow')
}

const primatives = {
  white: withOpacity('--color-white'),
  cream: withOpacity('--color-cream'),
  'cream-light': withOpacity('--color-cream-light'),
  'cream-lighter': withOpacity('--color-cream-lighter'),
  'cream-dark': withOpacity('--color-cream-dark'),
  'cream-darker': withOpacity('--color-cream-darker'),
  'gray-50': withOpacity('--color-gray-50'),
  'gray-100': withOpacity('--color-gray-100'),
  'gray-200': withOpacity('--color-gray-200'),
  'gray-300': withOpacity('--color-gray-300'),
  'gray-400': withOpacity('--color-gray-400'),
  'gray-500': withOpacity('--color-gray-500'),
  'gray-600': withOpacity('--color-gray-600'),
  'gray-700': withOpacity('--color-gray-700'),
  'gray-800': withOpacity('--color-gray-800'),
  'gray-900': withOpacity('--color-gray-900'),
  black: withOpacity('--color-black'),
  green: withOpacity('--color-green'),
  'green-light': withOpacity('--color-green-light'),
  'green-lighter': withOpacity('--color-green-lighter'),
  'green-lightest': withOpacity('--color-green-lightest'),
  brown: withOpacity('--color-brown'),
  'brown-light': withOpacity('--color-brown-light'),
  'brown-lighter': withOpacity('--color-brown-lighter'),
  'brown-lightest': withOpacity('--color-brown-lightest'),
  'yellow-darkest': withOpacity('--color-yellow-darkest'),
  'yellow-darker': withOpacity('--color-yellow-darker'),
  'yellow-dark': withOpacity('--color-yellow-dark'),
  yellow: withOpacity('--color-yellow'),
  'yellow-light': withOpacity('--color-yellow-light'),
  'yellow-lighter': withOpacity('--color-yellow-lighter'),
  'yellow-lightest': withOpacity('--color-yellow-lightest'),
  'orange-darker': withOpacity('--color-orange-darker'),
  'orange-dark': withOpacity('--color-orange-dark'),
  orange: withOpacity('--color-orange'),
  'orange-light': withOpacity('--color-orange-light'),
  'orange-lighter': withOpacity('--color-orange-lighter'),
  'orange-lightest': withOpacity('--color-orange-lightest'),
  'blue-darker': withOpacity('--color-blue-darker'),
  'blue-dark': withOpacity('--color-blue-dark'),
  blue: withOpacity('--color-blue'),
  'blue-light': withOpacity('--color-blue-light'),
  'blue-lighter': withOpacity('--color-blue-lighter'),
  'blue-lightest': withOpacity('--color-blue-lightest'),
  'red-darker': withOpacity('--color-red-darker'),
  'red-dark': withOpacity('--color-red-dark'),
  red: withOpacity('--color-red'),
  'red-light': withOpacity('--color-red-light'),
  'red-lighter': withOpacity('--color-red-lighter'),
  'red-lightest': withOpacity('--color-red-lightest'),
  transparent: withOpacity('--color-transparent')
}

const brand = {
  'primary-light': withOpacity('--color-primary-light'),
  'primary-dark': withOpacity('--color-primary-dark'),
  'secondary-dark': withOpacity('--color-secondary-dark'),
  'secondary-light': withOpacity('--color-secondary-light'),
  'tertiary-dark': withOpacity('--color-tertiary-dark'),
  'tertiary-light': withOpacity('--color-tertiary-light'),
  'content-text': withOpacity('--color-text')
}

const navigation = {
  'nav-text-secondary': withOpacity('--color-nav-text-secondary'),
  'nav-background': withOpacity('--color-nav-background'),
  'nav-eyebrow': withOpacity('--color-nav-eyebrow'),
  'nav-text-primary': withOpacity('--color-nav-text-primary'),
  'nav-account-bar': withOpacity('--color-nav-account-bar'),
  'nav-menu-selector': withOpacity('--color-nav-menu-selector')
}

const button = {
  /* Button Primary */
  'button-primary-text': withOpacity('--color-button-primary-text'),
  'button-primary-text-active': withOpacity('--color-button-primary-text-active'),
  'button-primary-text-hover': withOpacity('--color-button-primary-text-hover'),
  'button-primary-text-down': withOpacity('--color-button-primary-text-down'),
  'button-primary-text-focus': withOpacity('--color-button-primary-text-focus'),

  'button-primary-bg': withOpacity('--color-button-primary-bg'),
  'button-primary-bg-active': withOpacity('--color-button-primary-bg-active'),
  'button-primary-bg-hover': withOpacity('--color-button-primary-bg-hover'),
  'button-primary-bg-down': withOpacity('--color-button-primary-bg-down'),

  'button-primary-border': withOpacity('--color-button-primary-border'),

  /* Button Primary Outline */
  'button-outline-text': withOpacity('--color-button-outline-text'),
  'button-outline-bg': withOpacity('--color-button-outline-bg'),
  'button-outline-border': withOpacity('--color-button-outline-border'),

  'button-outline-bg-hover': withOpacity('--color-button-outline-bg-hover'),
  'button-outline-border-focus': withOpacity('--color-button-outline-border-focus'),
  'button-outline-bg-active': withOpacity('--color-button-outline-bg-active'),

  /* Button Secondary */
  'button-secondary-text': withOpacity('--color-button-secondary-text'),
  'button-secondary-bg': withOpacity('--color-button-secondary-bg'),
  'button-secondary-border': withOpacity('--color-button-secondary-border'),

  'button-secondary-bg-hover': withOpacity('--color-button-secondary-bg-hover'),
  'button-secondary-border-hover': withOpacity('--color-button-secondary-border-hover'),
  'button-secondary-border-focus': withOpacity('--color-button-secondary-border-focus'),
  'button-secondary-bg-active': withOpacity('--color-button-secondary-bg-active'),
  'button-secondary-border-active': withOpacity('--color-button-secondary-border-active'),

  /* Button Secondary Outline */
  'button-outline-secondary-text': withOpacity('--color-button-outline-secondary-text'),
  'button-outline-secondary-bg': withOpacity('--color-button-outline-secondary-bg'),
  'button-outline-secondary-border': withOpacity('--color-button-outline-secondary-border'),

  'button-outline-secondary-bg-hover': withOpacity('--color-button-outline-secondary-bg-hover'),
  'button-outline-secondary-text-hover': withOpacity('--color-button-outline-secondary-text-hover'),
  'button-outline-secondary-border-focus': withOpacity('--color-button-outline-secondary-border-focus'),
  'button-outline-secondary-bg-active': withOpacity('--color-button-outline-secondary-bg-active'),

  /* Button Action*/
  'button-action-text': withOpacity('--color-button-action-text'),
  'button-action-text-active': withOpacity('--color-button-action-text-active'),
  'button-action-text-hover': withOpacity('--color-button-action-text-hover'),
  'button-action-text-focus': withOpacity('--color-button-action-text-focus'),
  'button-action-text-down': withOpacity('--color-button-action-text-down'),
  'button-action-text-disabled': withOpacity('--color-button-action-text-disabled'),

  'button-action-bg': withOpacity('--color-button-action-bg'),
  'button-action-bg-active': withOpacity('--color-button-action-bg-active'),
  'button-action-bg-hover': withOpacity('--color-button-action-bg-hover'),
  'button-action-bg-focus': withOpacity('--color-button-action-bg-focus'),
  'button-action-bg-down': withOpacity('--color-button-action-bg-down'),
  'button-action-bg-disabled': withOpacity('--color-button-action-bg-disabled'),

  'button-action-border': withOpacity('--color-button-action-border'),
  'button-action-border-active': withOpacity('--color-button-action-border-active'),
  'button-action-border-hover': withOpacity('--color-button-action-border-hover'),
  'button-action-border-focus': withOpacity('--color-button-action-border-focus'),
  'button-action-border-down': withOpacity('--color-button-action-border-down'),
  'button-action-border-disabled': withOpacity('--color-button-action-border-disabled'),
  'button-outline-action-border': withOpacity('--color-button-outline-action-border'),
  'button-outline-action-border-focus': withOpacity('--color-button-outline-action-border-focus')
}

const attention = {
  'alert-bg': withOpacity('--color-alert-bg'),
  'alert-text': withOpacity('--color-alert-text'),
  'alert-light-bg': withOpacity('--color-alert-light-bg'),
  'alert-light-text': withOpacity('--color-alert-light-text'),
  'notice-bg': withOpacity('--color-notice-bg'),
  'notice-text': withOpacity('--color-notice-text')
}

const ecom = {
  discount: withOpacity('--color-discount')
}

const typography = {
  'content-text': withOpacity('--color-content-text')
}

const backgrounds = {
  'background-dark': withOpacity('--color-background-dark'),
  'background-darker': withOpacity('--color-background-darker'),
  'background-light': withOpacity('--color-background-light'),
  bg: withOpacity('--color-bg'),
  'background-gray': withOpacity('--color-background-gray'),
  'background-gray-light': withOpacity('--color-background-gray-light'),
  'bg-black': withOpacity('--color-bg-black')
}

const lineage = {
  'sativa-lighter': withOpacity('--color-sativa-lighter'),
  'sativa-light': withOpacity('--color-sativa-light'),
  sativa: withOpacity('--color-sativa'),
  'sativa-dark': withOpacity('--color-sativa-dark'),
  'hybrid-dark': withOpacity('--color-hybrid-dark'),
  hybrid: withOpacity('--color-hybrid'),
  'hybrid-light': withOpacity('--color-hybrid-light'),
  'indica-light': withOpacity('--color-indica-light'),
  indica: withOpacity('--color-indica'),
  'indica-dark': withOpacity('--color-indica-dark')
}

const terpenes = {
  'caryophyllene-lighter': withOpacity('--color-caryophyllene-lighter'),
  'caryophyllene-light': withOpacity('--color-caryophyllene-light'),
  caryophyllene: withOpacity('--color-caryophyllene'),
  'caryophyllene-dark': withOpacity('--color-caryophyllene-dark'),
  'caryophyllene-darker': withOpacity('--color-caryophyllene-darker'),
  'humulene-darker': withOpacity('--color-humulene-darker'),
  'humulene-dark': withOpacity('--color-humulene-dark'),
  humulene: withOpacity('--color-humulene'),
  'humulene-light': withOpacity('--color-humulene-light'),
  'humulene-lighter': withOpacity('--color-humulene-lighter'),
  'limonene-darker': withOpacity('--color-limonene-darker'),
  'limonene-dark': withOpacity('--color-limonene-dark'),
  limonene: withOpacity('--color-limonene'),
  'limonene-light': withOpacity('--color-limonene-light'),
  'limonene-lighter': withOpacity('--color-limonene-lighter'),
  'linalool-darker': withOpacity('--color-linalool-darker'),
  'linalool-dark': withOpacity('--color-linalool-dark'),
  linalool: withOpacity('--color-linalool'),
  'linalool-light': withOpacity('--color-linalool-light'),
  'linalool-lighter': withOpacity('--color-linalool-lighter'),
  'myrcene-darker': withOpacity('--color-myrcene-darker'),
  'myrcene-dark': withOpacity('--color-myrcene-dark'),
  myrcene: withOpacity('--color-myrcene'),
  'myrcene-light': withOpacity('--color-myrcene-light'),
  'myrcene-lighter': withOpacity('--color-myrcene-lighter'),
  'pinene-darker': withOpacity('--color-pinene-darker'),
  'pinene-dark': withOpacity('--color-pinene-dark'),
  pinene: withOpacity('--color-pinene'),
  'pinene-light': withOpacity('--color-pinene-light'),
  'pinene-lighter': withOpacity('--color-pinene-lighter'),
  'terpinolene-darker': withOpacity('--color-terpinolene-darker'),
  'terpinolene-dark': withOpacity('--color-terpinolene-dark'),
  terpinolene: withOpacity('--color-terpinolene'),
  'terpinolene-light': withOpacity('--color-terpinolene-light'),
  'terpinolene-lighter': withOpacity('--color-terpinolene-lighter')
}

module.exports = {
  ...social,
  ...primatives,
  ...brand,
  ...navigation,
  ...button,
  ...attention,
  ...ecom,
  ...backgrounds,
  ...lineage,
  ...terpenes
}
