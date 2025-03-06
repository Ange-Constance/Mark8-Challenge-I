// features/savedProductsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Product {
  id: string | number;
  name: string;
  unitPrice: number;
  thumbnail: string[];
}

interface SavedProductsState {
  savedProducts: Product[];
}

const initialState: SavedProductsState = {
  savedProducts: [],
};

const savedProductsSlice = createSlice({
  name: "savedProducts",
  initialState,
  reducers: {
    toggleProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const exists = state.savedProducts.find((p) => p.id === product.id);

      if (exists) {
        state.savedProducts = state.savedProducts.filter((p) => p.id !== product.id);
      } else {
        state.savedProducts.push(product);
      }
    },
  },
});

export const { toggleProduct } = savedProductsSlice.actions;
export default savedProductsSlice.reducer;
