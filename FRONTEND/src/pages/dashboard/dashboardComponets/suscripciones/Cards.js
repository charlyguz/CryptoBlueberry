import "./suscripciones.css";

export const Cards = () => {
    return (
      <>
          <div className="section__grupos-item-container">
            <div className="section__grupos-item-container--img">
              <img src="https://picsum.photos/200/300" alt="img" />
            </div>
            <div className="section__grupos-item-container--text">
              <h4>NETFLIX</h4>
              <input id="mostrar-modal" name="modal" type="radio" /> 
              <label for="mostrar-modal"> Ver Grupos </label>
              <input id="cerrar-modal" name="modal" type="radio" /> 
                <label for="cerrar-modal"> X </label> 
                <div id="modal">
                    <div>
                        <p> Grupo 1</p>
                        <p> Grupo 3</p>
                        <p> Grupo 2</p>
                    </div>
                </div>
            </div>
          </div>


      </>
    )
  }