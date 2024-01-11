import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.data = [...state.data, action.payload]
        }
    }
})

export const {addToCart} = cart.actions
export default cart.reducer