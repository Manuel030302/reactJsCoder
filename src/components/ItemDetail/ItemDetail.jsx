import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";

function ItemDetail(props) {
    const {game} = props
    return (
        <>
          <div>
            <img src={game.image} alt="" />
          </div>
          <div>
            <h4>{game.name}</h4>
          </div>
          <div>
            <h3>{game.price}</h3>
          </div>
          <div>
            <strong>{game.rate}</strong>
          </div>
          <div>
            <ItemCount stock={10} initial={1}/>
          </div>
        </>
      )
}

export default ItemDetail;