import React from "react";
import "./CartWidget.css";

function CartWidget() {
  const cartimage = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div>
      <img src={cartimage} alt="imagen de carrito" className="cartWidget" />
      <strong>5</strong>
    </div>
  );
}

export default CartWidget;