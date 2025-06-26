import Logo from '@/components/atoms/Logo'
import React from 'react'
import {BRAND} from '@/config/constant'

/**
 * ZLD Footer Logo Area with social icon
 * @return {Element} Plane JSX
 */
const FooterLogo = () => {
  return (
    <div className="relative order-2 flex flex-col items-center gap-y-6 text-white sm:order-1 sm:items-baseline">
      <Logo currentBrand={BRAND.ZLD} className="h-[38px]" />
      <h2 className="my-0 font-heading text-lg uppercase">Relax. Recharge. Refresh.</h2>
      <div className="block w-full text-center">
        <div className="mx-auto flex justify-center space-x-6 sm:justify-start">
          <a title="Twitter" className="hover:opacity-70" target={'_blank'} rel="noreferrer" href="https://twitter.com/ZenLeaf_">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="sw_f126cc4b" role="presentation">
              <path d="M13.903 10.469 21.348 2h-1.764l-6.465 7.353L7.955 2H2l7.808 11.12L2 22h1.764l6.828-7.765L16.044 22H22l-8.097-11.531ZM4.4 3.299h2.71l12.475 17.46h-2.71L4.4 3.3Z"></path>
            </svg>
          </a>
          <a title="Facebook" className="hover:opacity-70" target={'_blank'} rel="noreferrer" href="https://www.facebook.com/zenleafdispensaries">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="sw_f126cc4b" role="presentation">
              <path
                fillRule="evenodd"
                d="M13.518 2.75c-1.723.019-3.17 1.516-3.152 3.425l-.04 4.501a.75.75 0 0 1-.75.741H6.75v2.498h2.873a.75.75 0 0 1 .75.75v6.585h2.887v-6.585a.75.75 0 0 1 .75-.75h2.757l.365-2.498H14.01a.75.75 0 0 1-.75-.75V7.035c0-.95.74-1.785 1.734-1.785h2.256v-2.5h-3.732Zm-.016-1.5H18a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-3.006c-.094 0-.234.09-.234.285v2.882H18a.75.75 0 0 1 .742.858l-.584 3.999a.75.75 0 0 1-.742.641H14.76V22a.75.75 0 0 1-.75.75H9.623a.75.75 0 0 1-.75-.75v-6.585H6a.75.75 0 0 1-.75-.75v-3.998a.75.75 0 0 1 .75-.75h2.835l.03-3.727c-.025-2.664 2.015-4.912 4.637-4.94Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a title="Instagram" className="hover:opacity-70" target={'_blank'} rel="noreferrer" href="https://www.instagram.com/zenleafdispensaries/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="sw_f126cc4b" role="presentation">
              <path
                fillRule="evenodd"
                d="M2.25 7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7v10A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7ZM7 3.75A3.25 3.25 0 0 0 3.75 7v10A3.25 3.25 0 0 0 7 20.25h10A3.25 3.25 0 0 0 20.25 17V7A3.25 3.25 0 0 0 17 3.75H7ZM7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm6.5-2.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
export default FooterLogo
