import { configureStore } from "@reduxjs/toolkit";
import citasReducer from "../slices/citas/citasSlice";

export const store = configureStore({
  reducer: {
    citas: citasReducer,
  },
});
