import {storeSwitcherController} from '@/components/common/hooks/hookstate/storeSwitcherController'
import {Dialog, Transition, TransitionChild} from '@headlessui/react'
import {Fragment} from 'react'
import AddressTab from '../StoreSwitcherModal/AddressTab.jsx'

/**
 *
 */
export default function AddressDialogBox() {
  const {stateValues: switcherStateValues} = storeSwitcherController.useState(['isAddressModalOpen'])
  const {isAddressModalOpen} = switcherStateValues

  const handleClose = (event) => {
    event.stopPropagation()
    storeSwitcherController.toggleAddressModal()
  }

  return (
    <>
      <Transition show={isAddressModalOpen} as={Fragment}>
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
            <div className="fixed inset-x-0 bottom-0 h-1/2 w-full transform rounded-t-lg bg-white p-6 transition-all">
              <AddressTab variant={'mobile'} />
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
