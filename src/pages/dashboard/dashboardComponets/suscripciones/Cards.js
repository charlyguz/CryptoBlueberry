import "./suscripciones.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { joinGroup } from "../../../../utils/berry-contract";
import abi from "../../../../contract/Berry.json";
const addres = process.env.REACT_APP_BERRY_CONTRACT_ADDR

export const Cards = (props) => {
  async function joinGroupD(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
        const result = await joinGroup(contract,0,0,0);
        console.log(result);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

    return (
      <>
          <div className="section__grupos-item-container">
            <div className="section__grupos-item-container--img">
              <img src={props.image} alt="img" className="card-image"/>
            </div>
            <div className="section__grupos-item-container--text">
              <h4>{props.title}</h4>
              <input id="mostrar-modal" name="modal" type="radio" /> 
              <label htmlFor="mostrar-modal"> Ver Grupos </label>
              <input id="cerrar-modal" name="modal" type="radio" /> 
                <label htmlFor="cerrar-modal"> X </label> 
                <div id="modal">
                    <div className="modal-grupos">
                        <p onClick={joinGroupD}> Grupo 1</p>
                        <p> Grupo 2</p>
                        <p> Grupo 3</p>
                    </div>
                </div>
            </div>
          </div>
      </>
    )
  }