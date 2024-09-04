// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/createSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
