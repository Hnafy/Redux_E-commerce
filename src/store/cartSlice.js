import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name:"getCart",
    initialState:[],
    reducers:{
            addProduct:(state,action)=>{
                let quantity = state.find((el)=>el.id === action.payload.id)
            if(quantity){
                quantity.quantity +=1
            }else{
                return [...state,{...action.payload ,quantity :1}]
            }
        },
        deleteProduct:(state,action)=>{
            return state.filter((el)=>el.id !== action.payload.id)
        },
    },
})

export const {addProduct,deleteProduct} = cartSlice.actions
export default cartSlice.reducer