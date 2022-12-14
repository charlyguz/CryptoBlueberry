/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Berry {
  export type GroupStruct = {
    groupID: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    totalBalance: PromiseOrValue<BigNumberish>;
    planID: PromiseOrValue<BigNumberish>;
    planProviderID: PromiseOrValue<BigNumberish>;
    numMembers: PromiseOrValue<BigNumberish>;
    initialized: PromiseOrValue<boolean>;
    creationTimestamp: PromiseOrValue<BigNumberish>;
    lastPaymentTimestamp: PromiseOrValue<BigNumberish>;
  };

  export type GroupStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    groupID: BigNumber;
    name: string;
    totalBalance: BigNumber;
    planID: BigNumber;
    planProviderID: BigNumber;
    numMembers: BigNumber;
    initialized: boolean;
    creationTimestamp: BigNumber;
    lastPaymentTimestamp: BigNumber;
  };

  export type UserStruct = {
    owner: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
    berries: PromiseOrValue<BigNumberish>;
    numGroups: PromiseOrValue<BigNumberish>;
    imageURL: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
  };

  export type UserStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    string
  ] & {
    owner: string;
    name: string;
    berries: BigNumber;
    numGroups: BigNumber;
    imageURL: string;
    description: string;
  };
}

export interface BerryInterface extends utils.Interface {
  functions: {
    "addPlan(uint256,string,string,uint256,uint256,uint8)": FunctionFragment;
    "createGroup(uint256,uint256,string)": FunctionFragment;
    "createProvider(string,string,address)": FunctionFragment;
    "getAllUserGroups(address)": FunctionFragment;
    "getBio()": FunctionFragment;
    "getName()": FunctionFragment;
    "getUserBerries()": FunctionFragment;
    "groups(uint256)": FunctionFragment;
    "groupsPerUser(address,uint256)": FunctionFragment;
    "joinGroup(uint256)": FunctionFragment;
    "leaveGroup(uint256)": FunctionFragment;
    "membersPerGroup(uint256,uint256)": FunctionFragment;
    "numGroups()": FunctionFragment;
    "numProviders()": FunctionFragment;
    "numUsers()": FunctionFragment;
    "payRecurrent(uint256)": FunctionFragment;
    "plansPerProvider(uint256,uint256)": FunctionFragment;
    "providers(uint256)": FunctionFragment;
    "register(string,string,string)": FunctionFragment;
    "setBio(string)": FunctionFragment;
    "setName(string)": FunctionFragment;
    "userGroupMembership(uint256,address)": FunctionFragment;
    "users(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addPlan"
      | "createGroup"
      | "createProvider"
      | "getAllUserGroups"
      | "getBio"
      | "getName"
      | "getUserBerries"
      | "groups"
      | "groupsPerUser"
      | "joinGroup"
      | "leaveGroup"
      | "membersPerGroup"
      | "numGroups"
      | "numProviders"
      | "numUsers"
      | "payRecurrent"
      | "plansPerProvider"
      | "providers"
      | "register"
      | "setBio"
      | "setName"
      | "userGroupMembership"
      | "users"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addPlan",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createProvider",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllUserGroups",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getBio", values?: undefined): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getUserBerries",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "groups",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "groupsPerUser",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "joinGroup",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "leaveGroup",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "membersPerGroup",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "numGroups", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "numProviders",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "numUsers", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payRecurrent",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "plansPerProvider",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "providers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setBio",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userGroupMembership",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "users",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addPlan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllUserGroups",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserBerries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "groups", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "groupsPerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinGroup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leaveGroup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "membersPerGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numGroups", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numProviders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numUsers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payRecurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "plansPerProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "providers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userGroupMembership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;

  events: {};
}

