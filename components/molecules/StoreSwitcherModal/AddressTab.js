// import Icon from '../Icon'
// import {storeSwitcherController} from '../hooks/hookstate/storeSwitcherController'
// import {getSuggessions, retrieveAddress} from '@/components/common/map'
// import {MAP_BOX_SETTINGS} from '@/config'
// import {BRAND, BRAND_DATA, CURRENT_BRAND} from '@/config/constant'

// import {debounce} from 'lodash'
// import {useEffect, useState} from 'react'
// import SearchTab from './SearchTab'

// /**
//  * Delivery Search component.
//  * @param            props0
//  * @param            props0.variant
//  * @return {Element}                - Delivery Search component
//  */
// export default function AddressTab({variant}) {
//   const {stateValues: switcherStateValues} = storeSwitcherController.useState(['activeTab', 'deliveryAddress'])
//   const {activeTab, deliveryAddress} = switcherStateValues
//   const [searchInputValue, setSearchInputValue] = useState('')
//   const [suggestions, setSuggestions] = useState(null)

//   useEffect(() => {
//     setSearchInputValue(deliveryAddress)
//     setSuggestions(null)
//   }, [activeTab])

//   const accessToken = MAP_BOX_SETTINGS.MAPBOX_TOKEN
//   // To learn more about the session_token and how keeping a static session_token helps in reducing the billing please visit: https://docs.mapbox.com/api/search/search-box/#session-billing
//   const sessionToken = 'c3ee9185-a434-44b4-b85b-16a27fafc36f'

//   const searchHandler = debounce(async (inputValue) => {
//     const bbox =
//       CURRENT_BRAND === BRAND.MUV
//         ? MAP_BOX_SETTINGS.DEFAULT_VIEW_PORT.maxBounds // Bounding box for florida state
//         : [-125.00165, 24.9493, -66.9326, 49.5904] // Bounding box for the continental US
//     const suggestions = await getSuggessions(inputValue, accessToken, sessionToken, bbox)
//     const filteredSuggestions = suggestions
//       ? suggestions.filter((suggestion) => {
//           return BRAND_DATA.states.find((state) => {
//             return suggestion.place_formatted.includes(state.title)
//           })
//         })
//       : null
//     setSuggestions(filteredSuggestions)
//   }, 500)

//   const clearSearchHanlder = () => {
//     setSearchInputValue('')
//     setSuggestions(null)
//   }

//   const selectSuggestion = async (mapbox_id) => {
//     const address = await retrieveAddress(accessToken, sessionToken, mapbox_id)
//     storeSwitcherController.findAndSelectDeliveryStore(address)
//     setSuggestions(null)
//     if (variant === 'mobile') storeSwitcherController.toggleAddressModal()
//   }

//   if (variant === 'desktop' && activeTab !== 'address') return

//   return (
//     <div className={`flex h-full w-full flex-col items-stretch ${variant === 'desktop' ? 'p-8' : ''}`}>
//       <SearchTab
//         searchInputplaceholder={'Search'}
//         title={'Enter Address'}
//         isFocused={true}
//         searchInputValue={searchInputValue}
//         searchHandler={(e) => {
//           setSearchInputValue(e.target.value)
//           searchHandler(e.target.value)
//         }}
//         clearSearchHanlder={clearSearchHanlder}
//       />
//       <div className="flex flex-col gap-2 overflow-y-auto py-4 ">
//         {suggestions?.map((suggestion, index) => {
//           return (
//             <button
//               key={index}
//               className="text-md flex flex-nowrap items-center gap-1 py-2 text-left"
//               onClick={() => {
//                 selectSuggestion(suggestion.mapbox_id)
//               }}
//               style={{whiteSpace: 'nowrap'}}
//             >
//               <Icon name={'location-pin-grey'} />
//               <span className="font-heading font-bold">{suggestion.name}</span>
//               <span className="w-full truncate text-gray-600"> {suggestion.place_formatted}</span>
//             </button>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
