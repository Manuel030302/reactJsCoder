import React from "react";
import "./ItemList.css"
import Item from "../Item/Item.jsx";

function ItemList(props) {
  const {catalogue} = props

  return (
    <div className="itemsContainer">
      <h2 className="text-3xl font-bold font-mono border-b-8 border-black border-double bg-gradient-to-r from-sky-200 to-emerald-200 shadow-2xl">Catalogo</h2>
      {/* <div className="item  p-10 grid-flow-col"> */}
      <div className="item p-10 justify-evenly bg-gradient-to-b from-transparent to-teal-950">
        {
          catalogue.length > 0 ? 
            catalogue.map((game) => (
              <Item key={game.nombre} 
              name={game.nombre} 
              image={game.urlImagen} 
              price={game.precio} 
              id={game.id} 
              discount={game.descuento} 
              rate={game.rate} 
              category={game.categoria}/>))
            :
              <h1>Estamos teniendo fallas tecnicas, intentalo en un rato</h1>
        }
      </div>
    </div>
  );
}

export default ItemList;