import useStoreTime from '@/functions/useStoreTime'

const StoreTime = ({slug, storeTimings}) => {
  const store = storeTimings.find((data) => data.node?.slug?.replace('–', '-') === slug)?.node
  const storeHours = store?.hours
  const locationStatus = store?.location_status?.locationStatus
  const {specialMessage, locationTime, noHours} = useStoreTime({slug, storeHours, locationStatus})

  if (noHours)
    return (
      <div className={'storeHours'}>
        <div className="hoursli mb-1 mt-1 grid" itemProp="openingHours">
          <span className="text-blacktracking-wide font-body">No Time</span>
        </div>
      </div>
    )

  return (
    <>
      {specialMessage && (
        <div className="gi hoursli  mb-1">
          <div className="block font-bold">{specialMessage}</div>
        </div>
      )}
      <div className={'storeHours'}>
        <div className="hoursli mb-1 mt-1 grid" itemProp="openingHours">
          <span className="font-body tracking-wide text-black">{locationTime}</span>
        </div>
      </div>
    </>
  )
}

export default StoreTime
