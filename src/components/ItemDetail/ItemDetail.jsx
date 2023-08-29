import React from "react";
import { useState } from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.jsx";

function ItemDetail(props) {
  const {game} = props
  return (
    <div className="cardGame">
      <div className="imgContainer">
        <img src={game.urlImagen} alt="" />
      </div>
      <div className="infoCard">
        <div>
          <h4>{game.nombre}</h4>
        </div>
        <div>
          <h3>{game.precio}</h3>
        </div>
        <div>
          <strong>{game.rate}</strong>
        </div>
      </div>
      {/* <div>
        <ItemCount stock={10} initial={1}/>
      </div> */}
    </div>   
  )
}

export default ItemDetail;