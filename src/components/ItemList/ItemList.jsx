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
          <Item key={game.id} name={game.name} image={game.image} price={game.price} id={game.id} discount={game.discount} rate={game.rate} category={game.category}/>
        ))}
      </div>
    </div>
  );
}

export default ItemList;