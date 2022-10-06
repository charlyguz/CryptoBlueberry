import React from "react";

import "./balance.css";
//src={require("./../../../../assets/img/grafica.png").default} className="img_grafica_balance"
const Balance = () => {
  return (
    <section className="section__balance-container">
      <h3 className="section__balance-item-title">Balance</h3>
      <div className="section__balance-item">
        
        <img
                className="img_grafica_balance"
                src={require("./../../../../assets/img/grafica.jpg")}
                alt=""
        />
       
      </div>
    </section>
  );
};

export default Balance;
