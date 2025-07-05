'use client'
import {appController} from '../../../common/hooks/hookstate/appController'
import {useRef} from 'react'
const ChatButton = ({isMobile}) => {
  const stateValues = appController.useState(['liveChat'])

  const liveChatId = stateValues.liveChat
  const ref = useRef()

  if (!liveChatId || liveChatId === '') return null
  if (!liveChatId || liveChatId === '') return null

  return (
    <>
      <div className="">
        <div className={isMobile ? 'mt-3 rounded border border-black text-black' : ''}>
          <div ref={ref}></div>
          <a
            tabIndex={0}
            className={`flex cursor-pointer items-center gap-1 py-2 font-body text-sm font-semibold uppercase tracking-widest ${
              isMobile ? 'text-black' : 'text-white hover:bg-black'
            }`}
            onClick={() => {
              if (window && window.medchatapp) {
                window.medchatapp.frameStates.app.appMode = true
                window.medchatapp.expand()
                if (window.innerWidth <= 767) window.medchatapp.hideLauncher()
              }
            }}
          >
            <span className="inline-block size-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="sw_f126cc4b" role="presentation">
                <path
                  fillRule="evenodd"
                  d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.705 10.705 0 0 1 1.25 12ZM12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.686.45 3.265 1.237 4.625a.75.75 0 0 1 .088.512l-.638 3.426 3.426-.638a.75.75 0 0 1 .513.088A9.205 9.205 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="tracking-widest ">Chat</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default ChatButton
