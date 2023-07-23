import React, { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount.jsx";
import ItemList from "../ItemList/ItemList.jsx";


function ItemListContainer(props) {
    
  return (
    <main>
      <h1 className="">{props.greeting}</h1>
      <ItemCount stock={10} initial={1}/>
      <ItemList/>
    </main>
  );
}

export default ItemListContainer;