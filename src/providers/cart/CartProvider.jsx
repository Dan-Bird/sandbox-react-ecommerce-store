import React, { createContext, useState, useEffect } from 'react';
import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  toggleHidden: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));

  const setLocalItems = cartItems => {
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('local called');
    console.log(`cartItems: `, cartItems);
  };

  const getLocalItems = () =>
    JSON.parse(window.localStorage.getItem('cartItems'));

  useEffect(() => {
    const localItems = getLocalItems();
    if (localItems?.length) {
      setCartItemsCount(getCartItemsCount(localItems));
      setCartTotal(getCartTotal(localItems));
      setCartItems(localItems);
    }
  }, []);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
    setLocalItems(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        cartItemsCount,
        cartTotal,
        toggleHidden,
        addItem,
        removeItem,
        clearItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
