import ReferAlert from '@/components/atoms/ReferAlert'
import CardProductSmall from '@/components/molecules/CardProductSmall'
import {searchClient} from '@/lib/algolia/connector'
import {ArrowLeftIcon} from '@heroicons/react/24/solid'
import {useState} from 'react'
import {Configure, Hits, Index, InstantSearch, SearchBox} from 'react-instantsearch'
import MediaQuery from 'react-responsive'

const HitProducts = ({hit}) => (
  <>
    <CardProductSmall
      productName={hit.productTitle.replace('�', 'Ü')}
      slug={hit.slug}
      lineage=""
      description={hit.pageDescription.replace('�', 'Ü')}
      category={hit.category}
      price={hit.price}
      janeQuery={hit.janeQuery}
      imageURL={hit.thumbnail}
      size=""
    />
  </>
)

const HitProductsMobile = ({hit}) => (
  <>
    <CardProductSmall
      productName={hit.productTitle.replace('�', 'Ü')}
      slug={hit.slug}
      lineage=""
      description={hit.pageDescription.replace('�', 'Ü')}
      category={hit.category}
      price={hit.price}
      janeQuery={hit.janeQuery}
      imageURL={hit.thumbnail}
      size="tiny"
    />
  </>
)

const HeaderSearchBar = () => {
  // Search Feild State
  const [searchFocus, setsearchFocus] = useState(false)
  const [searchStretch, setSearchStretch] = useState(false)
  const handleMediaQueryChange = (matches) => {}
  const Hit = ({hit}) => (
    <>
      {hit.post_type == 'location' && (
        <a href={hit.slug ? '/locations/' + hit.slug : '#'} className="block py-2 text-sm text-black hover:underline">
          {hit.post_title.replace('�', 'Ü')}
        </a>
      )}

      {hit.post_type == 'post' && (
        <a href={hit.slug ? '/post/' + hit.slug : '#'} className="block py-2 text-sm text-black hover:underline">
          {hit.post_title.replace('�', 'Ü')}
        </a>
      )}

      {hit.post_type == 'page' && (
        <a
          href={hit.permalink ? hit.permalink.replace('https://admin.muvfl.com/', '/').replace('http://localhost:3000/', '/') : '#'}
          className="block py-2 text-sm text-black hover:underline"
        >
          {hit.post_title.replace('�', 'Ü')}
        </a>
      )}
    </>
  )
  return (
    <>
      {!searchStretch && (
        <div className="hidden xl:block">
          <ReferAlert
            props={{
              showAlertBar: true,
              alertTextMobile: 'Get discounts!',
              alertTextDesktop: 'Refer friends - Get $10.00 Off'
            }}
            size="sm"
          />
        </div>
      )}
      <div
        className={`${
          searchStretch ? 'absolute left-0 z-20 w-full flex-auto rounded md:w-auto xl:bg-white' : 'relative max-w-[180px]'
        } hidden h-10 md:relative`}
      >
        <div id="desktopHeaderSearchWrap" className={`group relative z-20 my-auto size-full flex-grow text-black ${searchStretch ? 'search-stretch' : ''}`}>
          <InstantSearch indexName="prod_searchable_posts" searchClient={searchClient}>
            <div className="flex gap-4 bg-black px-3 sm:px-5 md:px-0 xl:size-full">
              <button
                className={`flex size-10 items-center justify-center rounded-[3px] border-2 border-white bg-black text-white md:hidden ${
                  searchStretch ? 'block' : 'hidden'
                }`}
              >
                <ArrowLeftIcon className="h-6 w-6" />
                <span className="sr-only">Search Stretch Button</span>
              </button>
              <SearchBox
                className={`size-full flex-auto rounded xl:block ${searchStretch ? 'block' : 'hidden'}`}
                translations={{
                  placeholder: 'Search'
                }}
                inputId="header-search"
                hitsPerPage={5}
                onClick={(event) => {
                  setSearchStretch(true)
                  if (event.target.value != '') {
                    setsearchFocus(true)
                  } else {
                    setsearchFocus(false)
                  }
                }}
                onInput={(event) => {
                  setSearchStretch(true)
                  if (event.target.value != '') {
                    setsearchFocus(true)
                  } else {
                    setsearchFocus(false)
                  }
                }}
                onBlur={(event) => {
                  if (event.target.value != '') {
                    // setsearchFocus(true)
                  } else {
                    setSearchStretch(false)
                  }
                }}
              />
            </div>
            <button
              className={`size-10 items-center justify-center rounded-[3px] border-2 border-white text-white xl:hidden ${!searchStretch ? 'flex' : 'hidden'}`}
              onClick={() => {
                const inputField = document.querySelector('#header-search')
                if (inputField) {
                  setTimeout(() => {
                    inputField.focus()
                  }, 100) // Adjust delay as needed
                }
                setSearchStretch(!searchStretch)
              }}
            >
              <span className="inline-block size-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" role="presentation">
                  <path
                    fillRule="evenodd"
                    d="M4.25 11a6.75 6.75 0 1 1 12.024 4.213l3.256 3.257a.75.75 0 1 1-1.06 1.06l-3.257-3.256A6.75 6.75 0 0 1 4.25 11ZM11 5.75a5.25 5.25 0 1 0 3.717 8.957A5.25 5.25 0 0 0 11 5.75Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">Search Anything</span>
            </button>
            <label htmlFor="header-search" className="hidden">
              Search Anything
            </label>

            <div
              className={`shadow-full-black absolute right-0 top-16 w-full font-heading capitalize sm:px-5 md:px-0 ${searchFocus ? 'block' : 'hidden'}`}
              id="desktopHeaderSearchResults"
            >
              <div className="-mt-3 grid h-full grid-cols-5 bg-white p-4 shadow-xl sm:rounded-sm">
                <div className="order-2 col-span-5 md:order-1 md:col-span-3">
                  <Index indexName="prod_searchable_posts">
                    <span className="text-xl font-semibold">Search Results</span>

                    <MediaQuery minWidth={768} onChange={handleMediaQueryChange}>
                      <Configure hitsPerPage={10} />
                    </MediaQuery>
                    <MediaQuery maxWidth={768} onChange={handleMediaQueryChange}>
                      <Configure hitsPerPage={5} />
                    </MediaQuery>

                    <Hits hitComponent={Hit} />
                  </Index>
                </div>
                <div className="md:order-0 order-1 col-span-5 md:col-span-2">
                  <Index indexName="muv_products">
                    <span className="block text-left text-base font-semibold md:pl-8 lg:pl-4">Related Products</span>
                    <Configure hitsPerPage={3} />
                    <MediaQuery minWidth={768} onChange={handleMediaQueryChange}>
                      <Hits hitComponent={HitProducts} />
                    </MediaQuery>
                    <MediaQuery maxWidth={768} onChange={handleMediaQueryChange}>
                      <div className="searchMobileProductWrap">
                        <Hits hitComponent={HitProductsMobile} />
                      </div>
                    </MediaQuery>
                  </Index>
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
        {searchFocus && (
          <div
            className="fixed left-0 top-0 z-10 h-screen w-screen bg-black/50"
            onClick={() => {
              setSearchStretch(false)
              setsearchFocus(false)
            }}
          ></div>
        )}
      </div>
    </>
  )
}

export default React.memo(HeaderSearchBar)
