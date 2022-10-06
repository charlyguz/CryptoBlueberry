import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import Cards from "./dashboardComponets/cards";
// import getBerryUser from "../../utils/berry-contract";
import {getAllProviders, createPlan, createGroup, getPlan, joinGroup, getAllGroups} from "../../utils/berry-contract";
import abi from "../../contract/abi.json";
import { ethers, BigNumber } from "ethers";

const addres = '0xf25137694E130Fb87735a87C49691054a34cD930'
const Dashboard = (account, setAccount) => {

  
  // async function getBerryUser(signer) {
  //   const numBerrys = await getBerryUser(signer);
  //   return numBerrys;
  // }

  // async function getBalance(signer, account) {
  //   const balance = await signer.getBalance(account);
  //   return balance;
  // }
  // // const contract = new ethers.Contract(addres, abi.abi, signer);

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
        // await register(contract, signer, "carlos", "url", "description");
        const login = await contract.createProvider("test", "url", "0x3981f28dC18429552D71C8Cf1f43819cbfBF3C71");
        console.log("provider creado");
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
        // const result = await createPlan(contract, 0, "test plan 1", "test desc", BigNumber.from(30), {value: ethers.utils.parseEther("0.03")}, BigNumber.from(3));
        const result = await createPlan(contract, 0, "test plan 1", "test desc", 30, ethers.utils.parseEther("0.03"), 5);
        // const result = await createPlan(contract, 0, "test plan 1", "test desc", 30,ethers.utils.parseEther("0.03"), 3);
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
        const result = await createGroup(contract,0,0,"test group 1", {value: ethers.utils.parseEther("0.03")});
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



  // }

  // async function getName() {
  //   if(window.ethereum){
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       addres,
  //       abi.abi,
  //       signer
  //     );
  //     try {
  //       const name = await contract.getName();
  //       console.log("name ", name);
  //     }
  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
    
  // }

  



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
            <button className="search_dash" onClick={createGroupD}> clickme register </button>  {/*aqui meten el balance de la cuenta y las berrys}*/}
            <button className="search_dash" onClick={getAllGroupsD}> clickme plan </button>  {/*aqui meten el balance de la cuenta y las berrys}
            {/* <button className="search_dash"onClick={getName} > dame name</button>  aqui meten el balance de la cuenta y las berrys */}
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
