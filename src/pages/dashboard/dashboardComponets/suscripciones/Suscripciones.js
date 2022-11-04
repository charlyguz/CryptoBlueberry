import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import abi from 'contract/Berry.json'
import { getAllProviders, getAllPlans } from '../../../../utils/berry-contract'
import SubscripcionCard from './SubscripcionCard'
import { useCallback } from 'react'

export default function Subscripciones() {
  const [plansWithProvider, setPlansWithProvider] = useState([])

  useEffect(() => {
    (async function () {
      if (window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            process.env.REACT_APP_BERRY_CONTRACT_ADDR,
            abi.abi,
            signer
          );

          const allProviders = await getAllProviders(contract)
          const result = await getAllPlans(contract, allProviders)

          const _plansWithProvider = await Promise.all(result.map(async (plan) => {
            return {
              ...plan,
              provider: await contract.providers(plan.providerID)
            }
          }))

          console.debug(_plansWithProvider)

          setPlansWithProvider(_plansWithProvider)
        } catch (err) {
          console.error(err)
        }
      }
    })()
  }, [])



  return (
    <React.Fragment>
      <section className="section__suscripciones-container">
        <h3 className="section__suscripciones-item-title">Suscripciones</h3>
        <div className="overflow-y-auto">
          <div className="mx-auto px-6 max-w-7xl">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              </div>
              <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                {
                  plansWithProvider.map((planWithProvider, index) => (
                    <SubscripcionCard planWithProvider={planWithProvider} index={index} />
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment >
  )
}