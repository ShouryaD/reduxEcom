import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:true,
    arr:[]
}

export const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        toggleDarkMode: (state)=>{
            !state.value
        },
        addToCart:(state)=>{
            state.arr.push()
        }
    }
})