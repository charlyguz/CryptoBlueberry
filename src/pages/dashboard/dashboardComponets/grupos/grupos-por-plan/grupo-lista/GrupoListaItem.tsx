import React, { Fragment } from 'react'
import type { GroupWithPlan } from '../../../../../../utils/berry-contract'

export default function GrupoListaItem({ group: groupWithPlan }: { group: GroupWithPlan }) {
  console.debug(groupWithPlan)
  
  return (
    <Fragment>
      <div className="block hover:bg-gray-50 cursor-pointer">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-indigo-600 truncate">{groupWithPlan.name}</p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {groupWithPlan.plan.pricePerMember.toString()}
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              {/* <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              <p>
                Último pago <time dateTime={new Date(groupWithPlan.lastPaymentTimestamp.toNumber()).toDateString()}>{new Date(groupWithPlan.lastPaymentTimestamp.toNumber()).toString()}</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}