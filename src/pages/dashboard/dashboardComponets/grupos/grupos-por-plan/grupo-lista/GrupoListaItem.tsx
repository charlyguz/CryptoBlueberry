import { ethers } from "ethers";
import React, { Fragment } from "react";
import type { GroupWithPlan } from "../../../../../../utils/berry-contract";
import { format, register } from 'timeago.js'
import { esLocale } from 'utils/timeago-es-locale'

register('es_ES', esLocale)

export default function GrupoListaItem({
  group: groupWithPlan,
}: {
  group: GroupWithPlan;
}) {
  const showInfo = () => {
    console.log(`Plan name: ${groupWithPlan.plan.name},
    plan id: ${groupWithPlan.plan.planID},
    provider id from group: ${groupWithPlan.planProviderID},
    provider id from plan: ${groupWithPlan.plan.providerID}`)
  }

  return (
    <Fragment>
      <div className="block hover:bg-gray-50 cursor-pointer">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1 gap-4">
              <p className="text-sm font-medium text-indigo-600 truncate">
                {groupWithPlan.name}
              </p>
              <p className="px-2 inline-flex text-xs leading-5 font-bold ">
                Plan {groupWithPlan.plan.name.toString()}
              </p>
            </div>

            <div className="ml-2 flex-shrink-0 flex align-middle">
              <p className="mx-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-700 text-gray-100">
                Máximo de miembros: {groupWithPlan.plan.maxMembers.toString()}
              </p>
              <p className="mx-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-700 text-gray-100">
                Precio por miembro: ${ethers.utils.formatEther(groupWithPlan.plan.pricePerMember)} ETH
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex justify-between items-center">
            <div className=" flex items-center text-sm text-gray-500 sm:mt-0">
              <p className="mb-0 text-xs">
                Último pago{" "}
                {format(groupWithPlan.lastPaymentTimestamp.toNumber() * 1_000, 'es_ES')}
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 border border-black shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={showInfo}
            >
              Unirse al grupo
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
