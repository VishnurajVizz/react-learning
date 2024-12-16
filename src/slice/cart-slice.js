import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  cart: [{ title: "Test Item", quantity: 3, total: 18, price: 6 }],
};

// const initialCartItem = {
//   quantity: 0,
//   price: 0,
//   title: "",
// };

const cartItemSlice = createSlice({
  name: "CartItem",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({
        id: Date.now(),
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });
    },
    increaseItemCount: (state, action) => {
      console.log(state.cart);

      state.cart = state.cart.map((item) => {
        return item.title === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.total + item.price,
            }
          : item;
      });
    },
    decreaseItemCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item.title === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.total - item.price,
            }
          : item;
      });
    },
  },
});

export const { addToCart, increaseItemCount, decreaseItemCount } =
  cartItemSlice.actions;
export default cartItemSlice.reducer;
