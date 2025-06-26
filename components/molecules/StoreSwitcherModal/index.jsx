import {appController} from '@/components/common/hooks/hookstate/appController'
import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {Dialog, Transition, TransitionChild} from '@headlessui/react'
import {useEffect} from 'react'
import StoreSwitcherModalMobile from '../StoreSwitcherModalMobile'
import StoreSwitcherModalDesktop from '@/components/molecules/StoreSwitcherModal/StoreSwitcherModalDesktop'

/**
 *
 */
export default function StoreSwitcherModal() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['isOpen'])
  const {isOpen} = switcherStateValues
  const {stateValues: appStateValues} = appController.useState(['isDesktop'])
  const {isDesktop} = appStateValues

  useEffect(() => {
    const handleResize = () => {
      appController.update({isDesktop: window.innerWidth >= 640})
    }
    window.addEventListener('resize', handleResize)

    if (isOpen) handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  return (
    <>
      <Transition show={isOpen}>
        <Dialog as="div" className="relative z-[400] flex items-center justify-center" onClose={storeSwitcherController.toggle}>
          <TransitionChild
            enter={isDesktop ? 'duration-200 ease-out' : 'transform transition ease-in-out duration-500 sm:duration-700'}
            enterFrom={isDesktop ? 'opacity-0' : 'translate-x-full'}
            enterTo={isDesktop ? 'opacity-100' : 'translate-x-0'}
            leave={isDesktop ? 'duration-300 ease-out' : 'transform transition ease-in-out duration-500 sm:duration-700'}
            leaveFrom={isDesktop ? 'opacity-100' : 'translate-x-0'}
            leaveTo={isDesktop ? 'opacity-0' : 'translate-x-full'}
          >
            {isDesktop ? (
              <div>
                <div className="fixed inset-0 z-0 bg-black/40" aria-hidden="true" />
                <div className="fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto p-4 text-center">
                  <div className="flex transform overflow-visible rounded bg-white text-left align-middle shadow-xl transition-all">
                    <StoreSwitcherModalDesktop />
                  </div>
                </div>
              </div>
            ) : (
              <div className="fixed right-0 top-0 flex h-full w-full transform flex-col bg-white transition-all">
                <StoreSwitcherModalMobile />
              </div>
            )}
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
