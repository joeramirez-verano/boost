import {SwitcherSpinner} from '@/components/atoms/StoreSwitcherSpinner/index'
import {appController} from '@/components/common/hooks/hookstate/appController'
import StoreTypeSwitcher from '@/components/molecules/Header/ZLD/StoreTypeSwitcher'
import {BRAND, CURRENT_BRAND} from '@/config/constant'
import StoreSwitcherButton from './storeSwitcherButton'

const LocationBar = () => {
  // COMPOENNTS-3968 set the myLocation cookie to show location bar if no store is selected
  const {storeLocation, myLocation, stateValues} = appController.useState(['myLocation', 'storeLocation', 'deliveryAddress'])

  // useEffect(() => {
  //   appController.menuLocationRouter('stateSpecific')
  // }, [storeLocation, myLocation])

  // COMPONENTS-5212 Client Side vs. Server Side Rendering Optimization
  if (!stateValues.storeLocation && (!stateValues.deliveryAddress || stateValues.deliveryAddress === '')) return

  const backgroundColor = {
    MUV: 'bg-gray-50',
    ZLD: 'bg-gray-900'
  }
  return (
    <div id="location-bar" className={`relative z-10 ${backgroundColor[CURRENT_BRAND]} md:block`}>
      <div className="relative mx-auto flex max-w-full items-center justify-between gap-2 px-3 py-2 xl:container">
        {!stateValues.storeLocation && (!stateValues.deliveryAddress || stateValues.deliveryAddress === '') ? (
          <SwitcherSpinner />
        ) : (
          <>
            <StoreSwitcherButton />
            {CURRENT_BRAND === BRAND.ZLD && <StoreTypeSwitcher />}
          </>
        )}
      </div>
    </div>
  )
}

export default LocationBar
