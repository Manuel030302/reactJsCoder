import React, {useState, useEffect} from "react";
import getGames from "./gamesApi.js";
import Item from "../Item/Item.jsx";

/* async function readApi() {
  try{
    const gamesJson = await fetch("./gamesApi.json")
    const gamesData = await gamesJson.json()
    console.log(gamesData)
  }
  catch(err) {
    console.error(`Error al obtener los datos: ${err}`);
  }
} */

function ItemList(props) {
  const {items} = props

  const [games, setGames] = useState([])
  const [searchId, setSearchId] = useState(null);

  async function fetchingGames() {
    try {
      const gamesFetched = await getGames();
      console.log(gamesFetched)
      setGames(gamesFetched)
    } catch(err) {
      console.error(`Error al obtener los datos: ${err}`);
    }
  }
  

  useEffect(() =>{
    fetchingGames();
  }, [])

  return (
    <div className = "App">
      <h1>Catalogo</h1>
      {/* <input onChange={handleSearch} type="number" min={1} max={1200} placeholder="pokemon num"/> */}
      <div>
        {games.map((game) => (
          <Item key={game.name} name={game.name} image={game.image} price={game.price} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;