import * as actionTypes from "./actionTypes";

export const SetCartData = (payload) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: actionTypes.SET_CART_DATA,
      payload,
    });
  };
};
