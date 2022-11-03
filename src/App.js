
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

import "./App.css";

  
function App() {
  const [ account , setAccount  ] = useState ([]);
  const [ signer , setSigner  ] = useState ( null );
  
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home signer = {signer} setSigner = {setSigner} account = {account} setAccount = {setAccount}/>}>
          </Route>
          
          <Route path="/dashboard" exact element={<Dashboard signer = {signer} setSigner = {setSigner} account = {account} setAccount = {setAccount}/>}>
          {/* {initConnection ? ( <Route path="/dashboard" element={<Dashboard />}> ) : ( <Navigate to="/" /> )} */}
                <Route path="inicio" exact element={<Inicio />}></Route>
                <Route path="suscripciones" exact element={<Suscripciones signer = {signer} setSigner = {setSigner}/>}></Route>
                <Route path="balance" exact element={<Balance />}></Route>
                <Route path="transacciones" exact element={<Transacciones />}></Route>
                <Route path="grupos" exact element={<Grupos signer = {signer} setSigner = {setSigner}/>}></Route>
          </Route>
          
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    </Router>
  );
}
  
export default App;
