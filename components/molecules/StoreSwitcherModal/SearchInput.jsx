import Icon from '@/components/atoms/Icon'
import {appController} from '@/components/common/hooks/hookstate/appController'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {CURRENT_BRAND} from '@/config/constant'
import {useEffect, useRef} from 'react'

/**
 *
 * @param props0
 * @param props0.placeholder
 * @param props0.isFocused
 * @param props0.searchInputValue
 * @param props0.searchHandler
 * @param props0.clearSearchHanlder
 */
export default function SearchInput({placeholder, isFocused = false, searchInputValue = '', searchHandler, clearSearchHanlder}) {
  const inputRef = useRef(null)
  const {stateValues} = storeSwitcherController.useState(['activeTab', 'isDesktop', 'isAddressModalOpen'])
  const {activeTab, isAddressModalOpen} = stateValues
  const {stateValues: appStateValues} = appController.useState(['isDesktop'])
  const {isDesktop} = appStateValues

  useEffect(() => {
    if (isFocused && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus()
      }, 500)
    }
  }, [isFocused])

  const theme = {
    MUV: {
      inputSearch: 'focus-within:!border-orange focus-within:hover:none hover:border-gray-400 rounded-sm'
    },
    ZLD: {
      inputSearch: 'focus-within:!border-black border-gray-600 focus-within:hover:none hover:border-gray-800 rounded-sm'
    }
  }
  return (
    <div id="search" className={`${theme[CURRENT_BRAND].inputSearch} flex items-center gap-2 border bg-white px-2 `}>
      <div className="mt-1">
        <button>
          <Icon name={'search'} />
        </button>
      </div>
      <input
        type="text"
        ref={inputRef}
        value={searchInputValue}
        className="w-full truncate py-1 outline-none"
        placeholder={placeholder}
        onClick={(event) => {
          event.stopPropagation()
          if (isDesktop) {
            activeTab === 'delivery' && storeSwitcherController.switchActiveTab('address')
          } else {
            activeTab === 'delivery' && !isAddressModalOpen ? storeSwitcherController.toggleAddressModal() : null
          }
        }}
        onChange={searchHandler}
      />
      {searchInputValue?.length > 0 && (activeTab !== 'delivery' || isAddressModalOpen) && (
        <button className="mt-1" onClick={clearSearchHanlder}>
          <Icon name={'close'} />
        </button>
      )}
    </div>
  )
}
