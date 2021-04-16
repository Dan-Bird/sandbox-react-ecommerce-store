import { cartActionType } from './cartActionTypes';

export const toggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: cartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionType.CLEAR_CART,
});

export const setCartFromFirebase = cartItems => ({
  type: cartActionType.SET_CART_FROM_FIREBASE,
  payload: cartItems,
});

export const updateCartInFirebase = () => ({
  type: cartActionType.UPDATE_CART_IN_FIREBASE,
});
