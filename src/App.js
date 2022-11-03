
// Importing modules
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { ethers } from "ethers";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/dashboard";

import Inicio from "./pages/dashboard/dashboardComponets/inicio/Incio";
import Suscripciones from "./pages/dashboard/dashboardComponets/suscripciones/Suscripciones";
import Balance from "./pages/dashboard/dashboardComponets/balance/Balance"
import Transacciones from "./pages/dashboard/dashboardComponets/transacciones/Transacciones";
import Grupos from "./pages/dashboard/dashboardComponets/grupos/Grupos";
import GruposModal from './pages/dashboard/dashboardComponets/grupos/grupos-por-plan/GruposModal'
import Proveedores from "./pages/dashboard/dashboardComponets/proveedores/Proveedores";

import "./App.css";
import { useEffect } from "react";
// import { get } from "https";
///////////


  
function App() {
  const [ account, setAccount  ] = useState ([]);
  const [ signer, setSigner  ] = useState ( [] );
  
  
  // async function getSignerD(){
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   setSigner(provider.getSigner());
  //   console.log(signer);
  //   console.log((await signer.getBalance()).toString());
  // }
  // useEffect(() => {
  //   // getSignerD()
  // }, []);

  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home signer={signer} setSigner = {setSigner} account = {account} setAccount = {setAccount}/>}>
          </Route>
          
          <Route path="/dashboard" exact element={<Dashboard signer = {signer} setSigner = {setSigner} account = {account} setAccount = {setAccount}/>}>
          {/* {initConnection ? ( <Route path="/dashboard" element={<Dashboard />}> ) : ( <Navigate to="/" /> )} */}
                <Route path="inicio" exact element={<Inicio />}></Route>
                <Route path="suscripciones" exact element={<Suscripciones signer = {signer} setSigner = {setSigner}/>}></Route>
                <Route path="balance" exact element={<Balance />}></Route>
                <Route path="transacciones" exact element={<Transacciones />}></Route>
                <Route path="grupos" exact element={<Grupos signer = {signer} setSigner = {setSigner}/>}></Route>
                {/* <Route path="grupos" exact element={<Grupos />}></Route> */}
                <Route path="modal" exact element={<GruposModal />}></Route>
                <Route path="proveedores" exact element={<Proveedores />}></Route>
          </Route>
          
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    </Router>
  );
}
  
export default App;
