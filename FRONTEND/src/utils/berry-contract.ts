import { BigNumberish, ethers, Signer } from 'ethers';
import { Berry, Berry__factory } from '../contract/types';
import type { Provider } from "@ethersproject/providers";

export const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_TESTNET_URL);
export const berry = Berry__factory.connect(process.env.REACT_APP_BERRY_CONTRACT_ADDR!, provider)

export type SignerOrProvider = Signer | Provider;

export type Group = Awaited<ReturnType<Berry['groups']>>
export type ServiceProvider = Awaited<ReturnType<Berry['providers']>>
export type SubscriptionPlan = Awaited<ReturnType<Berry['plansPerProvider']>>
export type User = Awaited<ReturnType<Berry['users']>>


// Owner actions
export const createProvider = async (ownerAccount: Signer, ...createProviderArgs: Parameters<Berry['createProvider']>) => {
  return berry.connect(ownerAccount).createProvider(...createProviderArgs)
}

// Service Provider actions
export const createPlan = async (providerAccount: Signer, ...planArgs: Parameters<Berry['addPlan']>) => {
  return berry.connect(providerAccount).addPlan(...planArgs)
}

// User actions
export const register = async (userAccount: Signer, ...registerArgs: Parameters<Berry['register']>) => {
  return berry.connect(userAccount).register(...registerArgs)
}

export const createGroup = async (userAccount: Signer, ...createGroupArgs: Parameters<Berry['createGroup']>) => {
  return berry.connect(userAccount).createGroup(...createGroupArgs)
}

export const joinGroup = async (userAccount: Signer, groupID: number) => {
  return berry.connect(await userAccount.getAddress()).joinGroup(groupID)
}

// Public actions
export const getAllProviders = async () => {
  const totalProviders = (await berry.numProviders()).toNumber()

  return Promise.all(Array.from({ length: totalProviders }, async (_, providerID) => await berry.providers(providerID)))
}

export const getAllGroups = async () => {
  const totalGroups = (await berry.numGroups()).toNumber()

  return Promise.all(Array.from({ length: totalGroups }, async (_, groupID) => await berry.groups(groupID)))
}

export const getPlan = async (providerID: number, planID: number) => {
  return berry.plansPerProvider(providerID, planID)
}

export const getProviderPlans = async (providerID: BigNumberish) => {
  const provider = await berry.providers(providerID)
  const providerNumPlans = provider.numPlans.toNumber()

  return Promise.all(Array.from({ length: providerNumPlans }, async (_, planID) => await berry.plansPerProvider(providerID, planID)))
}

export const getUserGroups = async (userAccount: Signer) => {
  const userAddress = await userAccount.getAddress()
  const userStruct = await berry.users(userAddress)
  const userGroupCount = userStruct.numGroups.toNumber()

  return Promise.all(Array.from({ length: userGroupCount }, async (_, groupID) => await berry.groupsPerUser(userAddress, groupID)))
}

// Post-processing methods
// Needs all groups
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
export const getAllPlans =  async (allProviders: Awaited<ReturnType<typeof getAllProviders>>) => {
  return (await Promise.all(allProviders.map(async (serviceProvider) => await getProviderPlans(serviceProvider.providerID)))).flat()
}