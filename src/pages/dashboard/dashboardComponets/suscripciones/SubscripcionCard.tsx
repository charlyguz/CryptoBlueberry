import { ethers } from "ethers";
import React, { useState } from "react";
import GruopModal from "./GruopModal";

import {
  PlanWithProvider
} from "../../../../utils/berry-contract";

export default function SubscripcionCard({
  planWithProvider,
  index,
}: {
  planWithProvider: PlanWithProvider;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <GruopModal planId={1} providerId={1} open={open} setOpen={setOpen}></GruopModal>
      <li
        key={index}
        className="py-10 px-6 bg-slate-500 text-center rounded-lg"
      >
        <div className="space-y-6 ">
          <img
            className="mx-auto h-40 w-40 rounded-full"
            src={planWithProvider.provider.imageURL}
            alt="provider"
          />
          <div className="space-y-2">
            <div className="font-medium leading-6 space-y-1">
              <h3 className="text-white text-lg">{planWithProvider.name}</h3>
              <p className="text-indigo-200 text-md">
                {planWithProvider.description}
              </p>
            </div>
            <br />
            <dl className="mt-8 divide-y divide-gray-100 text-sm lg:mt-0 lg:col-span-5 space-b-5">
              <div className="pb-4 flex items-center justify-between">
                <dt className="text-gray-200">Precio de subscripción</dt>
                <dd className="font-medium text-gray-300">
                  ${ethers.utils.formatEther(planWithProvider.price)} ETH
                </dd>
              </div>
              <div className="py-4 flex items-center justify-between">
                <dt className="text-gray-200">Precio por miembro</dt>
                <dd className="font-medium text-gray-300">
                  ${ethers.utils.formatEther(planWithProvider.pricePerMember)}{" "}
                  ETH
                </dd>
              </div>
              <div className="py-4 flex items-center justify-between">
                <dt className="text-gray-200">Máximo de miembros</dt>
                <dd className="font-medium text-gray-300">
                  {planWithProvider.maxMembers.toString()}
                </dd>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <dt className="font-medium text-gray-200">Pagar cada</dt>
                <dd className="font-medium text-gray-300">
                  {planWithProvider.recurrence.toString()} días
                </dd>
              </div>
            </dl>

            <ul className="flex justify-around space-x-5 space-y-5">
              <li>
                <span
                  className="px-4 py-2 rounded-full bg-green-400 text-gray-100 font-bold"
                  onClick={() => setOpen(true)}
                >
                  ${ethers.utils.formatEther(planWithProvider.price)} ETH
                </span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}
