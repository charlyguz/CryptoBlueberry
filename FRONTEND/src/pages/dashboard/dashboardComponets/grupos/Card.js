import "./grupos.css";
export const Card = () => {
  return (
    <>
        <div className="section__grupos-item-container">
          <div className="section__grupos-item-container--img">
            <img src={require("./../../../../assets/img/Coursera.svg").default} alt="img" className="imagen"/>
          </div>
          <div className="section__grupos-item-container--text">
            <h4>Coursera</h4>
            <p>Membresia</p>
            <p className="section__grupos-item-container--price">Precio: 100 <small>Berrys</small></p>
          </div>
        </div>
    </>
  )
}
