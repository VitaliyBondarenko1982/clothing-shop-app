import types from '../types';
import { addItemToCart } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case types.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;