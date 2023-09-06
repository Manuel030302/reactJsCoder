import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getGameById } from "../../Services/gamesAsyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { cartContext } from "../../Context/CartContext.jsx";

function ItemDetailContainer() {
  const [game, setGame] = useState({});
  const [toCart, setToCart] = useState(false);
  const {id} = useParams();
  const {addToCart} = useContext(cartContext);

  async function requestGame() {
    const resp = await getGameById(id);
    setGame(resp);
  }

  useEffect(() => {
    requestGame();
    console.log(game)
  }, [id, toCart]);

  function handleAddToCart(clickCount) {
    addToCart(game, clickCount);
    setToCart(true);
    alert(`Producto agregado al carrito, cantidad: ${clickCount}`);
    
  }

  return (
    <>
      {
        Object.keys(game).length === 0 && game.constructor === Object ?
          <h2>Oops, It seems this we don't have this game, try something else</h2>
        :
          <>
            <ItemDetail game={game}/> 
            <ItemCount onConfirm={handleAddToCart} toCart={toCart} stock={4}/>
            <Link to='/'><button>Volver</button></Link>
          </>
      } 
    </>
  )
}

export default ItemDetailContainer;