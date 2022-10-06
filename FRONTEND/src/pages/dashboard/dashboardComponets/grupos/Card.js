import "./grupos.css";
export const Card = () => {
  return (
    <>
        <div className="section__grupos-item-container">
          <div className="section__grupos-item-container--img">
            <img src="https://picsum.photos/200/300" alt="img" />
          </div>
          <div className="section__grupos-item-container--text">
            <h4>Grupo 1</h4>
            <p>Descripcion del grupo</p>
            <p>Precio: 100 <small>Berrys</small></p>
          </div>
        </div>
    </>
  )
}
