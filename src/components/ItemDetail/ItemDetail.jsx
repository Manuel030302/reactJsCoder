import React from "react";
import "./ItemDetail.css"

function ItemDetail(props) {
  const {game} = props
  return (
    <div className="cardGame">
      <div className="imgContainer">
        <img src={game.urlImagen} alt="" />
      </div>
      <div className="infoCard">
        <div>
          <h2>{game.nombre}</h2>
        </div>
        <div>
          <h3>${game.precio-(game.precio*game.descuento)}</h3>
          <p>Precio original: ${game.precio}</p>
          <p>Descuento: {game.descuento}%</p>
        </div>
        <div>
          <strong>{game.rate}/10</strong>
          <p>{game.categoria}</p>
        </div>
      </div>
    </div>   
  )
}

export default ItemDetail;