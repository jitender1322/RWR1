import { configureStore } from "@reduxjs/toolkit";
import Slice from "../features/Slice";
import  crudSlice  from "../features/CrudSlice";

export const store = configureStore({
  reducer: {
    counterReducer: Slice,
    crudReducer : crudSlice
  },
});
