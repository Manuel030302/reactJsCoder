import React, {useState, useEffect} from "react";
import "./ItemList.css"
import Item from "../Item/Item.jsx";

function ItemList(props) {
  const {catalogue} = props

  return (
    <div className="itemsContainer">
      <h1>Catalogo</h1>
      <div className="item">
        {catalogue.map((game) => (
          <Item key={game.nombre} name={game.nombre} image={game.urlImagen} price={game.precio} id={game.id} discount={game.descuento} rate={game.rate} category={game.categoria}/>
        ))}
      </div>
    </div>
  );
}

export default ItemList;