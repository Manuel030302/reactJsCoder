import { useState, createContext } from "react";

const cartContext = createContext();

// Custom provider
// CartContextProvider (custom componente) !== cartContext.Provider (componente default)

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(game, count) {
    //const newCart = [...cart];
    const newCart = cart.map((item) => item);
    const newItemInCart = { count, ...game };
    newCart.push(newItemInCart);
    setCart(newCart);
    console.log(cart)
    //setCart( [...cart, { ...product, count}])
  }

  function removeItem(id) {
    // Filtrar los elementos del carrito para excluir el elemento con el id especificado
    const newCart = cart.filter((item) => item.id !== id);
    // Actualizar el estado del carrito con el nuevo arreglo
    setCart(newCart);

    return null;
  }

  function clearCart() {
    setCart([])

    return null;
    // vaciar el carrito
  }

  function getTotalItemsInCart() {
    // reduce()
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

/*   function getItem(id) {
    //find item

    return cart[0];
  } */

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };