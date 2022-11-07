import abi from "contract/Berry.json";
import { ethers } from "ethers";
import React, { Fragment, useState } from "react";
import { format, register } from 'timeago.js';
import { esLocale } from 'utils/timeago-es-locale';
import { Berry } from "../../../../../../contract/types";
import { GroupWithPlan, joinGroup } from "../../../../../../utils/berry-contract";

register('es_ES', esLocale)

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function GrupoListaItem({
  group, isOwn
}: {
  group: GroupWithPlan,
  isOwn: boolean
}) {
  const [isJoiningGroup, setIsJoiningGroup] = useState(false)
  const [isLeavingGroup, setIsLeavingGroup] = useState(false)

  const mockCreate = async () => {
    setIsJoiningGroup(true)

    await sleep(1_000)

    setIsJoiningGroup(false)
  }

  const joinGroupHandler = async () => {
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
        setIsJoiningGroup(true)

        const createGroupTx = await joinGroup((contract as Berry), group.groupID, {
          value: group.plan.pricePerMember
        })

        await createGroupTx.wait()

        setIsJoiningGroup(false)
      }
      catch (error) {
        console.log(error);
        setIsJoiningGroup(false)
      }
    } else {
      alert('Conecta a una cartera')
    }
  }

  const leaveGroupHandler = async () => {
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
        setIsLeavingGroup(true)

        const leaveGroupTx = await (contract as Berry).leaveGroup(group.groupID)

        await leaveGroupTx.wait()

        setIsLeavingGroup(false)
      }
      catch (error) {
        console.log(error);
        setIsLeavingGroup(false)
      }
    } else {
      alert('Conecta a una cartera')
    }
  }

  return (
    <Fragment>
      <div className="block hover:bg-gray-50 cursor-pointer">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1 gap-4">
              <p className="text-sm font-medium text-indigo-600 truncate">
                {group.name}
              </p>
              <p className="px-2 inline-flex text-xs leading-5 font-bold ">
                Plan {group.plan.name.toString()}
              </p>
            </div>

            <div className="ml-2 flex-shrink-0 flex align-middle">
              <p className="mx-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-700 text-gray-100">
                Miembros: {group.numMembers.toString()}
              </p>
              <p className="mx-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-700 text-gray-100">
                Máximo de miembros: {group.plan.maxMembers.toString()}
              </p>
              <p className="mx-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-700 text-gray-100">
                Precio por miembro: ${ethers.utils.formatEther(group.plan.pricePerMember)} ETH
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex justify-between items-center">
            <div className=" flex items-center text-sm text-gray-500 sm:mt-0">
              <p className="mb-0 text-xs">
                Último pago{" "}
                {format(group.lastPaymentTimestamp.toNumber() * 1_000, 'es_ES')}
              </p>
            </div>

            <div className="inline-flex justify-end items-center">
              {!isOwn && 
              <button
                type="button"
                className="inline-flex justify-center mx-1 min-w-[6rem] px-2.5 py-1.5 border border-black shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={joinGroupHandler}
              >
                {isJoiningGroup
                  ? <svg className="h-5 animate-spin text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  : <span>
                    Unirse al grupo
                  </span>
                }
              </button>}
              {isOwn &&
                <button
                  type="button"
                  className="inline-flex justify-center mx-1 min-w-[6rem] px-2.5 py-1.5 border border-black shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={leaveGroupHandler}>
                  {isLeavingGroup
                    ? <svg className="h-5 animate-spin text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    : <span>
                      Salir del grupo
                    </span>
                  }
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
