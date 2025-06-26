import {appController} from '@/components/common/hooks/hookstate/appController'
import {BRAND_DATA} from '@/config/constant'
import {ArrowNarrowRightIcon} from '@heroicons/react/24/solid'
import {Fragment} from 'react'
import Location from '../Location'

const DeliveryCTA = () => {
  const {stateValues} = appController.useState(['myLocation', 'storeLocation'])

  const currentGeoState = stateValues.myLocation?.geoState
  if (!currentGeoState || !BRAND_DATA?.statesWithDelivery?.includes(currentGeoState)) {
    return null
  } else {
    return (
      <a href={'/delivery/' + stateValues.myLocation?.geoState + '/'}>
        <div className="mb-4 flex cursor-pointer flex-row items-center justify-center space-x-4 rounded bg-green p-4 text-center text-white hover:bg-green-light hover:text-black">
          <span className="text-lg">Cannabis Delivery Right to Your Door</span>
          <ArrowNarrowRightIcon className="h-6 w-6" />
        </div>
      </a>
    )
  }
}

const SideBar = ({storeTimings, storeData, selectedStore, selectStore}) => {
  if (!storeData || storeData?.length === 0)
    return (
      <div className="sideBar flex flex-col gap-3">
        <div className="font-gray-light mt-16 text-center font-bold">No Results Found</div>
      </div>
    )

  return (
    <div className="sideBar flex flex-col gap-3">
      <DeliveryCTA />
      {storeData?.map((store) => (
        <Fragment key={store.post_id}>
          <Location store={store} storeTimings={storeTimings} selectedStore={selectedStore} selectStore={selectStore} mapView={true} />
        </Fragment>
      ))}
    </div>
  )
}

export default SideBar
