import { cartActionType } from './cartActionTypes';

export const toggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});
