import Icon from '@/components/atoms/Icon'
import {appController} from '@/components/common/hooks/hookstate/appController'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import SearchInput from './SearchInput'

/**
 * Delivery Search component.
 * @param            props0
 * @param            props0.title
 * @param            props0.searchInputplaceholder
 * @param            props0.isFocused
 * @param            props0.searchInputValue
 * @param            props0.searchHandler
 * @param            props0.clearSearchHanlder
 * @return {Element}                               - Delivery Search component
 */
export default function SearchTab({title, searchInputplaceholder, isFocused = false, searchInputValue, searchHandler, clearSearchHanlder}) {
  const {stateValues: appStateValues} = appController.useState(['isDesktop'])
  const {isDesktop} = appStateValues
  return (
    <div className="flex flex-col gap-4 ">
      {isDesktop && (
        <div id="search-tab-heading" className="flex items-center gap-3">
          <button
            className="hidden h-8 w-8 items-center justify-center rounded-sm border-2 border-gray-100 bg-gray-50 hover:bg-gray-200 md:flex"
            onClick={() => storeSwitcherController.gotoPreviousTab()}
          >
            <Icon name={'left'} />
          </button>
          <h1 className="m-0 p-0 text-xl tracking-tight">{title}</h1>
        </div>
      )}

      <SearchInput
        placeholder={searchInputplaceholder}
        isFocused={isFocused}
        searchInputValue={searchInputValue}
        searchHandler={searchHandler}
        clearSearchHanlder={clearSearchHanlder}
      />
    </div>
  )
}
