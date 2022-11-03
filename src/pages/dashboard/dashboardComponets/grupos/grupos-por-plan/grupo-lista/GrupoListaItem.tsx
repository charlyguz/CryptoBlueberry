import React, { Fragment } from "react";
import type { GroupWithPlan } from "../../../../../../utils/berry-contract";

export default function GrupoListaItem({
  group: groupWithPlan,
}: {
  group: GroupWithPlan;
}) {
  console.debug(groupWithPlan);

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
                {groupWithPlan.plan.name.toString()}
              </p>
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-gray-800">
                Maximo de grupo: {groupWithPlan.plan.maxMembers.toString()}
              </p>
            </div>

            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {groupWithPlan.plan.pricePerMember.toString()}
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex justify-between items-center">
            <div className=" flex items-center text-sm text-gray-500 sm:mt-0">
              {/* <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              <p className="mb-0">
                Último pago{" "}
                <time
                  dateTime={new Date(
                    groupWithPlan.lastPaymentTimestamp.toNumber()
                  ).toDateString()}
                >
                  {new Date(
                    groupWithPlan.lastPaymentTimestamp.toNumber()
                  ).toString()}
                </time>
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 border border-black shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Unirse al grupo
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
