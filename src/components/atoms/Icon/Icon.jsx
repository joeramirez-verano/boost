import {icons} from './icons'

/**
 * Convert icon size to px taking rem into account.
 * @param  {string} size The icon size.
 * @return {number}      The size in px.
 */
export function sizeToPx(size) {
  const sizeToRem = {
    sm: '1',
    md: '1.5',
    lg: '2',
    xl: '4'
  }

  return sizeToRem[size] * 16
}

/**
 * Verano Icon
 * Define size for safelist
 * size-[16px] size-[24px] size-[32px] size-[64px]
 * @param  {string}  props      React Props
 * @param  {string}  props.name The icon name define in the ./icons.js file
 * @param  {string}  props.size The icon size
 * @return {Element}            The icon
 */
export default function Icon({name, size = 'md', stroke, className}) {
  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }
  return (
    <span className={`m-0 inline-block p-0  size-[${sizeToPx(size)}px] ${className}`}>
      <IconComponent stroke={stroke} />
    </span>
  )
}
