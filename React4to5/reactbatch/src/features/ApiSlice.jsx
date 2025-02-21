import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addData } from "./CrudSlice";

export const fetchApi = createAsyncThunk("fetchApi", async ()=>{
    let response = await axios.get("https://fakestoreapi.com/products");
    let res = response.data
    return res;
})

export const deleteData = createAsyncThunk("sda", async ()=>{
    let response = await axios.get("https://fakestoreapi.com/products");
    let res = response.data
    return res;
})


export const apiSlice = createSlice({
    name : "apiSlice",
    initialState : { data: [], loading : true},
    reducers : {},
    extraReducers : (builder=>{
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.loading = true
        }),
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(addData,(state,action)=>{
            state
        })
    })
})

export default apiSlice.reducer