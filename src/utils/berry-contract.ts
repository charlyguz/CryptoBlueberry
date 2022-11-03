import { BaseContract, BigNumberish, ethers, Signer } from 'ethers';
import { Berry, Berry__factory } from '../contract/types';
import type { Provider } from "@ethersproject/providers";

// export const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_TESTNET_URL);
// export const berry = Berry__factory.connect(process.env.REACT_APP_BERRY_CONTRACT_ADDR!, provider);

export type SignerOrProvider = Signer | Provider;

export type Group = Awaited<ReturnType<Berry['groups']>>
export type ServiceProvider = Awaited<ReturnType<Berry['providers']>>
export type SubscriptionPlan = Awaited<ReturnType<Berry['plansPerProvider']>>
export type User = Awaited<ReturnType<Berry['users']>>


// Owner actions
// create Provider only owner
export const createProvider = async (berry: Berry, ...createProviderArgs: Parameters<Berry['createProvider']>) => {
  return berry.createProvider(...createProviderArgs)
}


// Service Provider actions
// create plan only service provider
export const createPlan = async (berry: Berry, ...planArgs: Parameters<Berry['addPlan']>) => {
  return berry.addPlan(...planArgs)
}

// User actions
// user singup only user
export const register = async (berry: Berry, userAccount: Signer, ...registerArgs: Parameters<Berry['register']>) => {
  return berry.connect(userAccount).register(...registerArgs)
}

// create gruop 
export const createGroup = async (berry: Berry, ...createGroupArgs: Parameters<Berry['createGroup']>) => {
  return berry.createGroup(...createGroupArgs)
}

// add user to group
export const joinGroup = async (berry: Berry, ...joinGroupArgs: Parameters<Berry['joinGroup']>) => {
  return berry.joinGroup(...joinGroupArgs)
}

// Public actions
// view all providers, return array of providers
export const getAllProviders = async (berry: Berry, ) => {
  const totalProviders = (await berry.numProviders()).toNumber()
  return Promise.all(Array.from({ length: totalProviders }, async (_, providerID) => await berry.providers(providerID)))
}

// view all plans, return array of plans
export const getAllGroups = async (berry: Berry ) => {
  const totalGroups = (await berry.numGroups()).toNumber()

  return Promise.all(Array.from({ length: totalGroups }, async (_, groupID) => await berry.groups(groupID)))
}

// view especific plan, return plan
export const getPlan = async (berry: Berry, providerID: number, planID: number) => {
  return berry.plansPerProvider(providerID, planID)
}

// view all plans in especific provider, return array of plans
export const getProviderPlans = async (berry: Berry, providerID: BigNumberish) => {
  const provider = await berry.providers(providerID)
  const providerNumPlans = provider.numPlans.toNumber()

  return Promise.all(Array.from({ length: providerNumPlans }, async (_, planID) => await berry.plansPerProvider(providerID, planID)))
}

// view all groups in especific user, return array of groups
export const getUserGroups = async (berry: Berry, userAccount: Signer) => {
  return berry.connect(userAccount).getAllUserGroups(userAccount.getAddress())
}

// Post-processing methods
// Needs all groups
// Returns an array of groups with the provider data
export const getGroupsPerPlan = (allGroups: Awaited<ReturnType<typeof getAllGroups>>) => {
  const groupsPerPlan: Record<number, Group[]> = {}

  allGroups.forEach((group) => {
    let groupsInPlan = groupsPerPlan[group.planID.toNumber()]

    if (groupsInPlan) {
      groupsInPlan.push(group)
    } else {
      groupsInPlan = [group]
    }
  })

  return groupsPerPlan;
}

// Needs all providers
// Returns an array of providers with the plan data
export const getAllPlans =  async (berry: Berry, allProviders: Awaited<ReturnType<typeof getAllProviders>>) => {
  return (await Promise.all(allProviders.map(async (serviceProvider) => await getProviderPlans(berry, serviceProvider.providerID)))).flat()
}

export const getBerrys = async (berry: Berry) => {
  return berry.getUserBerries();
}



//por hacer **********
// un get que te devuelva los provedores a los que esta un usuario 

//mostrar un grupo en especial


// export const 