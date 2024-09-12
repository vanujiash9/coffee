// src/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // This will hold the items in the cart
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
                    state.items = state.items.filter(item => item.id !== action.payload);
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
