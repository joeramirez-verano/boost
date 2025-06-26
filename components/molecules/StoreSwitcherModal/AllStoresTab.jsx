import {appController} from '@/components/common/hooks/hookstate/appController'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
// import {match} from '@/functions/common'
import {useState} from 'react'
import PickupStoreInfoCard from './PickupStoreInfoCard'
import SearchTab from './SearchTab'

/**
 *
 * @param props0
 * @param props0.variant
 */
export default function AllStoresTab({variant}) {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['activeTab'])
  const {activeTab} = switcherStateValues
  const {stateValues: appStateValues} = appController.useState(['allStoreLocations'])
  const {allStoreLocations} = appStateValues
  const [searchInputValue, setSearchInputValue] = useState('')
  const [filteredStores, setFilteredStores] = useState(allStoreLocations)

  const searchHandler = (event) => {
    const inputValue = event.target.value
    setSearchInputValue(inputValue)
    if (inputValue.length > 0) {
      // const tempStores = allStoreLocations.filter((store) => {
      //   return (
      //     match(store?.state?.post_title, inputValue) ||
      //     match(store?.state?.slug, inputValue) ||
      //     match(store?.slug, inputValue) ||
      //     match(store?.city, inputValue) ||
      //     match(store?.zip, inputValue)
      //   )
      // })
      setFilteredStores(tempStores)
    }
  }

  const clearSearchHanlder = () => {
    setSearchInputValue('')
    setFilteredStores(allStoreLocations)
  }

  if (variant === 'desktop' && activeTab !== 'allStores') return

  return (
    <div className={`flex h-full w-full flex-col gap-4  ${variant === 'mobile' ? 'overflow-y-auto px-4 pb-20' : 'py-8'}`}>
      <div className={`${variant === 'desktop' ? 'px-8' : ''}`}>
        <SearchTab
          searchInputplaceholder={'Search Store'}
          title={'All Stores'}
          searchInputValue={searchInputValue}
          searchHandler={searchHandler}
          clearSearchHanlder={clearSearchHanlder}
        />
      </div>
      <div className={`flex flex-col gap-4 ${variant === 'desktop' ? 'overflow-y-auto px-8' : ''}`}>
        {filteredStores.map((storeLocation, index) => {
          return <PickupStoreInfoCard storeLocation={storeLocation} key={index} variant={'allStores'} />
        })}
      </div>
    </div>
  )
}
