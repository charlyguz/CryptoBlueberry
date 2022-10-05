
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

import "./App.css";

  
function App() {
  
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
  
    // Setting a balance
    getbalance(account);
  };
  
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />}>
          </Route>

          <Route path="/dashboard" exact element={<Dashboard />}>
            
                <Route path="balance">

                </Route>
          </Route>

          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    </Router>
  );
}
  
export default App;
