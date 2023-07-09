import React, { useEffect, useState } from "react";
import "./ItemListContainer.css"

function ItemListContainer(props) {
    
  return (
    <main>
      <h1 className="">{props.greeting}</h1>
    </main>
  );
}

export default ItemListContainer;