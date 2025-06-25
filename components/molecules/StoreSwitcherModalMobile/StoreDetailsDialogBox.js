import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import ShopButton from '@/components/molecules/StoreSwitcherModal/ShopButton.js'
import {Dialog, Transition, TransitionChild} from '@headlessui/react'
import {Fragment} from 'react'
import StoreDetailsTab from '../StoreSwitcherModal/StoreDetailsTab'

/**
 *
 */
export default function StoreDetailsDialogbox() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['isStoreDetailsModalOpen'])
  const {isStoreDetailsModalOpen} = switcherStateValues

  const handleClose = (event) => {
    event.stopPropagation()
    storeSwitcherController.toggleStoreDetailsModal()
  }

  return (
    <>
      <Transition show={isStoreDetailsModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[400] flex items-center justify-center" onClose={handleClose}>
          <TransitionChild
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed right-0 top-0 flex h-full w-full transform flex-col bg-white transition-all">
              {isStoreDetailsModalOpen && (
                <>
                  <StoreDetailsTab variant={'mobile'} />
                  <div className="flex w-full p-6">
                    <ShopButton variant={'storeDetailsMobile'} />
                  </div>
                </>
              )}
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
