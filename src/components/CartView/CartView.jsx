
import { cartContext } from "../../Context/CartContext";
import React, {useContext, useState} from 'react'
import CheckInContainer from "../CheckInContainer/CheckInContainer.jsx";
//import "./CarritoPages.css"

const CartView = () => {
    const {cart, clearCart} = useContext(cartContext)
    const [showCheckoutForm, setShowCheckoutForm] = useState(false)

    const handleFinalizarCompra = () => {
        setShowCheckoutForm(true)
    }

    const calcularTotalAPagar = () => {
        return cart.reduce((total, item) => total + item.precio * item.count, 0)
      };    

    const groupedCarrito = cart.reduce((acc, item) => {
        const foundItem = acc.find((cartItem) => cartItem.id === item.id)
    
        if (foundItem) {
          foundItem.count += item.count
        } else {
          acc.push({ ...item })
        }
    
        return acc
      }, [])

      const handleCompraExitosa = () => {
        clearCart()
        setShowCheckoutForm(false)
      }

  return (
    <div >
      <h1>Carrito</h1>
      <table>
        <thead>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>count</th>
            </tr>
        </thead>
        <tbody>
        {groupedCarrito.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.urlImagen} alt={item.nombre} style={{ width: '100px' }} />
              </td>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td>{item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total a pagar: ${calcularTotalAPagar()}</h2>
        <button className='finalizar-compra' onClick={handleFinalizarCompra}>Finalizar Compra</button>
      </div>
        {showCheckoutForm && <CheckInContainer onCompraExitosa={handleCompraExitosa}/>}
      
    </div>
  )
}

export default CartView