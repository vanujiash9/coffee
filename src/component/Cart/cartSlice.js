import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img, stock } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity < stock) {
          existingItem.quantity += 1;
        } else {
          state.notification = {
            type: "error",
            message: "Số lượng sản phẩm trong kho đã hết",
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
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity < item.stock) {
          item.quantity += 1;
        } else {
          state.notification = {
            type: "error",
            message: "Số lượng sản phẩm trong kho đã hết",
          };
        }
      }
    },
    decrease: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    resetNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { addToCart, increase, decrease, removeCart, resetNotification } =
  cartSlice.actions;

export default cartSlice.reducer;
