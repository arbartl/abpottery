import React, { createContext, useContext, useState } from "react";

export const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prevState) => prevState - 1);
  };

  //Add product to cart
  const onAdd = (product, quantity) => {
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    setQuantity(1);
  };

  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
