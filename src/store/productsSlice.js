import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "getProducts/fetchProducts",
    async () => {
        let data = await fetch('https://fakestoreapi.com/products');
        let response = await data.json();
        return response;
    }
);
export const getProducts = createSlice({
    name: "getProducts",
    initialState:[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default getProducts.reducer;