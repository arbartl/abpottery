import React, { createContext, useContext, useState } from "react";

export const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
    setTotalQuantity((prevTotal) => prevTotal + quantity);
    setQuantity(1);
  };

  //Remove product from cart
  const onRemove = (product) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.slug !== product.slug)
    );
    setTotalQuantity((prevTotal) => prevTotal - product.quantity);
  };

  const cartSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
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
        onRemove,
        cartSubtotal,
        totalQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
