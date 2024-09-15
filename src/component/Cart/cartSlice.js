import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  notification: null,
  confirmAction: null, // Flag to handle confirmation actions
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img, stock } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity < stock) {
          existingItem.quantity += 1;
        } else {
          state.notification = {
            type: 'error',
            message: 'Số lượng sản phẩm trong kho đã hết',
          };
        }
      } else {
        state.items.push({
          id,
          title,
          price,
          img,
          quantity: 1,
          stock,
        });
      }
    },
    increase: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity < item.stock) {
          item.quantity += 1;
        } else {
          state.notification = {
            type: 'error',
            message: 'Số lượng sản phẩm trong kho đã hết',
          };
        }
      }
    },
    decrease: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          // Trigger confirmation when attempting to decrease below 1
          state.confirmAction = {
            type: 'removeCart',
            payload: item.id,
          };
        } else {
          // Decrease the quantity as usual
          item.quantity -= 1;
        }
      }
    },
    
    removeCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.confirmAction = null; // Clear the confirmation action
    },
    resetNotification: (state) => {
      state.notification = null;
    },
    resetConfirmAction: (state) => {
      state.confirmAction = null;
    },
  },
});

export const { addToCart, increase, decrease, removeCart, resetNotification, resetConfirmAction } = cartSlice.actions;

export default cartSlice.reducer;
