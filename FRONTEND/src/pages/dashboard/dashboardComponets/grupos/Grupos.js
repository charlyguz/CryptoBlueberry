import React from "react";
import "./grupos.css";
import { Card } from "./Card";

const Grupos = () => {
  return (
    <section className="section__grupos-container">
      <h3 className="section__grupos-item-title">Grupos</h3>
      <div className="section__grupos-item"> 
        <Card />      
        <Card />      
        <Card />      
        <Card />            
      </div>
    </section>
  );
};

export default Grupos;
