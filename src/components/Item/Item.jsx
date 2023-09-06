import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  const {id, name, price, discount, image} = props

  return (
    
    <Link to={`/item/${id}`}>
      <div className="card">
        <h3>{name}</h3>
        <img src={image} alt="" />
        {
          discount ?
            <>
              <strong>Original price: ${price}</strong>
              <br />
              <strong>Offer: ${price-(price*discount)}</strong>
              <br />
              <strong>{discount*100}%</strong>
            </>
          :
            <strong>${price}</strong>
        }
        <button>Ver Juego</button>
      </div>
    </Link>
  );
}

export default Item;