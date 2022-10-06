import React, { useState } from "react";
import "./grupos.css";
import { Card } from "./Card";
// import {getUserGroups} from "../../../utils/berry-contract";
// import getBerryUser from "../../utils/berry-contract";
import {
  getAllProviders,
  createPlan,
  createGroup,
  getPlan,
  joinGroup,
  getAllGroups,
  getBerrys,
} from "../../../../utils/berry-contract";
import abi from "../../../../contract/Berry.json";
import { ethers } from "ethers";

const addres = "0xf25137694E130Fb87735a87C49691054a34cD930";
// const Grupos = ({signer}) => {
const Grupos = () => {
  const [displayN, setDisplay] = useState(0);

  async function createGroupD() {
    setDisplay(!displayN);

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(addres, abi.abi, signer);
      try {
        const result = await createGroup(contract, 1, 0, "Grupo 1", {
          value: ethers.utils.parseEther("0.03"),
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

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
      <div className="section__grupos-container-flex">
        <h3 className="section__grupos-item-title">Grupos</h3>
        <button className="search_dash-button" onClick={createGroupD}>
          {" "}
          Crear grupo{" "}
        </button>
      </div>

      {/* <div className="section__grupos-item">{groups(signer)}</div> */}
      <div className="section__grupos-item">
        <Card />
      </div>

      <div
        className="container-input"
        style={{ display: displayN ? "flex" : "none" }}
      >
        <label className="container-input-title">Nombre</label>
        <input type="text" />

        <label className="container-input-title">Plan Id</label>
        <input type="number" />
        <button className="container-input-button">Crea un grupo</button>
      </div>
    </section>
  );
};

export default Grupos;
