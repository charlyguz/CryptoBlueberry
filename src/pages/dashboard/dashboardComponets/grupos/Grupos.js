import React from "react";
import "./grupos.css";
import { Card } from "./Card";
// import {getUserGroups} from "../../../utils/berry-contract";

const addres = ''
// const Grupos = ({signer}) => {
const Grupos = () => {

  // const groups = async function getUserGroupsD(signer) {
  //   const groups = await getUserGroups(signer);
  //   return groups;
  // }

  // const groups = async function getUserGroupsD() {
  //   if(window.rsk){
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       addres,
  //       ABI.abi,
  //       signer
  //     );
  //     try {
  //       const groups = await contract.getUserGroups();
  //       return groups;
  //     }
  //   }
  // }


  return (
    <section className="section__grupos-container">
      <h3 className="section__grupos-item-title">Grupos</h3>
      {/* <div className="section__grupos-item">{groups(signer)}</div> */}
      <div className="section__grupos-item">
        <Card />
      </div>
    </section>
  );
};

export default Grupos;
