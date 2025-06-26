import Icon from '@/components/atoms/Icon'

/**
 *
 * @param props0
 * @param props0.amenities
 */
export default function StoreCardIcons({amenities}) {
  if (!amenities) return
  return (
    <div className="mt-2 flex gap-3">
      {amenities?.map((amenity, index) => {
        return <Icon name={amenity} key={index} />
      })}
    </div>
  )
}
