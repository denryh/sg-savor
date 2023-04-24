import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import ClientPortal from './ClientPortal'
import { Transition } from '@headlessui/react'
import { MobileMenu } from './MobileMenu'

export default function Menu() {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav>
      <button className="h-6 w-6" onClick={() => setOpen((prev) => !prev)}>
        <Bars3BottomRightIcon />
      </button>

      <ClientPortal selector="menu-portal">
        <Transition
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setOpen(false)}
          >
            <MobileMenu />
          </div>
        </Transition>
      </ClientPortal>
    </nav>
  )
}
