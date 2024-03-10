import { configureStore } from "@reduxjs/toolkit";
import getProducts from "./productsSlice"
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        products:getProducts,
        cart:cartSlice,
    },
});
