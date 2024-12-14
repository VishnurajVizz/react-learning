import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({ id: Date.now(), item: action.payload });
    },
    deleteFrmCart: (state, action) => {
      state.cart.filter((cart) => cart.id != action.payload);
    },
  },
});

export const { addToCart, deleteFrmCart } = cartSlice.actions;
export default cartSlice.reducer;
