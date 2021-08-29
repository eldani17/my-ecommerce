import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    const product = cart.find((itemCart) => itemCart.item.id === item.id);
    if (product) {
      product.quantity += quantity;
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = (id) => {
    const currentCart = cart.filter((product) => product.item.id !== id);
    setCart(currentCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const exist = cart.find((itemCart) => itemCart.item.id === id);
    return exist ? true : false;
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, isInCart, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};
