import React from "react";
import "./ItemDetail.css"

function ItemDetail(props) {
  const {game} = props
  let stars = ''
  let starsLeft = ''

  for (let i = 1; i <= 5; i++) {
    if(i <= Math.round(game.rate/2)) {
      stars = `${stars}★`
    }
  }

  for (let i = Math.round(game.rate/2); i < 5; i++) {
    if(i <= Math.round(game.rate/2)) {
      starsLeft = `${starsLeft}★`
    }
  }

  return (
    <div className="flex justify-between p-5">
      <div className="font-mono text-white">
        <div>
          <h2 className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-yellow-50 to-lime-600 drop-shadow-2xl hover:duration-700 hover:scale-105">{game.nombre}</h2>
        </div>
        <div>
          <h3>${game.precio-(game.precio*game.descuento)}</h3>
          <p>Precio original:<span className="line-through">${game.precio}</span></p>
          <p>Descuento: {game.descuento}%</p>
        </div>
        <div>
          <p>Categoria: {game.categoria}</p>
          <strong className="text-yellow-300">{stars}</strong>
          <strong className="text-gray-400">{starsLeft}</strong>
        </div>
      </div>
      <div className="">
        <img src={game.urlImagen} alt="" />
      </div>
    </div>   
  )
}

export default ItemDetail;