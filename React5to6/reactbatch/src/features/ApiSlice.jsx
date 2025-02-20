import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const featchApi = createAsyncThunk("fetchApi", async ()=>{
    // let response = await axios.get("https://fakestoreapi.com/products");
    // let res = response.data
    // return res

    await axios.get("https://fakestoreapi.com/products").then((data)=>{
        return data.data
    })
})



export const apiSlice = createSlice({
    name : "apiSlice",
    initialState : {data : [],loading : true,count : 0},
    reducers : {},
    extraReducers : (builder=>{
        builder.addCase(featchApi.pending,(state,action)=>{
            state.loading = true
        }),
        builder.addCase(featchApi.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
    })
})

export default apiSlice.reducer