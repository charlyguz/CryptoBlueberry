import React from "react";
import "./transacciones.css";

const Transacciones = () => {
  return (
    <section className="section__transacciones-container">
        <h3 className="section__transacciones-item-title">Transacciones</h3>
        
        
          <img
                  className="img_precio_transacciones"
                  src={require("./../../../../assets/img/CryptoCurrency.png")}
                  alt=""
          />
        
    </section>
  );
};

export default Transacciones;