export interface Berry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BerryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addPlan(
      providerID: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      recurrence: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      maxMembers: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createGroup(
      providerID: PromiseOrValue<BigNumberish>,
      planID: PromiseOrValue<BigNumberish>,
      groupName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createProvider(
      name: PromiseOrValue<string>,
      imageURL: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllUserGroups(
      userAdress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [Berry.GroupStructOutput[]] & { userGroups: Berry.GroupStructOutput[] }
    >;

    getBio(overrides?: CallOverrides): Promise<[string]>;

    getName(overrides?: CallOverrides): Promise<[string]>;

    getUserBerries(overrides?: CallOverrides): Promise<[BigNumber]>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
      ] & {
        groupID: BigNumber;
        name: string;
        totalBalance: BigNumber;
        planID: BigNumber;
        planProviderID: BigNumber;
        numMembers: BigNumber;
        initialized: boolean;
        creationTimestamp: BigNumber;
        lastPaymentTimestamp: BigNumber;
      }
    >;

    groupsPerUser(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
      ] & {
        groupID: BigNumber;
        name: string;
        totalBalance: BigNumber;
        planID: BigNumber;
        planProviderID: BigNumber;
        numMembers: BigNumber;
        initialized: boolean;
        creationTimestamp: BigNumber;
        lastPaymentTimestamp: BigNumber;
      }
    >;

    joinGroup(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    leaveGroup(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    membersPerGroup(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, Berry.UserStructOutput, BigNumber] & {
        groupID: BigNumber;
        member: Berry.UserStructOutput;
        balance: BigNumber;
      }
    >;

    numGroups(overrides?: CallOverrides): Promise<[BigNumber]>;

    numProviders(overrides?: CallOverrides): Promise<[BigNumber]>;

    numUsers(overrides?: CallOverrides): Promise<[BigNumber]>;

    payRecurrent(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    plansPerProvider(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        boolean,
        number,
        BigNumber
      ] & {
        planID: BigNumber;
        providerID: BigNumber;
        name: string;
        description: string;
        recurrence: BigNumber;
        price: BigNumber;
        active: boolean;
        maxMembers: number;
        pricePerMember: BigNumber;
      }
    >;

    providers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber] & {
        providerID: BigNumber;
        name: string;
        imageURL: string;
        serviceOwner: string;
        numPlans: BigNumber;
      }
    >;

    register(
      name: PromiseOrValue<string>,
      imageURL: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBio(
      bio: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setName(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userGroupMembership(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, Berry.UserStructOutput, BigNumber] & {
        groupID: BigNumber;
        member: Berry.UserStructOutput;
        balance: BigNumber;
      }
    >;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, string, string] & {
        owner: string;
        name: string;
        berries: BigNumber;
        numGroups: BigNumber;
        imageURL: string;
        description: string;
      }
    >;
  };

  addPlan(
    providerID: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    description: PromiseOrValue<string>,
    recurrence: PromiseOrValue<BigNumberish>,
    price: PromiseOrValue<BigNumberish>,
    maxMembers: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createGroup(
    providerID: PromiseOrValue<BigNumberish>,
    planID: PromiseOrValue<BigNumberish>,
    groupName: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createProvider(
    name: PromiseOrValue<string>,
    imageURL: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllUserGroups(
    userAdress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Berry.GroupStructOutput[]>;

  getBio(overrides?: CallOverrides): Promise<string>;

  getName(overrides?: CallOverrides): Promise<string>;

  getUserBerries(overrides?: CallOverrides): Promise<BigNumber>;

  groups(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      BigNumber,
      BigNumber
    ] & {
      groupID: BigNumber;
      name: string;
      totalBalance: BigNumber;
      planID: BigNumber;
      planProviderID: BigNumber;
      numMembers: BigNumber;
      initialized: boolean;
      creationTimestamp: BigNumber;
      lastPaymentTimestamp: BigNumber;
    }
  >;

  groupsPerUser(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      BigNumber,
      BigNumber
    ] & {
      groupID: BigNumber;
      name: string;
      totalBalance: BigNumber;
      planID: BigNumber;
      planProviderID: BigNumber;
      numMembers: BigNumber;
      initialized: boolean;
      creationTimestamp: BigNumber;
      lastPaymentTimestamp: BigNumber;
    }
  >;

  joinGroup(
    groupID: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  leaveGroup(
    groupID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  membersPerGroup(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, Berry.UserStructOutput, BigNumber] & {
      groupID: BigNumber;
      member: Berry.UserStructOutput;
      balance: BigNumber;
    }
  >;

  numGroups(overrides?: CallOverrides): Promise<BigNumber>;

  numProviders(overrides?: CallOverrides): Promise<BigNumber>;

  numUsers(overrides?: CallOverrides): Promise<BigNumber>;

  payRecurrent(
    groupID: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  plansPerProvider(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      string,
      string,
      BigNumber,
      BigNumber,
      boolean,
      number,
      BigNumber
    ] & {
      planID: BigNumber;
      providerID: BigNumber;
      name: string;
      description: string;
      recurrence: BigNumber;
      price: BigNumber;
      active: boolean;
      maxMembers: number;
      pricePerMember: BigNumber;
    }
  >;

  providers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber] & {
      providerID: BigNumber;
      name: string;
      imageURL: string;
      serviceOwner: string;
      numPlans: BigNumber;
    }
  >;

  register(
    name: PromiseOrValue<string>,
    imageURL: PromiseOrValue<string>,
    description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBio(
    bio: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setName(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userGroupMembership(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, Berry.UserStructOutput, BigNumber] & {
      groupID: BigNumber;
      member: Berry.UserStructOutput;
      balance: BigNumber;
    }
  >;

  users(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, string, string] & {
      owner: string;
      name: string;
      berries: BigNumber;
      numGroups: BigNumber;
      imageURL: string;
      description: string;
    }
  >;

  callStatic: {
    addPlan(
      providerID: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      recurrence: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      maxMembers: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createGroup(
      providerID: PromiseOrValue<BigNumberish>,
      planID: PromiseOrValue<BigNumberish>,
      groupName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createProvider(
      name: PromiseOrValue<string>,
      imageURL: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllUserGroups(
      userAdress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Berry.GroupStructOutput[]>;

    getBio(overrides?: CallOverrides): Promise<string>;

    getName(overrides?: CallOverrides): Promise<string>;

    getUserBerries(overrides?: CallOverrides): Promise<BigNumber>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
      ] & {
        groupID: BigNumber;
        name: string;
        totalBalance: BigNumber;
        planID: BigNumber;
        planProviderID: BigNumber;
        numMembers: BigNumber;
        initialized: boolean;
        creationTimestamp: BigNumber;
        lastPaymentTimestamp: BigNumber;
      }
    >;

    groupsPerUser(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
      ] & {
        groupID: BigNumber;
        name: string;
        totalBalance: BigNumber;
        planID: BigNumber;
        planProviderID: BigNumber;
        numMembers: BigNumber;
        initialized: boolean;
        creationTimestamp: BigNumber;
        lastPaymentTimestamp: BigNumber;
      }
    >;

    joinGroup(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    leaveGroup(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    membersPerGroup(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, Berry.UserStructOutput, BigNumber] & {
        groupID: BigNumber;
        member: Berry.UserStructOutput;
        balance: BigNumber;
      }
    >;

    numGroups(overrides?: CallOverrides): Promise<BigNumber>;

    numProviders(overrides?: CallOverrides): Promise<BigNumber>;

    numUsers(overrides?: CallOverrides): Promise<BigNumber>;

    payRecurrent(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    plansPerProvider(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        boolean,
        number,
        BigNumber
      ] & {
        planID: BigNumber;
        providerID: BigNumber;
        name: string;
        description: string;
        recurrence: BigNumber;
        price: BigNumber;
        active: boolean;
        maxMembers: number;
        pricePerMember: BigNumber;
      }
    >;

    providers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber] & {
        providerID: BigNumber;
        name: string;
        imageURL: string;
        serviceOwner: string;
        numPlans: BigNumber;
      }
    >;

    register(
      name: PromiseOrValue<string>,
      imageURL: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBio(
      bio: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    userGroupMembership(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, Berry.UserStructOutput, BigNumber] & {
        groupID: BigNumber;
        member: Berry.UserStructOutput;
        balance: BigNumber;
      }
    >;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, string, string] & {
        owner: string;
        name: string;
        berries: BigNumber;
        numGroups: BigNumber;
        imageURL: string;
        description: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    addPlan(
      providerID: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      recurrence: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      maxMembers: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createGroup(
      providerID: PromiseOrValue<BigNumberish>,
      planID: PromiseOrValue<BigNumberish>,
      groupName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createProvider(
      name: PromiseOrValue<string>,
      imageURL: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllUserGroups(
      userAdress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBio(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    getUserBerries(overrides?: CallOverrides): Promise<BigNumber>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    groupsPerUser(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinGroup(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    leaveGroup(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    membersPerGroup(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numGroups(overrides?: CallOverrides): Promise<BigNumber>;

    numProviders(overrides?: CallOverrides): Promise<BigNumber>;

    numUsers(overrides?: CallOverrides): Promise<BigNumber>;

    payRecurrent(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    plansPerProvider(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    providers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      name: PromiseOrValue<string>,
      imageURL: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBio(
      bio: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setName(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userGroupMembership(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPlan(
      providerID: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      recurrence: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      maxMembers: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createGroup(
      providerID: PromiseOrValue<BigNumberish>,
      planID: PromiseOrValue<BigNumberish>,
      groupName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createProvider(
      name: PromiseOrValue<string>,
      imageURL: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllUserGroups(
      userAdress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserBerries(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    groupsPerUser(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinGroup(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    leaveGroup(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    membersPerGroup(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numGroups(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numProviders(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numUsers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payRecurrent(
      groupID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    plansPerProvider(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    providers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      name: PromiseOrValue<string>,
      imageURL: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBio(
      bio: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setName(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userGroupMembership(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
