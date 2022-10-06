import React from "react";
import "./suscripciones.css";
import { Cards } from "./Cards";

const Suscripciones = () => {
  return (
    <>
    <section className="section__suscripciones-container">
        <h3 className="section__suscripciones-item-title">Suscripciones</h3>
        <div className="section__suscripciones-item">
          <Cards />
        </div>
    </section>
    </>
  );
};

export default Suscripciones;
