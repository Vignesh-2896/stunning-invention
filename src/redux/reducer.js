import * as actionTypes from "./actionTypes";

const initialState = {
  cartData: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART_DATA:
      return {
        ...state,
        cartData: action.payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
