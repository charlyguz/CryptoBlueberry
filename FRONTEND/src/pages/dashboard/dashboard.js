import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import Cards from "./dashboardComponets/cards";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="nav__dasboard-container">

        <div className="nav_dashboard_izq">
          <div className="nav_dashboard_izq-top">
            <Link to="/" className="title-dash">
              CryptoBlueberry
            </Link>
          </div>
          <div className="opcions_contain">
            <div className="layers_dash">
              <NavLink
                to="/dashboard/inicio"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Users
              </NavLink>

              <NavLink
                to="/dashboard/balance"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Balance
              </NavLink>

              <NavLink
                to="/dashboard/transacciones"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Transacciones
              </NavLink>

              <NavLink
                to="/dashboard/grupos"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Grupos
              </NavLink>

              <NavLink
                to="/dashboard/suscripciones"
                style={({ isActive }) => ({
                  color: isActive ? "#6c61dd" : "#fff",
                })}
              >
                Suscripciones
              </NavLink>
            </div>
            <div className="config_dash"></div>
          </div>
        </div>

        <div className="dash_dere">
          <div className="header_dash">
            <div className="search_dash"> no se cosas de balance o asi </div>
            <img
              src={
                require("https://img.icons8.com/small/64/000000/user.png")
                  .default
              }
              className="img_perfil_dash"
              alt=""
            />
            <h3 className="letter_dash_porfile">Cuenta</h3>
          </div>
          <Outlet></Outlet>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
