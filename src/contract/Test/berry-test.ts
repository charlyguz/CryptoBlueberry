// import { expect } from 'chai';
// import { BigNumberish, providers } from 'ethers';
// import { ethers } from 'hardhat';
// import { Berry } from '../typechain-types';

// // let owner, netflix, ;
// let Berry;

// // function* generateSequence(maxValue: number, minValue = 0, increment = 1) {
// //   for (let i = minValue; i < maxValue; i += increment) {
// //     yield i;
// //   }
// // }

// export const getAllProviders = async (berry: Berry) => {
//   const totalProviders = (await berry.numProviders()).toNumber()

//   return Promise.all(Array.from({ length: totalProviders }, async (_, providerID) => await berry.providers(providerID)))
// }

// export const getProviderPlans = async (berry: Berry, providerID: BigNumberish) => {
//   const provider = await berry.providers(providerID)
//   const providerNumPlans = provider.numPlans.toNumber()

//   return Promise.all(Array.from({ length: providerNumPlans }, async (_, planID) => await berry.plansPerProvider(providerID, planID)))
// }

// export const getAllPlans = async (berry: Berry, allProviders: Awaited<ReturnType<typeof getAllProviders>>) => {
//   return (await Promise.all(allProviders.map(async (serviceProvider) => await getProviderPlans(berry, serviceProvider.providerID)))).flat()
// }

// describe("Berry contract", function () {
//   async function deployBerryContract() {
//     const BerryContract = await ethers.getContractFactory('Berry');
//     const berry = await BerryContract.deploy();

//     await berry.deployed();

//     const [owner, netflix, udemy, user1, user2, user3, user4] = await ethers.getSigners();

//     return { BerryContract, berry, owner, netflix, udemy, user1, user2, user3, user4 };
//   }

//   it("Show group creation and plan payment", async function () {

//     // const {berry, owner, netflix, udemy, user1, user2, user3, user4 } = await loadFixture(deployBerryContract);
//     const { berry, owner, netflix, udemy, user1, user2, user3, user4 } = await deployBerryContract();

//     // const netflix = await ethers.getSigner(process.env.SERVICE_PROVIDER_ADDR!)

//     console.log(`Netflix address: ${netflix.address}`)
//     console.log(`User1 address: ${user1.address}`)
//     console.log(`User2 address: ${user2.address}`)

//     const createProviderTx = await berry.connect(owner).createProvider('nextflix', '', netflix.address);
//     const createProviderTx2 = await berry.connect(owner).createProvider('udemy', '', udemy.address);
//     const numProviders = await berry.numProviders();

//     const createdProvider = await berry.providers(0);
//     const createdProvider2 = await berry.providers(1);

//     console.log(`Number od providers: ${numProviders.toNumber()}`)
//     console.log(`Netflix Provider: id: ${0}, address: ${netflix.address}`)
//     console.log(`udemy Provider: id: ${1}, address: ${udemy.address}`)
//     console.log(`Created provider: name: ${createdProvider2.name}, address: ${createdProvider2.serviceOwner}`)

//     // console.log(`Balance of user1 before joining group: ${(await user1.getBalance()).toString()}`);
//     // console.log(`Balance of user2 before joining group: ${(await user2.getBalance()).toString()}`);

//     console.log(`Balance of netflix before joining group: ${(await netflix.getBalance()).toString()}`);

//     expect(createdProvider.serviceOwner).to.equal(netflix.address);


//     await berry.connect(netflix).addPlan(0, 'monthly netflix', 'pay netflix every month', 30, ethers.utils.parseEther('10'), 2);
//     await berry.connect(netflix).addPlan(0, 'yearly netflix', 'pay netflix every year', 365, ethers.utils.parseEther('100.0'), 4);
//     //create
//     const udemyMonthPlanID = await berry.connect(udemy).addPlan(1, 'monthly udemy', 'pay udemy every month', 30, ethers.utils.parseEther('10'), 2);
//     // const udemyMonthPlanTx = await berry.connect(udemy).addPlan(1, 'monthly udemy', 'pay udemy every month', 30, ethers.utils.parseEther('10.0'), 2);


//     // console.log(`Price per member: ${netflixMonthPlanValues.pricePerMember.toString()}`)


//     // const netflixMonthPlan = (await berry.providers(netflixProviderID.value)).
//     await berry.connect(user1).register('user1', '', '');
//     await berry.connect(user2).register('user2', '', '');
//     await berry.connect(user3).register('user3', '', '');

//     await berry.connect(user1).createGroup(0, 0, 'mi grupo chido', { value: ethers.utils.parseEther('15.0') });
//     await berry.connect(user1).createGroup(1, 0, 'mi grupo chido de udemy', { value: ethers.utils.parseEther('15.0') });
//     // const groupID = await berry.connect(user1).createGroup(0, 1, 'mi grupo chido');
//     let group = await berry.groups(0);
//     let group2 = await berry.groups(1);
//     const plan = await berry.plansPerProvider(group.planProviderID, group.planID);
//     const plan2 = await berry.plansPerProvider(group2.planProviderID, group2.planID);

