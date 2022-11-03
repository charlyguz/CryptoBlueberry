import React, { Fragment } from 'react'
import type { Group, ServiceProvider, SubscriptionPlan } from '../../../../../../utils/berry-contract'

export default function GrupoListaItem({ group, plan, provider }: { group: Group, plan: SubscriptionPlan, provider: ServiceProvider }) {
  console.debug(group)
  
  return (
    <Fragment>
      <div className="block hover:bg-gray-50 cursor-pointer">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-indigo-600 truncate">{group.name}</p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {/* {plan.pricePerMember.toString()} */}
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                {/* <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                {/* {provider.name} */}
              </p>
              {/* <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"> */}
              {/* <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              {/* {position.location} */}
              {/* </p> */}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              {/* <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              {/* <p>
                Último pago <time dateTime={new Date(group.lastPaymentTimestamp.toNumber()).toDateString()}>{new Date(group.lastPaymentTimestamp.toNumber()).toString()}</time>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}