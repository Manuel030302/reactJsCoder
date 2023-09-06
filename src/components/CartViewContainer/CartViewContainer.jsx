
import React, {useContext, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./CartViewContainer.css"
import { cartContext } from "../../Context/CartContext";
import CartView from "../CartView/CartView.jsx";

function CartViewContainer() {
  const {cart, clearCart, removeItem, calcularTotalAPagar} = useContext(cartContext)
  const [showCheckoutForm, setShowCheckoutForm] = useState(false)
  
  const handleFinalizarCompra = () => {
    setShowCheckoutForm(true)
  }

  const handleCompraExitosa = () => {
    clearCart()
    setShowCheckoutForm(false)
  }
  console.log(cart)

  useEffect(() => {
    console.log(`compra exitosa`)
    console.log(showCheckoutForm)
    
  },[showCheckoutForm])

  return (
    <>
      {
        cart.length > 0 ?
          <CartView cart={cart} 
          calcularTotalAPagar={calcularTotalAPagar} 
          handleFinalizarCompra={handleFinalizarCompra}
          showCheckoutForm={showCheckoutForm}
          handleCompraExitosa={handleCompraExitosa}
          removeItem={removeItem}/>
        :
          <>
            <h1>No hay juegos en el carrito aún</h1>
            <Link to='/'><button>Inicio</button></Link>
          </>
      }
    </>
  )
}

export default CartViewContainer