//     console.log(`Balance of user1 after creating group: ${(await user1.getBalance()).toString()}`);
//     console.log(`Balance of user2 after creating group: ${(await user2.getBalance()).toString()}`);
//     console.log(`Balance of netflix after creating group: ${(await netflix.getBalance()).toString()}`);

//     console.log(`antes Members in el gurpo 0 : ${group.numMembers.toString()}; Max members for this plan: ${plan.maxMembers.toString()}, price per member : ${plan.pricePerMember.toString()}`)
//     await berry.connect(user2).joinGroup(0, { value: ethers.utils.parseEther('15.0') });
//     await berry.connect(user2).joinGroup(1, { value: ethers.utils.parseEther('15.0') });

//     group = await berry.groups(0);
//     group2 = await berry.groups(1);

//     // const joinedToGroup = await berry.connect(user2).joinGroup(0, { value: ethers.utils.parseEther('5.0') });
//     console.log(`intermedio Members in el gurpo 0 : ${group.numMembers.toString()}; Max members for this plan: ${plan.maxMembers.toString()}, price per member : ${plan.pricePerMember.toString()}`)
//     // await berry.connect(user2).leaveGroup(0);
//     // await berry.connect(user2).leaveGroup(1);
//     // // await berry.connect(user1).leaveGroup(0);
//     // await berry.connect(user1).leaveGroup(1);

//     group = await berry.groups(0);
//     group2 = await berry.groups(1);
//     console.log(`despues Members in el gurpo 0 : ${group.numMembers.toString()}; Max members for this plan: ${plan.maxMembers.toString()}, price per member : ${plan.pricePerMember.toString()}`)
//     // await berry.connect(user3).joinGroup(0, { value: ethers.utils.parseEther('15.0') })
//     // const withdrawn = await berry.connect(netflix).withdrawFromGroup(0, 0);

//     // try {
//     //   expect(await berry.connect(user3).joinGroup(0, { value: ethers.utils.parseEther('15.0') })).to.throw()
//     //   expect(await berry.connect(user3).joinGroup(1, { value: ethers.utils.parseEther('15.0') })).to.throw()
//     //   // expect (await berry.connect(user3).leaveGroup(0)).to.throw();
//     //   // expect (await berry.connect(user3).leaveGroup(0)).to.throw();

//     // } catch(e: any) {
//     //   console.error(`Error joining group: ${e.message}`);
//     // }

//     console.log(`Balance of user1 after joining group: ${(await user1.getBalance()).toString()}`);
//     console.log(`Balance of user2 after joining group: ${(await user2.getBalance()).toString()}`);
//     console.log(`Balance of netflix after joining group: ${(await netflix.getBalance()).toString()}`);


//     // List all plans for netflix
//     const netflixAsProvider = await berry.providers(0);
//     const netflixNumPlans = netflixAsProvider.numPlans.toNumber();
    
//     const netflixPlans = await Promise.all(Array.from({length:netflixNumPlans}, async (_, index) => await berry.plansPerProvider(netflixAsProvider.providerID, index)))

//     console.log(`There are ${netflixNumPlans} plans for netflix: \n\n`)
//     netflixPlans.forEach((plan) => {
//       console.log(`Plan name: ${plan.name}, plan description: ${plan.description}, plan price: ${plan.price.toString()}, plan maxMembers: ${plan.maxMembers.toString()}`)
//     })

//     // List all groups for user1
//     const user1Struct = await berry.users(user1.address);
//     const user1GroupCount = user1Struct.numGroups.toNumber();
//     const user1Groups = await Promise.all(Array.from({length: user1GroupCount}, async (_, index) => await berry.groupsPerUser(user1.address, index)))

//     console.log(`User1, '${user1Struct.name}' has ${user1GroupCount} groups: \n\n`)
//     user1Groups.forEach((group) => {
//       console.log(`Group name: ${group.name}, group Balance: ${group.totalBalance.toString()}, group total members: ${group.numMembers.toString()}, group creation: ${new Date(group.creationTimestamp.toNumber())}, grup last payment date: ${new Date(group.lastPaymentTimestamp.toNumber())}`)
//     })


//     // All groups
//     console.log('\n\nAll groups:\n')
//     const totalGroups = (await berry.numGroups()).toNumber()

//     const allGroups = await Promise.all(Array.from({ length: totalGroups }, async (_, groupID) => await berry.groups(groupID)));

//     allGroups.forEach((group) => {
//       console.log(`Group name: ${group.name}, group Balance: ${group.totalBalance.toString()}, group total members: ${group.numMembers.toString()}, group creation: ${new Date(group.creationTimestamp.toNumber())}, grup last payment date: ${new Date(group.lastPaymentTimestamp.toNumber())}`)
//     })


//     // -----------------------------------------------------------
//     console.log('\n\n-----------------------------------------------------------\n\n');
//     console.log('Listing all providers:\n')
  
