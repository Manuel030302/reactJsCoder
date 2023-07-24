import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../Services/gamesAsyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

function ItemDetailContainer() {
  const [game, setGame] = useState({});
  const {id} = useParams();

  async function requestGame() {
    const resp = await getGameById(id);
    setGame(resp);
    console.log(`RESP ======== ${resp}`)
  }

  useEffect(() => {
    requestGame();
  }, [id]);

  return (
    <ItemDetail game={game}/>
  )
}

export default ItemDetailContainer;