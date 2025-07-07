import {CURRENT_BRAND} from '@/config/constant'
import PropTypes from 'prop-types'
import React from 'react'
// import styles from './Button.module.css'

/**
 * @param  {object}          props                    The props object.
 * @param  {string}          props.currentBrand       The brand either ZLD or MUV
 * @param  {string}          props.attributes         Optional attributes to add to the button.
 * @param  {string}          props.className          Optional classNames.
 * @param  {boolean}         props.styleOnlyClassName Optional If true only classNames styles will be applied.
 * @param  {boolean}         props.disabled           Whether the button is disabled.
 * @param  {boolean}         props.fluid              Whether the button should be full width.
 * @param  {Function}        props.onClick            Button onClick function.
 * @param  {string}          props.size               Button size.
 * @param  {object}          props.style              Custom button styles.
 * @param  {boolean}         props.styleOutline       Whether this button has the outline style.
 * @param  {string}          props.tag                The wrapper tag.
 * @param  {string}          props.text               Button text.
 * @param  {string}          props.type               Button type.
 * @param  {string}          props.url                Button link url.
 * @param  {boolean}         props.urlExternal        Whether the url on this button links to an external site.
 * @param  {boolean}         props.forwardParam       Whether to send query params.
 * @param  {React.ReactNode} props.children           Whether the url on this button links to an external site.
 * @param                    props.id
 * @return {Element}                                  The button component.
 */
export default function Button({
  currentBrand = CURRENT_BRAND,
  attributes,
  className,
  styleOnlyClassName = false,
  disabled = false,
  fluid,
  onClick,
  size = 'md',
  style,
  styleOutline = false,
  tag = 'button',
  text,
  type = 'primary',
  url,
  urlExternal = false,
  forwardParam,
  children,
  id
}) {
  // Strip all HTML tags and HTML entities from the text prop
  if (text) {
    text = text.replace(/<[^>]*>/g, '') // Remove HTML tags
    const htmlEntities = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&apos;': "'"
    }
    text = text.replace(/&[^;]+;/g, (match) => htmlEntities[match]) // Replace HTML entities
  }
  const buttonClassNames = styleOnlyClassName
    // ? cn(
    //     className,
    //     currentBrand == 'rounded',
    //     fluid && styles.fluid,
    //     disabled && styles.disabled,
    //     styles[size],
    //     styles[type],
    //     styleOutline && styles.outline
    //   )
    // : cn(
    //     className,
    //     currentBrand == 'rounded',
    //     styles.button,
    //     fluid && styles.fluid,
    //     disabled && styles.disabled,
    //     styles[size],
    //     styles[type],
    //     styleOutline && styles.outline
    //   )

  if (url) {
    return urlExternal ? (
      <a href={url} className={buttonClassNames || ""} id={id} aria-label={text} style={style} {...attributes} onClick={onClick}>
        {text ? text : [children]}
      </a>
    ) : (
      <a href={url} className={buttonClassNames || ""} id={id} aria-label={text} style={style} {...attributes} onClick={onClick}>
        <>{text ? text : [children]}</>
      </a>
    )
  } else {
    return (
      // Render element with default button tag.
      React.createElement(
        `${tag}`,
        {
          className: buttonClassNames || "",
          'aria-label': text,
          onClick,
          ...attributes,
          disabled,
          style,
          id
        },
        text ? text : [children]
      )
    )
  }
}

Button.propTypes = {
  currentBrand: PropTypes.string,
  attributes: PropTypes.object,
  className: PropTypes.string,
  styleOnlyClassName: PropTypes.bool,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  style: PropTypes.shape({
    background: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string
  }),
  styleOutline: PropTypes.bool,
  tag: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'action', 'ghost']),
  url: PropTypes.string,
  urlExternal: PropTypes.bool,
  id: PropTypes.string
}
