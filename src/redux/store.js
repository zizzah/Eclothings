import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import postsSlice from "./postsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    posts:postsSlice
  },
});
