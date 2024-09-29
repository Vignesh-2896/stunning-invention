import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/reducer";

export default configureStore({
  reducer: {
    cart: CartReducer,
  },
});
