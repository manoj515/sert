import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice';

export const getTotal=(cart)=>{
    return(
        cart.reduce((amount,item)=>parseInt(item.price)+ amount,0)
    )
}

const  store=configureStore({
    reducer:{
       cart:cartSlice
    }
})

export default store;