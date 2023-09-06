import React, { useEffect } from "react";
import CheckInContainer from "../CheckInContainer/CheckInContainer.jsx";

function CartView(props) {
  const {cart, calcularTotalAPagar, handleFinalizarCompra, showCheckoutForm, handleCompraExitosa, removeItem} = props
  useEffect(() => {}, [showCheckoutForm])

  return(
    <div >
      <h1>Carrito</h1>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.urlImagen} alt={item.nombre} style={{ width: '100px' }} />
              </td>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td>{item.count}</td>
              <td><button onClick={() => {removeItem(item.id)}}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total a pagar: ${calcularTotalAPagar()}</h2>
        <button className='finalizar-compra' onClick={handleFinalizarCompra}>Realizar Compra</button>
      </div>
      {showCheckoutForm && <CheckInContainer onCompraExitosa={handleCompraExitosa}/>}
      
    </div>
  )
}

export default CartView;