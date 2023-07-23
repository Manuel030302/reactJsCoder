import React, {useState, useEffect} from "react";
import './ItemCount.css';

function ItemCount(props) {
  const {stock, initial} = props;
  const [counter, setCounter] = useState(1);
  useEffect(() =>{
    if(stock === 0) {
      setCounter(0)
    }
    if(initial) {
      if(initial <= stock && initial <= 0) {
        setCounter(initial)
      }
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
    <div>
      <button onClick={onAdd}>+</button>
      <strong>{counter}</strong>
      <button onClick={onRemove}>-</button>
    </div>
  );
}

export default ItemCount;