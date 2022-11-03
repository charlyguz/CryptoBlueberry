import React, { useState } from "react";
import "./suscripciones.css";
import { Cards } from './Cards'
import { ethers } from "ethers";
// import {getProviderPlans,getAllGroups, createGroup, joinGroup} from "../../utils/berry-contract";
// import { joinGroup } from "../../../../utils/berry-contract";
import abi from "../../../../contract/Berry.json";

const addres = '0xf25137694E130Fb87735a87C49691054a34cD930'

const Suscripciones = ({ signer }) => {
  const [misGrupos, setMisGrupos] = useState([])
  
  async function getMyGroups() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
         setMisGrupos(await contract.getUserGroups(contract, contract.signer))
        console.log("provider creado");
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  // async function joinGroupD(){
  //   if(window.ethereum){
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       addres,
  //       abi.abi,
  //       signer
  //     );
  //     try {
  //       const result = await joinGroup(contract,0,0,0);
  //       console.log(result);
  //     }
  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }

  return (
    <>
      <section className="section__suscripciones-container">
        <h3 className="section__suscripciones-item-title">Suscripciones</h3>
        <div className="section__suscripciones-item">
          <Cards image={require("./../../../../assets/img/Coursera.svg").default} title="Coursera"/>
          <Cards image={require("./../../../../assets/img/Duolingo.svg").default} title="Duolingo"/>
          <Cards image={require("./../../../../assets/img/Udemy.svg").default} title="Udemy"/>
          <Cards image={require("./../../../../assets/img/amazon.svg").default} title="Amazon"/>
          <Cards image={require("./../../../../assets/img/hbo.svg").default} title="HBO"/>
        </div>
      </section>
    </>
  );
};

export default Suscripciones;
