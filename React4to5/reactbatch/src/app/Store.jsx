import { configureStore } from "@reduxjs/toolkit";
import counter  from "../features/Slice";


export const store = configureStore({
    reducer : {
        counterReducer : counter
    }
})