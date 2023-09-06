import { useState, createContext } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(game, count) {
    const newCart = [...cart];

    const itemInCart = newCart.find((item) => item.id === game.id)
    if(itemInCart){
      const index = newCart.findIndex((item) => item.id === game.id)
      newCart[index].count += count
    }else{
      const newItemInCart = { count, ...game };
      newCart.push(newItemInCart);
    }
    setCart(newCart);
  }

  function removeItem(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);

    return null;
  }

  function clearCart() {
    setCart([])

    return null;
  }

  function getTotalItemsInCart() {

    return cart.reduce((total, item) => total += item.count, 0)
  }

  function calcularTotalAPagar() {
    const totalPrice = cart.reduce((total, item) => { 
      if(!item.descuento) {
        return total + (item.precio * item.count) 
      } else{
        return total + ((item.precio-(item.precio*item.descuento))*item.count)
      }
    }, 0)

    return totalPrice
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        calcularTotalAPagar
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };