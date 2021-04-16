import { cartActionType } from './cartActionTypes';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.id
        ),
      };
    case cartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionType.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case cartActionType.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
