import React from "react";
import "./cards.css"
import Transacciones from "./transacciones/Transacciones";
import Grupos from "./grupos/Grupos";
import Suscripciones from "./suscripciones/suscripciones";
const Cards = () => {
    return (
        <React.Fragment>
            {/*aqui iria el tag <Dashboard> pero elinai dice que lo va a hacer que nada mas es pegar una imagen*/}
            <div className="cards_dash">
                <div className="card_dash">
                    <h3 className="letter_dash">Tu Balance</h3>
                    <div className="card_dash_data">
                    </div>
                </div>
            </div>
        <Transacciones />
        <Grupos />
        <Suscripciones />
        </React.Fragment>
    )
}

export default Cards


