import "./App.css";
import React, {useState} from "react";
import {ethers} from "ethers";



function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const initConnection = async () => {
    if(typeof window.etherium !== "undefined"){
      console.log("MetaMask is installed");
      const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
    }else{
      return(
        console.log("MetaMask is not installed")
      )
    }
  }
  return(
    <div>
      <button onClick={initConnection}>Connect</button>
      <p>{currentAccount}</p>
    </div>
  )
}

export default App;
