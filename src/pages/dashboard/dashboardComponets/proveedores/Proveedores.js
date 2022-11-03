import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import abi from 'contract/Berry.json'
import { getAllProviders, getAllPlans } from '../../../../utils/berry-contract'

export default function Proveedores() {
  const [allProviders, setAllProviders] = useState([])
  const [signer, setSigner] = useState(null)
  const [berryContract, setBerryContract] = useState(null)

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

          setSigner(signer)
          setBerryContract(contract)
        } catch (err) {
          console.error(err)
        }
      }
    })()
  }, [])

  const showAllProviders = async () => {
    const allProviders = await getAllProviders(berryContract)
    const result = await getAllPlans(berryContract, allProviders)

    const plansWithProvider = await Promise.all(result.map(async (plan) => {
      return {
        ...plan,
        provider: await berryContract.providers(plan.providerID)
      }
    }))

    console.debug(plansWithProvider)
  }

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={showAllProviders}
        className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Todos los proveedores
      </button>
    </React.Fragment>
  )
}