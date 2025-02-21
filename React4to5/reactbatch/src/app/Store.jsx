import { configureStore } from "@reduxjs/toolkit";
import Slice from "../features/Slice";
import  crudSlice  from "../features/CrudSlice";
import  apiSlice  from "../features/ApiSlice";

export const store = configureStore({
  reducer: {
    counterReducer: Slice,
    crudReducer : crudSlice,
    apiReducer : apiSlice
  },
});
