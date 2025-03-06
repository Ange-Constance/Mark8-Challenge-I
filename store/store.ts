import { configureStore } from "@reduxjs/toolkit";
import savedProductsReducer from "./endpoints/savedProductsSlice";
import cartReducer from "./endpoints/cardSlice";
import { baseApi } from "./endpoints/base-api";

export const store = configureStore({
  reducer: {
    savedProducts: savedProductsReducer,
    cart: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer, // Include API if using RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;