import { Dialog, Transition } from "@headlessui/react";
import abi from "contract/Berry.json";
import { ethers } from "ethers";
import React, { Fragment, useEffect, useState } from "react";
import {
  getAllGroups,
  getPlan
} from "../../../../../utils/berry-contract";

import GrupoListaItem from "./grupo-lista/GrupoListaItem";

export default function MyModal({ isOpen, setIsOpen, setOpenSub }) {
  let [allGroups, setAllGroups] = useState([]);
  let [allProviders, setAllProviders] = useState([]);
  let [allGroupsWithProvider, setAllGroupsWithProvider] = useState([])

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
          const result = await getAllGroups(contract, signer);
          console.log(result);

          const groupsWithProvider = await Promise.all(result.map(async (group) => {
            return {
              ...group,
              plan: await getPlan(contract, group.planProviderID, group.planID)
            }
          }))
          setAllGroupsWithProvider(groupsWithProvider)
        }
        catch (error) {
          console.log(error);
        }
      }
    })()
  }, [])

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <React.Fragment>


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
                      {allGroupsWithProvider.map((currentGroup, idx) => (
                        <li key={idx}>
                          <GrupoListaItem group={currentGroup} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end mt-4 ">
                    <button
                      type="button"
                      className="inline-flex mr-4 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Ok
                    </button>

                    <button
                      type="button"
                      className="text-white inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium  hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setOpenSub(true)}
                    >
                      Crear Grupo
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
}
