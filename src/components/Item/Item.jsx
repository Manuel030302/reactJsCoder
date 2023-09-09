import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  const {id, name, price, discount, image, rate} = props
  let stars = ''
  let starsLeft = ''

  for (let i = 1; i <= 5; i++) {
    if(i <= Math.round(rate/2)) {
      stars = `${stars}★`
    }
  }

  for (let i = Math.round(rate/2); i < 5; i++) {
    if(i <= Math.round(rate/2)) {
      starsLeft = `${starsLeft}★`
    }
  }

  return (
    
    <Link to={`/item/${id}`}>
      <div className="card max-w-xs rounded-2xl shadow-2xl shadow-black opacity-100 hover:shadow-white transition duration-700 hover:duration-700 hover:scale-105 hover:ease-in-out">
        <h3 className="text-center font-mono text-xl font-black text-slate-50">{name}</h3>
        <img src={image} alt="" className="px-3 bg-black/50 border-y-4 border-amber-200/50"/>
        {
          discount ?
            <div className="px-3">
              <strong className="text-lg text-white">Price: <span className="line-through">${price}</span></strong>
              <span className="mx-5 text-lg text-white">➠</span>
              <strong className="text-lg text-white">${(price-(price*discount)).toFixed(2)}</strong>

              <div className="flex flex-row-reverse justify-between">
                <strong className="object-right p-1 rounded-md border-2 border-lime-400 text-lg text-lime-400">-{discount*100}%</strong>
                <div>
                  <span className="text-yellow-300">{stars}</span>
                  <span className="text-gray-400">{starsLeft}</span>
                </div>
              </div>
            </div>
          :
            <div className="px-3">
              <strong className="text-lg text-white">${price}</strong>
              <div>
                <span className="text-yellow-300">{stars}</span>
                <span className="text-gray-400">{starsLeft}</span>
              </div>
            </div>
        }
        <div className="p-2">
          <button className="w-full bg-gradient-to-b from-lime-300 to-teal-600 hover:duration-200 hover:border-2 border-yellow-300 font-mono text-lg font-black text-white hover:text-yellow-300">Ver Juego</button>
        </div>
      </div>
    </Link>
  );
}

export default Item;