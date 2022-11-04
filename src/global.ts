/// <reference types="react-scripts" />
// declare global {
  interface Window {
    ethereum?: import("ethers").providers.ExternalProvider;
  }
// }
