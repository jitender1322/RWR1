
import { configureStore } from "@reduxjs/toolkit"
import counter from "../features/Slice"
import  crudSlice  from "../features/CrudSlice"
import  apiSlice  from "../features/ApiSlice"

export const store = configureStore({
    reducer : {
        counterReducer : counter,
        crudReducer : crudSlice,
        apiReducer : apiSlice
    }
})