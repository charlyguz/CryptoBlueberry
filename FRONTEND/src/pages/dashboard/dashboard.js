import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import Cards from "./dashboardComponets/cards";
// import getBerryUser from "../../utils/berry-contract";
import {getAllProviders, createPlan, createGroup, getPlan, joinGroup, getAllGroups, getBerrys} from "../../utils/berry-contract";
import abi from "../../contract/abi.json";
import { ethers, BigNumber } from "ethers";
import Balance from "./dashboardComponets/balance/Balance";
import { useState } from "react";

const addres = '0xf25137694E130Fb87735a87C49691054a34cD930'
const Dashboard = (account, setAccount) => {

  const [balance, setBalance] = useState(0);
  const [berry, setBerry] = useState(0);
  async function getbalance(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setBalance(await ethers.utils.formatEther((await signer.getBalance()).toString()));
      console.log(balance);
    }
  }
  async function createProvider() {
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
        const login = await contract.createProvider("HBO Max", "url", "0xBE7bAEb4Bc8500433F94A576AA737fe1a38850B6");
        console.log("provider creado" + login);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  async function gatAllProvider(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
        const result = await getAllProviders(contract);
        console.log(result);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  async function createPlanD(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
        //contrac, provider, name, price, description
        const result = await createPlan(contract, 5, "Plan Mensual HBOMax", "Suscripcion mensual HBOMax", 30, ethers.utils.parseEther("0.003"), 10);
        console.log(result);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  async function getPlan(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
        const result = await getPlan(contract, 0, 0);
        console.log(result);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  async function createGroupD(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
        const result = await createGroup(contract,1,0,"Grupo 1", {value: ethers.utils.parseEther("0.03")});
        console.log(result);
      }
      catch (error) {
        console.log(error);
      }
    }
  }
  async function getAllGroupsD(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
        const result = await getAllGroups(contract);
        console.log(result);
      }
      catch (error) {
        console.log(error);
      }
    }
  }
  async function getBerrysD(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addres,
        abi.abi,
        signer
      );
      try {
        setBerry(await getAllProviders(contract));
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <React.Fragment>
      <div className="nav__dasboard-container">
        <div className="nav_dashboard_izq">
          <div className="nav_dashboard_izq-top">
            <Link to="/" className="title-dash">
              CryptoBlueberry
            </Link>
          </div>
          <div className="opcions_contain">
            <div className="layers_dash">
              <NavLink
                className="dash-link"
                to="/dashboard/inicio"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Inicio
              </NavLink>

              <NavLink
                className="dash-link"
                to="/dashboard/balance"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Balance
              </NavLink>

              <NavLink
                className="dash-link"
                to="/dashboard/transacciones"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Transacciones
              </NavLink>

              <NavLink
                className="dash-link"
                to="/dashboard/grupos"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Grupos
              </NavLink>

              <NavLink
                className="dash-link"
                to="/dashboard/suscripciones"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Suscripciones
              </NavLink>
            </div>

            <div className="config_dash">
              <a className="dash-link">Configuración</a>

              <a className="dash-link">Cerrar Sesión</a>
            </div>
          </div>
        </div>

        <div className="dash_dere">
          <div className="header_dash">
            <button className="search_dash" onClick={createGroupD}> crear grupo </button>  
            {/* <button className="search_dash" onClick={getAllGroupsD}> clickme plan </button>  {/*aqui meten el balance de la cuenta y las berrys} */}
            {/* <button className="search_dash"onClick={getName} > dame name</button>  aqui meten el balance de la cuenta y las berrys */}
            {/* <button className="search_dash" onClick={getbalance}> balance :  {balance}</button>  */}
            <img
              src={
                require("https://img.icons8.com/small/64/000000/user.png")
                  .default
              }
              className="img_perfil_dash"
              alt=""
            />
            {/* <h3 className="letter_dash_porfile">Cuenta actual: {account}</h3> */}
          </div>

          <section className="section__dashboard-container">
            <Outlet></Outlet>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
