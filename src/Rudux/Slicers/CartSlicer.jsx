import { createSlice } from "@reduxjs/toolkit";

const CartSlicer = createSlice({
    name: "cart",
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, action) => {
            const dataExist = state.data.find((item) => item.id === action.payload.id);
            if (dataExist) {
                state.data = state.data.map((item) =>
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                state.data.push(action.payload);
            }
        },
        removeCart: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const { addToCart, removeCart } = CartSlicer.actions;
export default CartSlicer.reducer;
