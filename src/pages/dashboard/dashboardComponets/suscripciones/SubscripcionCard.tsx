import { ethers } from "ethers";
import React, { useState } from "react";
import GruopModal from "./GruopModal";
import GruposModal from "../grupos/grupos-por-plan/GruposModal";

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
  const [openSub, setOpenSub] = useState(false);

  return (
    <React.Fragment>
      <GruposModal isOpen={open} setIsOpen={setOpen} setOpenSub={setOpenSub} plan={planWithProvider}></GruposModal>
      <GruopModal plan={planWithProvider} open={openSub} setOpen={setOpenSub}></GruopModal>
      <li
        key={index}
        className="py-10 px-6 bg-slate-500 text-center rounded-lg"
      >
        <div className="space-y-6 flex flex-col justify-between max-h-full h-full">
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

            <br />

            {/* <ul className="inline-flex justify-center space-x-5 space-y-5">
              <li>
                <span
                  className="px-4 py-2 rounded-full bg-green-400 text-gray-100 font-bold"
                  onClick={() => setOpen(true)}
                >
                  Ver grupos disponibles
                </span>
              </li>
            </ul> */}
          </div>
          <div>
            <button 
            type="button" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setOpen(true)}
            >
              Ver grupos disponibles
            </button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}
