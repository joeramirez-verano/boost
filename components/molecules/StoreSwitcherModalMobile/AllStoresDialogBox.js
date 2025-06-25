import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import AllStoresTab from '@/components/molecules/StoreSwitcherModal/AllStoresTab.js'
import {Dialog, Transition, TransitionChild} from '@headlessui/react'
import {Fragment} from 'react'

/**
 *
 */
export default function AllStoresDialogBox() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['isAllStoresModalOpen'])
  const {isAllStoresModalOpen} = switcherStateValues

  const handleClose = () => {
    storeSwitcherController.toggleAllStoresModal()
  }

  return (
    <>
      <Transition show={isAllStoresModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[400]" onClose={handleClose}>
          <div className="fixed inset-0 z-0 bg-black/40" aria-hidden="true" onClick={handleClose} />

          <TransitionChild
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <div className="fixed inset-x-0 bottom-0 h-[95%] w-full transform rounded-t-lg bg-white transition-all">
              <div id="search-tab-heading" className="p-4">
                <h1 className="text-xl tracking-tight">All Stores</h1>
              </div>
              <AllStoresTab variant={'mobile'} />
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
