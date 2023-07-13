import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removefromCart:(state,action)=>{
            state.cart=state.cart.filter(x=>x._id !== action.payload._id)
        },
    }
})

export default cartSlice.reducer;
export const {addtoCart,removefromCart}=cartSlice.actions;