//     // All providers
//     const allProviders = await getAllProviders(berry);

//     allProviders.forEach((provider) => {
//       console.log(`Provider name: ${provider.name}, plans: ${provider.numPlans}`)
//     })
    
//     // All plans
//     console.log('\n\n-----------------------------------------------------------\n\n');
//     console.log('Listing all providers:\n')
//     const allPlans =  await getAllPlans(berry, allProviders);

//     allPlans.forEach((plan) => {
//       console.log(`Plan ${plan.name}, description: ${plan.description}, price: ${plan.price}`);
//     })
  
//     // it('Lists all plans for provider', async function() {
//     //   const nextflixAsProvider = berry.
//     // })
//   });

  
// });



// // import { expect } from 'chai';
// // import { ethers } from 'hardhat';

// // describe("Berry contract", function () {
// //   it("Show group creation and plan payment", async function () {
// //     const BerryContract = await ethers.getContractFactory('Berry');
// //     const berry = await BerryContract.deploy();

// //     await berry.deployed();

// //     const [owner, netflix, user1, user2, user3] = await ethers.getSigners();
// //     // const netflix = await ethers.getSigner(process.env.SERVICE_PROVIDER_ADDR!)

// //     console.log(`Netflix address: ${netflix.address}`)
// //     console.log(`User1 address: ${user1.address}`)
// //     console.log(`User2 address: ${user2.address}`)

// //     const createProviderTx = await berry.connect(owner).createProvider('nextflix', '', netflix.address);
// //     const numProviders = await berry.numProviders();

// //     const createdProvider = await berry.providers(0);

// //     console.log(`Number od providers: ${numProviders.toNumber()}`)
// //     console.log(`Netflix Provider: id: ${0}, address: ${netflix.address}`)
// //     console.log(`Created provider: name: ${createdProvider.name}, address: ${createdProvider.serviceOwner}`)

// //     console.log(`Balance of user1 before joining group: ${(await user1.getBalance()).toString()}`);
// //     console.log(`Balance of user2 before joining group: ${(await user2.getBalance()).toString()}`);

// //     console.log(`Balance of netflix before joining group: ${(await netflix.getBalance()).toString()}`);

// //     expect(createdProvider.serviceOwner).to.equal(netflix.address);
// //     // ethers.utils.parseEther

// //     // const netflixMonthPlan = await berry.addPlan(berry.numProviders(), 'monthly netflix', 'pay netflix every month', 30, 6, 2);
// //     await berry.connect(netflix).addPlan(createProviderTx.value, 'monthly netflix 2', 'pay netflix every month', 30, 15, 5);

// //     // const netflixMonthPlanID = await berry.connect(netflix).addPlan(createProviderTx.value, 'monthly netflix', 'pay netflix every month', 30, ethers.utils.parseEther('10'), 2);
// //     const netflixMonthPlanTx = await berry.connect(netflix).addPlan(0, 'monthly netflix', 'pay netflix every month', 30, ethers.utils.parseEther('10.0'), 2);


// //     // console.log(`Price per member: ${netflixMonthPlanValues.pricePerMember.toString()}`)


// //     // const netflixMonthPlan = (await berry.providers(netflixProviderID.value)).

// //     const groupID = await berry.connect(user1).createGroup(0, 1, 'mi grupo chido', { value: ethers.utils.parseEther('15.0') });
// //     // const groupID = await berry.connect(user1).createGroup(0, 1, 'mi grupo chido');
// //     const group = await berry.groups(0);
// //     const plan = group.activePlan

// //     console.log(`Balance of user1 after creating group: ${(await user1.getBalance()).toString()}`);
// //     console.log(`Balance of user2 after creating group: ${(await user2.getBalance()).toString()}`);
// //     console.log(`Balance of netflix after creating group: ${(await netflix.getBalance()).toString()}`);

// //     console.log(`Members in this group: ${group.numMembers.toString()}; Max members for this plan: ${plan.maxMembers.toString()}, price per member : ${plan.pricePerMember.toString()}`)
// //     const joinedToGroup = await berry.connect(user2).joinGroup(0, { value: ethers.utils.parseEther('15.0') });
// //     // const joinedToGroup = await berry.connect(user2).joinGroup(0, { value: ethers.utils.parseEther('5.0') });

// //     // const withdrawn = await berry.connect(netflix).withdrawFromGroup(0, 0);

// //     try {
// //       expect(await berry.connect(user3).joinGroup(0, { value: ethers.utils.parseEther('15.0') })).to.throw()
// //     } catch(e: any) {
// //       console.error(`Error joining group: ${e.message}`);
// //     }

// //     console.log(`Balance of user1 after joining group: ${(await user1.getBalance()).toString()}`);
// //     console.log(`Balance of user2 after joining group: ${(await user2.getBalance()).toString()}`);
// //     console.log(`Balance of netflix after joining group: ${(await netflix.getBalance()).toString()}`);
// //   });
// // });
