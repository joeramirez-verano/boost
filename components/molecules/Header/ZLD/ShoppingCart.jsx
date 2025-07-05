import { appController } from '@/components/common/hooks/hookstate/appController'
import { useLocation } from 'react-router-dom'

const ShoppingCart = () => {
  const  stateValues  = appController.useState(['myLocation', 'storeLocation'])
  const { myLocation, storeLocation } = stateValues

  const location = useLocation()
  const pathname = location.pathname

  let menuUrl = '/menu-location-router'
  if (storeLocation?.slug && myLocation?.storeType) {
    menuUrl = appController.menuLocationRouter('stateSpecific')
  }
  const isSelectedMenu = pathname.includes(menuUrl)
  const buttonText = isSelectedMenu ? 'My Cart' : 'Shop Now'
  const buttonLink = isSelectedMenu ? `${menuUrl}?path=cart/` : menuUrl

  const cartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="41" viewBox="0 0 34 41" fill="none">
      <path
        d="M15.0465 30.9688C13.5854 30.9688 12.2765 30.5426 11.1197 29.6903C7.37561 26.8898 7.07121 20.4974 7.04077 20.2234C7.04077 19.9799 7.13209 19.7364 7.31473 19.5537C7.49737 19.3711 7.74089 19.2798 7.98441 19.2798C11.2719 19.3407 14.1333 20.6192 14.2551 20.68C14.7117 20.8931 14.9248 21.4106 14.7421 21.8368C13.9202 23.9067 14.1029 25.7331 15.2596 27.2247C16.1728 28.3814 17.3904 28.9597 17.3904 28.9597C17.7557 29.1119 17.9688 29.4772 17.9383 29.8729C17.9079 30.2687 17.6339 30.5731 17.2382 30.6644C16.4772 30.8775 15.7467 30.9688 15.0465 30.9688ZM9.01938 21.1671C9.2629 22.9326 9.99346 26.5245 12.246 28.2292C12.9157 28.7467 13.6767 29.0206 14.529 29.1119C13.1288 27.7421 11.7286 25.4591 12.7331 22.0498C11.9416 21.7454 10.5414 21.3497 9.01938 21.1671Z"
        fill="currentColor"
      />
      <path
        d="M17.0249 30.6941C16.9031 30.6941 16.7814 30.6636 16.6901 30.6332C16.5074 30.5723 12.3676 28.8372 12.3676 24.393C12.3676 20.2227 16.203 16.1742 16.3552 15.9915C16.6901 15.6262 17.2684 15.6262 17.6337 15.9611C17.999 16.2959 17.999 16.8743 17.6641 17.2396C17.6337 17.27 14.1635 20.9228 14.1635 24.3625C14.1635 27.5588 17.2075 28.8372 17.3293 28.8981C17.7859 29.0808 18.0294 29.6287 17.8163 30.0853C17.725 30.481 17.3902 30.6941 17.0249 30.6941Z"
        fill="currentColor"
      />
      <path
        d="M19.0039 30.9679C18.3038 30.9679 17.5732 30.8766 16.8122 30.6939C16.4469 30.6026 16.1425 30.2678 16.1121 29.872C16.0816 29.4763 16.2947 29.111 16.66 28.9588C16.8426 28.8675 21.2869 26.7976 19.3083 21.8663C19.1256 21.4097 19.3387 20.8922 19.7953 20.7096C19.9171 20.6487 22.7785 19.4006 26.066 19.3093C26.3095 19.3093 26.553 19.4006 26.7357 19.5833C26.9183 19.7659 27.0096 20.0094 27.0096 20.253C27.0096 20.5269 26.6748 26.9194 22.9307 29.7198C21.7739 30.5417 20.465 30.9679 19.0039 30.9679ZM21.3173 22.0489C22.3219 25.4582 20.9216 27.7717 19.5214 29.111C20.3737 29.0197 21.1347 28.7458 21.8044 28.2283C24.0569 26.5541 24.8179 22.9317 25.031 21.1662C23.509 21.3488 22.1392 21.7445 21.3173 22.0489Z"
        fill="currentColor"
      />
      <path
        d="M17.0255 30.6942C16.6602 30.6942 16.3253 30.4811 16.1731 30.1158C15.9905 29.6592 16.2036 29.1113 16.6602 28.9286C16.8124 28.8678 19.8259 27.5588 19.8259 24.3931C19.8259 20.9533 16.3862 17.3005 16.3253 17.2701C15.9905 16.9048 15.9905 16.3264 16.3558 15.9916C16.7211 15.6567 17.2994 15.6567 17.6343 16.022C17.7865 16.2047 21.6219 20.2228 21.6219 24.4235C21.6219 28.8373 17.4821 30.5724 17.2994 30.6637C17.269 30.6637 17.1472 30.6942 17.0255 30.6942Z"
        fill="currentColor"
      />
      <path
        d="M31.74 39.6756H2.3101C1.62109 39.6756 1.06907 39.1049 1.09203 38.4162L2.03651 10.0819C2.0803 8.76803 3.15807 7.72559 4.47265 7.72559H29.5774C30.892 7.72559 31.9698 8.76803 32.0136 10.0819L32.9581 38.4162C32.981 39.1049 32.429 39.6756 31.74 39.6756Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.0344 11.7197V7.72598C11.0344 4.41744 13.7165 1.73535 17.025 1.73535V1.73535C20.3336 1.73535 23.0157 4.41744 23.0157 7.72598V11.7197"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )

  return (
    <a href={buttonLink}>
      <span className="group flex h-10 w-max items-center justify-center gap-2 rounded-md border-2 border-white bg-black px-4 text-base font-bold tracking-wider text-white transition-shadow duration-200 hover:bg-white hover:text-black hover:shadow-lg active:bg-gray-50 active:shadow-inner">
        <span>{buttonText}</span>
        {isSelectedMenu && (
          <span className="my-[2px] flex h-6 w-6 items-center group-hover:border-black">
            {cartIcon}
          </span>
        )}
      </span>
    </a>
  )
}

export default ShoppingCart
