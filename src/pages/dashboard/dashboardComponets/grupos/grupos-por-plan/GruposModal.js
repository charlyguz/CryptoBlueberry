import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { getAllGroups } from '../../../../../utils/berry-contract'
import { ethers } from 'ethers'
import { Berry__factory } from '../../../../../contract/types'
import BerryJSON from '../../../../../contract/Berry.json'
import abi from '../../../../../contract/abi.json'

import GrupoListaItem from './grupo-lista/GrupoListaItem'
import { UsersIcon } from '@heroicons/react/solid'

const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  let [allGroups, setAllGroups] = useState([])
  let [allProviders, setAllProviders] = useState([])

  useEffect(() => {
    (async function () {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          process.env.REACT_APP_BERRY_CONTRACT_ADDR,
          abi.abi,
          signer
        );
        try {
          const result = await getAllGroups(contract);
          console.log(result);
          setAllGroups(result)
        }
        catch (error) {
          console.log(error);
        }
      }
    })()
  }, [])

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <React.Fragment>
      <div className="fixed flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[70%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Grupos en (nombre de grupo)
                  </Dialog.Title>
                  <div className="bg-white overflow-hidden sm:rounded-md">
                    <ul className="divide-y">
                      {allGroups.map((currentGroup, idx) => (
                        <li key={idx}>
                          <GrupoListaItem group={currentGroup} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  )
}
