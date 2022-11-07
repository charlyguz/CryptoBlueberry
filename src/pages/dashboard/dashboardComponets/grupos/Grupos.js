import React, { useState, useEffect } from "react";
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
  getUserGroups,
} from "../../../../utils/berry-contract";
import abi from "../../../../contract/Berry.json";
import { ethers } from "ethers";
import GrupoListaItem from "./grupos-por-plan/grupo-lista/GrupoListaItem";

const addres = process.env.REACT_APP_BERRY_CONTRACT_ADDR;
// const Grupos = ({signer}) => {
const Grupos = () => {
  const [displayN, setDisplay] = useState(0);
  const [userGroupsWithProvider, setUserGroupsWithProvider] = useState([])

  function displayOn() {
    setDisplay(!displayN);
  }

  async function createGroupD() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(addres, abi.abi, signer);
      try {
        const result = await createGroup(contract, 1, 1, "Grupo 2 corusera", {
          value: ethers.utils.parseEther("0.0003"),
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function getPlans() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(addres, abi.abi, signer);
      try {
        const result = await getPlan(contract, 2, 0);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function createPland() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(addres, abi.abi, signer);
      try {
        const result = await createPlan(contract, 2, "segundo plan mensual", "plan mensual :)", 30, 3000000000, 100);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function joinGroupD() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(addres, abi.abi, signer);
      try {
        // const result = await joinGroup(contract, 8, {
        //   value: ethers.utils.parseEther("0.0003"),
        // });
        const result = await joinGroup(contract, 8, {
          value: ethers.utils.parseEther("0.0003"),
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    (async function () {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          process.env.REACT_APP_BERRY_CONTRACT_ADDR,
          abi.abi,
          signer
        );
        try {
          const userGroups = await getUserGroups(contract, signer)
          const _userGroupsWithProvider = await Promise.all(userGroups.map(async (group) => {
            return {
              ...group,
              plan: await getPlan(contract, group.planProviderID, group.planID)
            }
          }))

          console.debug(_userGroupsWithProvider)

          setUserGroupsWithProvider(_userGroupsWithProvider)
        }
        catch (error) {
          console.log(error);
        }
      }
    })()
  }, [])

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
        {/* <button className="search_dash-button" onClick={displayOn}>
          {" "}
          Crear grupo{" "}
        </button> */}
        {/* <button className="container-input-button" onClick={joinGroupD}>
          creame aqui si 
        </button> */}
      </div>

      {/* <div className="section__grupos-item">{groups(signer)}</div> */}
      <div className="section__grupos-item">
        <ul className="divide-y">
          {userGroupsWithProvider.map((currentGroup, idx) => (
            <li key={idx}>
              <GrupoListaItem group={currentGroup} isOwn={true} />
            </li>
          ))}
        </ul>
      </div>

      <div
        className="container-input"
        style={{ display: displayN ? "flex" : "none" }}
      >
        <label className="container-input-title">Nombre</label>
        <input type="text" />

        <label className="container-input-title">Plan Id</label>
        <input type="number" />
        <button className="container-input-button" onClick={createGroupD}>
          Crea un grupo
        </button>

      </div>
    </section>
  );
};

export default Grupos;
