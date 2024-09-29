import React from "react";

const CartContext = React.createContext({
  cartItem: [],
  setCartItem: () => {},
});

export const CartContextProvider = CartContext.Provider;
export const CartContextConsumer = CartContext.Consumer;

export default CartContext;
