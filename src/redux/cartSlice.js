import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.quantity * item.price;
        state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
