import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Jelly } from '@uiball/loaders'
import "./ItemListContainer.css"
import {getGames, getGameByCategory} from "../../Services/gamesAsyncMock.js";
import ItemList from "../ItemList/ItemList.jsx";


function ItemListContainer(props) {
  const {category} = useParams();
  const {greeting} = props;

  const [games, setGames] = useState([]);
  const [wrongCategory, setWrongCategory] = useState(false);
  const [fetchingError, setFetchingError] = useState(false)
  
  async function fetchingGames() {
    try {
      let gamesFetched = category
      if(gamesFetched) {
        gamesFetched = await getGameByCategory(gamesFetched);
        !gamesFetched && setWrongCategory(true)
      } else {
        gamesFetched = await getGames();
        !gamesFetched && setFetchingError(true)
      }
      setGames(gamesFetched)
    } catch(err) {
      console.error(`Error, couldn't get data: ${err}`);
    }
  } 

  useEffect(() =>{
    fetchingGames(); 
  }, [category])

  if(games.length === 0) {
    return(
      <Jelly 
      size={80}
      speed={0.9} 
      color="black" 
      />
    )
  }
    
  return (
    <main>
      <h1 className="">{greeting}</h1>
      {
        category ?
          !wrongCategory ?
            <ItemList catalogue={games}/>
          :
            <h3>Oops, It seems we dont have those kind of games</h3>
        :
          !fetchingError ?
            <ItemList catalogue={games}/>
          :
            <h3>Oops, Couldn't load the games</h3>
      }
    </main>
  );
}

export default ItemListContainer;