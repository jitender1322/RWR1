import { configureStore } from "@reduxjs/toolkit";
import Slice from "../features/Slice";

export const store = configureStore({
  reducer: {
    counterReducer: Slice,
  },
});
