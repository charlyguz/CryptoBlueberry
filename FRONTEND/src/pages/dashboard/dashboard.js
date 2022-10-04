import React from "react";
import "./dashboard.css"
import Cards from "./dashboardComponets/cards";

const Dashboard = () => {
    return (
       <React.Fragment>
            <div className="nav_dashboard_izq">
                <h1 className="tittle_dash" id="cryptoblue">CryptoBlueberry</h1>
                <div className="opcions_contain">
                    <div className="layers_dash">
                        <h2 className="layers_dash_opcions" id="inicio_dash">Inicio</h2>
                        <h2 className="layers_dash_opcions" id="balance_dash">Balance</h2>
                        <h2 className="layers_dash_opcions" id="trans_dash">Transacciones</h2>
                        <h2 className="layers_dash_opcions" id="groups_dash">Grupos</h2>
                        <h2 className="layers_dash_opcions" id="sus_dash">Suscripciones</h2>
                    </div>
                    <div className="config_dash">
                        <h2 className="config_dash" id="opcion_config_dash">Configuración</h2>
                        <h2 className="config_dash" id="cerrar_ses">Cerrar Sesion</h2>
                    </div>
                </div>
            </div>
       
        
            <div className="dash_dere">
                <div className="header_dash">
                    <input type="text" className="search_dash" placeholder="Buscar"/>
                    <img src={require("https://img.icons8.com/small/64/000000/user.png")} className="img_perfil_dash" alt=""/>
                    <h3 className="letter_dash_porfile">Cuenta</h3>
                </div>
                <Cards />
                
            </div>

    </React.Fragment>
  );
};

export default Dashboard;
