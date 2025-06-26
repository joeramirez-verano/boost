import {appController} from '@/components/common/hooks/hookstate/appController'

const StoreTypeSwitcher = () => {
  const {stateValues} = appController.useState(['myLocation', 'storeLocation'])
  const {myLocation, storeLocation} = stateValues
  const storePreference = myLocation?.storeType
  const locationSlug = myLocation?.id
  const orderType = myLocation?.orderType

  const locationHasRecMenu = !!storeLocation?.storeEmbeds.recreationalStoreId
  const locationHasMedMenu = !!storeLocation?.storeEmbeds.medicalStoreId
  const orderTypeIsDelivery = orderType === 'delivery'
  const isSweedStore = storeLocation?.storeEmbeds?.storePlatform === 'Sweed'
  if (!locationHasRecMenu || !locationHasMedMenu || orderTypeIsDelivery || isSweedStore) return null
  return (
    <span className="border-gray inline-flex rounded border bg-white p-0.5 max-sm:flex-1">
      <a
        href={`/locations/${locationSlug}/recreational-menu`}
        onClick={() => appController.partialUpdateKey('myLocation', {storeType: 'recreational'})}
        className={`relative inline-flex items-center rounded px-2 py-2 text-center text-xs font-semibold normal-case focus:z-10 max-sm:block max-sm:flex-1 md:px-3 md:py-2 md:text-sm ${
          storePreference === 'medical' ? 'bg-white text-black' : 'bg-black text-white'
        }`}
      >
        Adult Use
      </a>
      <a
        href={`/locations/${locationSlug}/medical-menu`}
        onClick={() => appController.partialUpdateKey('myLocation', {storeType: 'medical'})}
        className={`relative inline-flex items-center rounded px-2 py-2 text-center text-xs font-semibold normal-case focus:z-10 max-sm:block  max-sm:flex-1 md:px-3 md:py-2 md:text-sm ${
          storePreference === 'medical' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        Medical
      </a>
    </span>
  )
}

export default StoreTypeSwitcher
