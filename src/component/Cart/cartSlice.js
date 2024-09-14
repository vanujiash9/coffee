import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';  // Add SweetAlert for dialog

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          title,
          price,
          img,
          quantity: 1,
        });
      }
    },
    increase: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);

      if (item) {
        if (item.quantity === 1) {
          // Trigger SweetAlert2 confirmation
          Swal.fire({
            title: 'Bạn có chắc muốn xóa sản phẩm này không?',
            text: "Sản phẩm sẽ được xóa khỏi giỏ hàng!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy'
          }).then((result) => {
            if (result.isConfirmed) {
              // If confirmed, remove the item
              state.items = state.items.filter(item => item.id !== action.payload);
            }
          });
        } else {
          item.quantity -= 1;
        }
      }
    },
    removeCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, increase, decrease, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
