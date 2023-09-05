import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
