import Icon from '@/components/atoms/Icon'
import { appController } from '@/components/common/hooks/hookstate/appController'
import { storeSwitcherController } from '@/components/common/hooks/hookstate/storeSwitcherController'
import { CURRENT_BRAND } from '@/config/constant'
import { findSweedStore, getJaneStoreDeliveryInfo, getSweedStoreDeliveryInfo } from '@/functions/sweed'
import { useNavigate } from 'react-router-dom'

export default function DeliveryStoreInfoCard({ deliveryStore }) {
  const navigate = useNavigate()
  const { stateValues: appStateValues } = appController.useState(['sweedStoreInfolist', 'isDesktop'])
  const { sweedStoreInfolist, isDesktop } = appStateValues

  const theme = {
    MUV: {
      cardStyle: 'shadow-xl',
      deliveryDetailStyle: 'text-gray-400'
    },
    ZLD: {
      cardStyle: 'shadow-xl',
      deliveryDetailStyle: 'text-gray-400'
    }
  }
  if (!deliveryStore) return

  let storeInfo
  if (deliveryStore.type === 'hub') {
    storeInfo = deliveryStore
  } else {
    const sweedStore = findSweedStore(deliveryStore.slug, sweedStoreInfolist)
    storeInfo = sweedStore ? getSweedStoreDeliveryInfo(sweedStore) : getJaneStoreDeliveryInfo(deliveryStore)
  }

  return (
    <div className={`${theme[CURRENT_BRAND].cardStyle} flex w-full flex-col items-start gap-2 rounded-xl bg-white p-4`}>
      <div className="flex w-full flex-col items-start gap-4 rounded-[4px]">
        <div className="flex w-full items-center gap-4">
          <div className="flex flex-1 flex-col items-start">
            <span className="text-xs">Delivery from</span>
            <span className="text-base font-bold">{storeInfo?.name}</span>
          </div>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-gray-200 bg-gray-50 p-1"
            onClick={(e) => {
              e.stopPropagation()
              if (storeInfo.type === 'jane') {
                storeSwitcherController.toggle()
                navigate(`/locations/${storeInfo?.slug}`)
              } else if (storeInfo.type === 'hub') {
                storeSwitcherController.toggle()
                navigate(storeInfo.url)
              } else if (isDesktop) {
                storeSwitcherController.switchActiveTab('storeDetails')
              } else {
                storeSwitcherController.toggleStoreDetailsModal()
              }
            }}
          >
            <Icon name="info" />
          </button>
        </div>

        <hr className="self-stretch text-gray-200" />

        <div className="w-full text-xs">
          {storeInfo?.minOrder && (
            <div className="flex">
              <span className={`${theme[CURRENT_BRAND].deliveryDetailStyle} flex-1`}>Min order</span>
              <span className="flex-1">${storeInfo?.minOrder}</span>
            </div>
          )}
          {storeInfo?.deliveryFee && (
            <div className="flex">
              <span className={`${theme[CURRENT_BRAND].deliveryDetailStyle} flex-1`}>Delivery fee</span>
              <span className="flex-1"> ${storeInfo?.deliveryFee}</span>
            </div>
          )}
          {storeInfo?.storeHours && (
            <div className="flex">
              <span className={`${theme[CURRENT_BRAND].deliveryDetailStyle} flex-1`}>{storeInfo?.storeHoursDay}</span>
              <span className="flex-1">
                {storeInfo?.storeHours?.open} - {storeInfo?.storeHours?.closed}
              </span>
            </div>
          )}
        </div>
      </div>

      {storeInfo?.freeShipmentThreshold && (
        <div className="relative flex w-full items-stretch overflow-hidden break-words rounded-md border-2 border-black">
          <div className="flex items-center justify-center p-2">
            <Icon name="Delivery truck" />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-0 p-2">
            <div>
              Free delivery from <span>${storeInfo?.freeShipmentThreshold}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
