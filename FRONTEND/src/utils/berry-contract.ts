import { BigNumberish, ethers, Signer } from 'ethers';
import { Berry__factory } from '../contract/types';
import type { Provider } from "@ethersproject/providers";

export const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_TESTNET_URL);
export const berry = Berry__factory.connect(process.env.REACT_APP_BERRY_CONTRACT_ADDR!, provider)

export type SignerOrProvider = Signer | Provider | string;

export const getAllProviders = async () => {
  const totalProviders = (await berry.numProviders()).toNumber()

  return Promise.all(Array.from({ length: totalProviders }, async (_, providerID) => await berry.providers(providerID)))
}

// Description
// Image
export const register = async (account: SignerOrProvider, name: string, imageURL: string, description: string) => {
  await berry.connect(account).register(name, imageURL, description)
}

export const getAllGroups = async () => {
  const totalGroups = (await berry.numGroups()).toNumber()

  return Promise.all(Array.from({ length: totalGroups }, async (_, groupID) => await berry.groups(groupID)))
}

export const getProviderPlans = async (providerID: BigNumberish) => {
  const provider = await berry.providers(providerID)
  const providerNumPlans = provider.numPlans.toNumber()

  return Promise.all(Array.from({ length: providerNumPlans }, async (_, planID) => await berry.plansPerProvider(providerID, planID)))
}

export const getUserGroups = async (userAddress: string) => {
  const userStruct = await berry.users(userAddress)
  const userGroupCount = userStruct.numGroups.toNumber()

  return Promise.all(Array.from({ length: userGroupCount }, async (_, groupID) => await berry.groupsPerUser(userAddress, groupID)))
}

export const getPlan = async (providerID: number, planID: number) => {
  return berry.plansPerProvider(providerID, planID)
}

export const joinGroup = async (userAddress: string, groupID: number) => {
  return berry.connect(userAddress).joinGroup(groupID)
}

// export const createPlan = async (userAddress: string, )