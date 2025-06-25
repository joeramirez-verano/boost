'use client'
import Image from '@/components/atoms/Image'
import {appController} from '@/components/common/hooks/hookstate/appController'
import arraySwap from '@/functions/arraySwap'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {brandsInState} from './brandInStateConfig'

/**
 * Brand Gallery Component
 * @param  {object}  props               Default Props
 * @param  {object}  props.location      Current location/state of user
 * @param  {object}  props.fadeInOutTime Animation Time
 * @param  {object}  props.swapDelay     Delay between items swaping
 * @return {Element}                     Return Element
 */
export default function BrandGallery({location, fadeInOutTime, swapDelay}) {
  const [gallery, setGallery] = useState([])
  const [vw, setVw] = useState(1280) // Initial viewport size rather null
  const [activeIndex, setActiveIndex] = useState(0)
  const [maxItem, setMaxItem] = useState(6)
  const {stateValues} = appController.useState(['myLocation'])
  const {myLocation} = stateValues

  useEffect(() => {
    const filterGallery = brandsInState[location] || []
    setGallery(filterGallery)
  }, [location])

  useEffect(() => {
    if (Array.isArray(gallery) && gallery.length > maxItem) {
      const interval = setInterval(() => {
        let randomIndex
        do {
          randomIndex = Math.floor(Math.random() * maxItem) // Randomly choose which to change
        } while (randomIndex === activeIndex) // Don't repeat a number twice

        // Update the data after index item fadeout
        setTimeout(() => {
          setGallery((prevGallery) => {
            return arraySwap(prevGallery, randomIndex, maxItem)
          })
          setActiveIndex(null)
        }, fadeInOutTime)

        // randomIndex to fadeout item
        setActiveIndex(randomIndex)
      }, swapDelay)

      return () => clearInterval(interval)
    } else {
      setActiveIndex(null)
    }
  }, [activeIndex, gallery, maxItem, fadeInOutTime, swapDelay])

  // Choose item to show based on viewport size to make it reponsive
  useEffect(() => {
    setVw(window.innerWidth)

    if (typeof window === 'undefined') return
    window.addEventListener('resize', () => setVw(window.innerWidth))

    vw >= 1024 ? setMaxItem(6) : setMaxItem(4)
  }, [vw])

  // TODO: uncomment this section when we're ready to roll out Sweed homepage components on ZLD.
  // if the store type is sweed, then don't render the brand gallery
  // if (myLocation?.storeType === 'sweed') return null

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-xl px-4 py-6 lg:max-w-6xl 2xl:max-w-7xl">
        <div className="flex max-h-24 justify-around space-x-1 text-white lg:grid-cols-6 lg:space-x-0">
          {Array.isArray(gallery) &&
            gallery.slice(0, maxItem).map(({name, media, states, url, scale}, index) => (
              <div
                key={index}
                className={`flex items-center justify-center lg:w-32  2xl:w-40 ${media != null ? `lg:h-16  2xl:h-24` : ``} ${
                  index === activeIndex ? 'animate-fadeout' : 'animate-fadein'
                }`}
                style={{animationDuration: fadeInOutTime + 'ms'}}
              >
                {url ? (
                  <Link href={url} className={`relative aspect-auto`}>
                    {media != null ? (
                      <Image
                        className={`!mb-0 h-8 w-20 rounded-none object-scale-down px-4 lg:!h-16 lg:!w-40 [@media(min-width:480px)]:h-12 [@media(min-width:480px)]:w-28 ${scale}`}
                        layout="fill"
                        src={media}
                        alt={name}
                      />
                    ) : (
                      <span className="inline-block py-2 text-xl font-bold lg:text-4xl">{name}</span>
                    )}
                  </Link>
                ) : (
                  <span className={`relative aspect-auto`} key={index}>
                    {media != null ? (
                      <Image
                        className={`!mb-0 h-8 w-20 rounded-none object-scale-down px-4 lg:!h-14 lg:!w-36 [@media(min-width:480px)]:h-12 [@media(min-width:480px)]:w-28 ${scale}`}
                        layout="fill"
                        src={media}
                        alt={name}
                      />
                    ) : (
                      <span className="inline-block py-2 text-xl font-bold lg:text-4xl">{name}</span>
                    )}
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
