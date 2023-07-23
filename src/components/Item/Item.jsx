import React from "react";

function Item(props) {
  const {id, name, price, discount, rate, image} = props

  return (
    <div className="card">
      <div>
        <h3>{name}</h3>
        <img src={image} alt="" />
        <strong>{price}</strong>
      </div>
    </div>
  );
}

export default Item;