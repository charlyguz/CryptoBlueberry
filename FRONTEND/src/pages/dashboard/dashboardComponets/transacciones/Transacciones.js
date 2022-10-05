import React from "react";
import "./transacciones.css"

const Transacciones = () => {
    return (
        <React.Fragment>
        <div class="cards_dash_trans">
            <div class="card_dash">
                <h3 class="letter_dash">Transacciones</h3>
                <div class="card_dash_data">
                    <div>
                        <div class="trans_tab_type">
                            <h3>Type</h3>
                            <div class="trans_tab_data">

                            </div>
                        </div>
                        <div class="trans_tab_amount">
                            <h3>Amount</h3>
                            <div class="trans_tab_data">

                            </div>
                        </div>
                        <div class="trans_tab_status">
                            <h3>Status</h3>
                            <div class="trans_tab_data">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Transacciones