/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import abi from "contract/Berry.json";
import { ethers } from "ethers";
import React, { ChangeEvent, Fragment, useState } from "react";
import { Berry } from "../../../../contract/types";
import { createGroup, PlanWithProvider } from "../../../../utils/berry-contract";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function GruopModal({
  plan,
  open,
  setOpen,
}: {
  plan: PlanWithProvider,
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [isCreatingGroup, setIsCreatingGroup] = useState(false)
  const [groupName, setGroupName] = useState('')

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setGroupName(event.currentTarget.value)
  }

  const mockCreate = async () => {
    setIsCreatingGroup(true)

    await sleep(1_000)

    setIsCreatingGroup(false)
  }

  const createNewGroup = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        process.env.REACT_APP_BERRY_CONTRACT_ADDR!,
        (abi as any).abi,
        signer
      );
      try {
        // Show spinner
        setIsCreatingGroup(true)
        
        const createGroupTx = await createGroup(contract as Berry, plan.providerID, plan.planID, groupName, {
          value: plan.pricePerMember
        })

        await createGroupTx.wait()

        setIsCreatingGroup(false)
        setOpen(false)
      }
      catch (error) {
        console.log(error);
        setIsCreatingGroup(false)
      }
    } else {
      alert('Conecta a una cartera')
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className=" w-100">
                <div className="w-100">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {plan.name} nuevo grupo
                  </label>
                  <div className="mt-5 w-100">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1"
                      placeholder="Nombre del grupo"
                      onChange={handleInput}
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Precio por miembro: ${ethers.utils.formatEther(plan.pricePerMember)} ETH
                  </p>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full min-w-[8rem] inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={createNewGroup}
                >
                  {isCreatingGroup
                    ? <svg className="h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>

                    : <span>
                      Crear Grupo
                    </span>
                  }
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
