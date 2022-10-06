import React from "react";

import "./incio.css";
import { Card } from "./../grupos/Card";
import { Cards } from "./../suscripciones/Cards";

const Inicio = () => {
  return (
    <section className="section__inicio-container">
      <div className="section__inicio-item">
        <h3 className="section__inicio-item-title">Balance</h3>
        <div className="section__inicio-item-inner">
          <img src={require("./../../../../assets/img/grafica.jpg")}></img>
        </div>
      </div>
      <div className="section__inicio-item">
        <h3 className="section__inicio-item-title">Transacciones</h3>
        <div className="section__inicio-item-inner">
          <img src={require("./../../../../assets/img/CryptoCurrency.png")}></img> 
        </div>
      </div>
      <div className="section__inicio-item">
        <h3 className="section__inicio-item-title">Grupos</h3>
        <div className="section__inicio-item-inner">

          <Card></Card>
        </div>
      </div>
      <div className="section__inicio-item">
        <h3 className="section__inicio-item-title">Suscripciones</h3>
        <div className="section__inicio-item-inner">

          <Cards></Cards>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
