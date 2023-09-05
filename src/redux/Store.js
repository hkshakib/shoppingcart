import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

export const Store = configureStore({
  reducer: {
    Cart: cartSlice,
  },
});
