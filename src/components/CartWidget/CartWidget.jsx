import React, { useContext } from "react";
import "./CartWidget.css";
import { cartContext } from "../../Context/CartContext";

function CartWidget() {
  const {cart, getTotalItemsInCart} = useContext(cartContext)
  const cartimage = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  
  return (
    <div>
      <img src={cartimage} alt="imagen de carrito" className="cartWidget" />
      {cart.length > 0 && <strong>{getTotalItemsInCart()}</strong>}
    </div>
  );
}

export default CartWidget;