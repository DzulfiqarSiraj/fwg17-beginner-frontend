import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            //state.data = [...state.data, action.payload]
            const data = state.data
            data.push(action.payload)
            state.data = data
        },
        emptyCart: () => {
            return initialState
        }
    }
})

export const {addToCart, emptyCart} = cart.actions
export default cart.reducer