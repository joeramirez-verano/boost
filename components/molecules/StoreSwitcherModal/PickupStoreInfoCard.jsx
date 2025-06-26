import Icon from '@/components/atoms/Icon'
import { appController } from '@/components/common/hooks/hookstate/appController'
import { storeSwitcherController } from '@/components/common/hooks/hookstate/storeSwitcherController'
import { getCurrentDayStoreHours, getIsStoreClosed } from '@/components/common/map'
import { CURRENT_BRAND } from '@/config/constant'
import { findSweedStore, getSweedStoreAmenities } from '@/functions/sweed'
import { useNavigate } from 'react-router-dom'
import StoreCardIcons from './StoreCardIcons'

export default function PickupStoreInfoCard({ storeLocation, variant }) {
  const navigate = useNavigate()
  const { stateValues: switcherStateValues } = storeSwitcherController.useState(['isAllStoresModalOpen'])
  const { isAllStoresModalOpen } = switcherStateValues
  const { stateValues: appStateValues } = appController.useState(['sweedStoreInfolist', 'isDesktop'])
  const { sweedStoreInfolist, isDesktop } = appStateValues
  const sweedStoreDetails = findSweedStore(storeLocation?.slug, sweedStoreInfolist)
  const amenities = getSweedStoreAmenities(storeLocation?.slug, sweedStoreDetails)
  const todayStoreHours = getCurrentDayStoreHours(storeLocation?.hours)
  const address1 = storeLocation?.nap?.address1 || storeLocation?.nap?.address_1
  const address2 = storeLocation?.nap?.address2 || storeLocation?.nap?.address_2
  const isStoreClosed = getIsStoreClosed(storeLocation?.hours)

  const StoreCardStyles = {
    MUV: {
      currentStore: 'border-orange-light',
      allStores: 'border-gray-200 hover:shadow-xl cursor-pointer'
    },
    ZLD: {
      currentStore: 'border-black',
      allStores: 'border-gray-200 hover:shadow-xl cursor-pointer'
    }
  }

  return (
    <div
      className={`${StoreCardStyles[CURRENT_BRAND][variant]} flex w-full flex-col items-start gap-2 rounded-xl border bg-white p-4`}
      onClick={() => {
        storeSwitcherController.selectPickupStore(storeLocation)
        storeSwitcherController.switchActiveTab('pickup')
        if (isAllStoresModalOpen) {
          storeSwitcherController.toggleAllStoresModal()
        }
      }}
    >
      <div className="flex w-full flex-col items-start gap-4 rounded-[4px]">
        <div className="flex w-full items-center justify-around gap-4">
          <div className="flex w-full flex-1 flex-col items-start">
            <span className="text-base font-bold">{storeLocation.title}</span>
            <span className="text-xs">
              {address1}
              {address2 ? ' ' + address2 : ''}, {storeLocation?.nap?.city}, {storeLocation?.state?.abbr?.toUpperCase()}{' '}
              {storeLocation?.nap?.zip}, USA
            </span>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-gray-200 bg-gray-50 p-1"
            onClick={(e) => {
              e.stopPropagation()
              storeSwitcherController.selectPickupStore(storeLocation)
              if (isDesktop) {
                if (!sweedStoreDetails) {
                  storeSwitcherController.toggle()
                  navigate(`/locations/${storeLocation?.slug}`)
                } else {
                  storeSwitcherController.switchActiveTab('storeDetails')
                }
              } else {
                if (!sweedStoreDetails) {
                  if (isAllStoresModalOpen) {
                    storeSwitcherController.toggleAllStoresModal()
                  }
                  storeSwitcherController.toggle()
                  navigate(`/locations/${storeLocation?.slug}`)
                } else {
                  storeSwitcherController.toggleStoreDetailsModal('storeDetails')
                }
              }
            }}
          >
            <Icon name="info" />
          </button>
        </div>

        <hr className="self-stretch text-gray-200" />

        <div>
          <div className="text-xs">
            Today: {isStoreClosed ? 'Closed' : `${todayStoreHours?.open} - ${todayStoreHours?.closed}`}
          </div>
          <StoreCardIcons amenities={amenities} />
        </div>
      </div>
    </div>
  )
}
