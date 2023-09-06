import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';

function ItemCount(props) {
  const {stock, onConfirm, toCart} = props;
  const [counter, setCounter] = useState(1);

  useEffect(() =>{
    if(stock === 0) {
      setCounter(0)
    }
  }, [])

  const onAdd = () => {  
    if(counter < stock) {
      setCounter(counter + 1)
    }
  };
  const onRemove = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  };
  
  return (
    <div className="itemCount">
      {
        stock > 0 ?
          <>
            <button onClick={onAdd} className="btnAdd">+</button>
            <strong>{counter}</strong>
            <button onClick={onRemove} className="btnRes">-</button>
            {
              !toCart ?
                <button onClick={() => onConfirm(counter)} className="btnConfirm">Agregar Al Carrito</button> 
              :
                <Link to='/cart'><button className="btnConfirm">Ir Al Carrito</button> </Link>
            }
          </>
        :
          <h4>Este producto ya no se encuentra disponible</h4>
      }
      
    </div>
  );
}

export default ItemCount;