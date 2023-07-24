import React, { useEffect, useState } from "react";
import {getGames, getGameByCategory} from "../Services/gamesAsyncMock.js";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList.jsx";


function ItemListContainer(props) {
  const {category} = useParams();
  const {items} = props;

  const [games, setGames] = useState([]);
  const [searchId, setSearchId] = useState(null);

  async function fetchingGames() {
    try {
      let gamesFetched = category
      console.log(`Categoria =========> ${category}`)
      if(gamesFetched) {
        gamesFetched = await getGameByCategory(gamesFetched);
        console.log(`Categoria ${category} =====================>`);
        console.log(gamesFetched);
      } else {
        gamesFetched = await getGames();
        console.log(`Catalogo completo =====================>`);
        console.log(gamesFetched);
      }
      setGames(gamesFetched)
    } catch(err) {
      console.error(`Error al obtener los datos: ${err}`);
    }
  }
  

  useEffect(() =>{
    fetchingGames();
  }, [category])
    
  return (
    <main>
      <h1 className="">{props.greeting}</h1>
      <ItemList catalogue={games}/>
    </main>
  );
}

export default ItemListContainer;