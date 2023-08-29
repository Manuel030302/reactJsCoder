import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../Services/gamesAsyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { cartContext } from "../../Context/CartContext.jsx";

function ItemDetailContainer() {
  const [game, setGame] = useState({});
  const {id} = useParams();

  const {addToCart} = useContext(cartContext);

  async function requestGame() {
    const resp = await getGameById(id);
    setGame(resp);
    console.log(`RESP ======== ${resp}`)
  }

  useEffect(() => {
    requestGame();
  }, [id]);

  function handleAddToCart(clickCount) {
    addToCart(game, clickCount);
    alert(`Producto agregado al carrito, cantidad: ${clickCount}`);
  }

  return (
    <>
      <ItemDetail game={game}/>
      <ItemCount onConfirm={handleAddToCart} stock={4}/>
      {/* // Agregar ItemCount
      // Agregar un boton poara volver al inicio, link to '/' */}
    </>
  )
}

export default ItemDetailContainer;