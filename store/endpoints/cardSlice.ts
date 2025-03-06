import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types"; // Assuming Product interface is imported

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [], // Default to an empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string | number; increment: boolean }>
    ) => {
      const { id, increment } = action.payload;
      const product = state.cartItems.find((item) => item.id === id);
      if (product) {
        if (increment) {
          product.quantity += 1; // Increase the quantity
        } else if (product.quantity > 1) {
          product.quantity -= 1; // Decrease the quantity but not below 1
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
