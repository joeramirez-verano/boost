'use client'
import RichText from '@/components/atoms/RichText'
import ReactImageMagnify from '@milosmladenovicwork/react-image-magnify'
import cn from 'classnames'
import Image from 'next/legacy/image'
import {PropTypes} from 'prop-types'
import styles from './Image.module.css'

/**
 * Render the Display Image component.
 * @author WebDevStudios
 * @param  {object}   props                    The component properties.
 * @param  {string}   props.alt                The image alt attribute.
 * @param  {string}   props.anchor             The image anchor.
 * @param  {string}   props.caption            The image caption.
 * @param  {string}   props.className          The image class name.
 * @param  {string}   props.href               A link wrapping the image.
 * @param  {number}   props.id                 The image id.
 * @param  {object}   props.imageMeta          The image meta.
 * @param  {string}   props.linkClass          The image link class name.
 * @param  {string}   props.linkTarget         The image link target.
 * @param  {boolean}  props.nextImageFill      Whether next/image should be set to fill or have height/width defined.
 * @param  {string}   props.rel                The relationship of the linked URL.
 * @param  {string}   props.url                The image src attribute.
 * @param  {string}   props.src                The image src attribute.
 * @param  {boolean}  props.styleOnlyClassName Optional If true only classNames styles will be applied.
 * @param  {Function} props.onClick            Click Event
 * @param  {string}   props.layout             Next Image Layout
 * @param  {object}   props.props              Image props
 * @return {Element}                           The DisplayImage component.
 */
export default function DisplayImage(props) {
  // Set the image size.
  const imageSize = {
    height: (props?.height ?? props?.imageMeta?.mediaDetails?.height) || '100%',
    width: (props.width ?? props?.imageMeta?.mediaDetails?.width) || '100%'
  }

  // Set the image src.
  let source = props?.imageMeta?.mediaItemUrl ?? props?.url ?? props?.src

  // No image src? Bail.
  if (!source) {
    return null
  }

  source = source.replace('https://admin.', 'https://')

  /**
   * @param  {string}  url - The URL to check.
   * @return {boolean}     -
   */
  function isLocalURL(url) {
    // Check if the URL starts with your local domain or path prefix
    return url.startsWith('/')
  }
  const isLocalImage = isLocalURL(source)

  let sourceDomain
  // Get the src domain from url.
  try {
    sourceDomain = new URL(source)
  } catch {
    sourceDomain = null
  }

  // Get all domains registered in next.config.js.
  let domains = process.env.NEXT_PUBLIC_IMAGE_DOMAINS

  // Split domains string into individual domains.
  domains = !domains || !domains.length ? [] : domains.split(', ')

  /**
   * Next.js <Image /> component.
   * @see https://nextjs.org/docs/basic-features/image-optimization
   * @return {Element} The next/image component.
   */
  function NextImage() {
    const imageProps = {
      ...props.props,
      alt: props?.alt,
      id: props?.anchor,
      src: source,
      onClick: props.onClick,
      layout: props.layout
    }

    // Add extra props depending on whether image needs to be set to "fill".
    if (props?.nextImageFill) {
      imageProps.layout = 'fill'
    } else {
      imageProps.height = imageSize?.height
      imageProps.width = imageSize?.width
    }
    // Check it is storybook or not
    let isStorybook = process.env.SB ? process.env.SB : false
    // We make next/image 'unoptimized' on storybook
    // https://github.com/vercel/next.js/issues/18393
    return (
      <>
        {isStorybook ? (
          // eslint-disable-next-line
          <Image {...imageProps} className={cn(props?.nextImageFill ? styles.imageFill : null, props.className)} unoptimized />
        ) : (
          // eslint-disable-next-line
          <Image {...imageProps} className={cn(props?.nextImageFill ? styles.imageFill : null, props.className)} />
        )}
      </>
    )
  }

  /**
   * HTML image component.
   * @return {Element} A plain ol' HTML <img> tag.
   */
  function HtmlImage() {
    return (
      <img
        {...props.props}
        id={props?.anchor}
        className={cn(props?.styleOnlyClassName ? null : styles.image, props?.className)}
        onClick={props.onClick}
        src={source}
        alt={props?.alt}
        height={imageSize?.height}
        width={imageSize?.width}
      />
    )
  }

  /**
   * Image Magnify component.
   * @return {Element} A React Image Magnify Element for media linked image
   */
  function ImageMagnify() {
    const smallImageSrc = props?.imageMeta?.mediaDetails?.sizes.filter((size) => {
      return size?.name == 'medium_large' || size?.name == 'thumbnail'
    })

    return (
      <ReactImageMagnify
        className="[&>div>img]:max-w-none"
        {...{
          smallImage: {
            alt: props?.alt,
            isFluidWidth: true,
            src: smallImageSrc ? smallImageSrc[smallImageSrc?.length - 1]?.sourceUrl : null
          },
          largeImage: {
            src: source,
            width: props?.imageMeta?.mediaDetails?.width,
            height: props?.imageMeta?.mediaDetails?.height
          },
          isHintEnabled: true,
          shouldHideHintAfterFirstActivation: false,
          shouldUsePositiveSpaceLens: true,
          enlargedImagePosition: 'over'
        }}
      />
    )
  }

  /**
   * Image Link component.
   * @param  {object}  props          The component propterties.
   * @param  {Array}   props.children Any children.
   * @return {Element}                The ImageLink component.
   */
  function ImageLink({children}) {
    return (
      <>
        {props?.href === source || props?.linkDestination == 'media' ? (
          <ImageMagnify />
        ) : (
          <a className={props?.linkClass} href={props?.href} rel={props?.rel} target={props?.linkTarget}>
            {children}
          </a>
        )}
      </>
    )
  }

  /**
   * Image caption component.
   * @return {Element} An image caption.
   */
  function Caption() {
    return (
      <div className={styles.caption}>
        <RichText tag="span">{props?.caption}</RichText>
      </div>
    )
  }

  /**
   * If src domain includes allowed domains, use <Image /> component.
   * @see https://nextjs.org/docs/basic-features/image-optimization#configuration
   */
  if (domains?.includes(sourceDomain?.host) || isLocalImage) {
    const style = props?.styleOnlyClassName
      ? cn(props?.className)
      : cn(styles.image, props?.className, props?.id ? `image-${props?.id}` : '', props?.nextImageFill ? styles.hasImageFill : null)
    return (
      <div id={props?.anchor} className={style}>
        {props?.href ? (
          <ImageLink>
            <NextImage />
          </ImageLink>
        ) : (
          <NextImage />
        )}
        {!!props?.caption && <Caption />}
      </div>
    )
  }

  /**
   * Otherwise, just use HTML <img />.
   */
  return (
    <>
      {props?.href ? (
        <ImageLink>
          <HtmlImage />
        </ImageLink>
      ) : (
        <HtmlImage />
      )}
      {!!props?.caption && <Caption />}
    </>
  )
}

DisplayImage.propTypes = {
  alt: PropTypes.string,
  anchor: PropTypes.string,
  caption: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  height: PropTypes.any,
  href: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageMeta: PropTypes.shape({
    altText: PropTypes.string,
    mediaItemUrl: PropTypes.string,
    mediaDetails: PropTypes.shape({
      height: PropTypes.number,
      sizes: PropTypes.array,
      width: PropTypes.number
    })
  }),
  linkClass: PropTypes.string,
  linkTarget: PropTypes.string,
  nextImageFill: PropTypes.bool,
  rel: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.any
}
