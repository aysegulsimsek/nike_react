import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name && item.selectedSize === action.payload.selectedSize
      );

      if (existingItemIndex !== -1) {
        // Eğer ürün zaten varsa, miktarını artır
        state.items[existingItemIndex].quantity += 1;
        state.totalPrice += state.items[existingItemIndex].price; // Mevcut ürünün fiyatını ekle
      } else {
        // Yeni bir ürün ekle
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price; // Yeni eklenen ürünün fiyatını ekle
      }
      
      // Toplam miktarı güncelle
      state.totalQuantity += 1;
    },
    
    // Sepetten ürün miktarını azalt
    decrementQuantity: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name && item.selectedSize === action.payload.selectedSize
      );

      if (existingItemIndex !== -1) {
        const item = state.items[existingItemIndex];
        if (item.quantity > 1) {
          // Eğer miktar 1'den büyükse, azalt
          item.quantity -= 1;
          state.totalPrice -= item.price; // Fiyatı düşür
          state.totalQuantity -= 1;      // Toplam miktarı düşür
        } else {
          // Miktar 1'se, ürünü sepetten çıkar
          state.items.splice(existingItemIndex, 1);
          state.totalPrice -= item.price;
          state.totalQuantity -= 1;
        }
      }
    },
     // Sepetten ürün miktarını azalt
     incrementQuantity: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name && item.selectedSize === action.payload.selectedSize
      );

      if (existingItemIndex !== +1) {
        const item = state.items[existingItemIndex];
        if (item.quantity >= 1) {
          item.quantity += 1;
          state.totalPrice += item.price; 
          state.totalQuantity += 1;      
        }
      }
    },

    removeFromCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name && item.selectedSize === action.payload.selectedSize
      );

      if (existingItemIndex !== -1) {
        const item = state.items[existingItemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;

        state.items.splice(existingItemIndex, 1);
      }
    },

    // Sepeti tamamen boşalt
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity,incrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
