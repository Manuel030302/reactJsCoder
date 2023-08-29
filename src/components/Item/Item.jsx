import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  const {id, name, price, discount, rate, image, category} = props

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt="" />
      <strong>{price}</strong>
      {/* <strong>ID: {id}</strong> */}
      <Link to={`/item/${id}`}>Ver Juego</Link>
    </div>
  );
}

export default Item;