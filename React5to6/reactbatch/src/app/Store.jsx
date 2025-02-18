import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";

export const store = configureStore({
  reducer: {
    counterReducer: CounterSlice,
  },
});
