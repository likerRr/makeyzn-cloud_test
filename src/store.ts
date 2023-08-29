import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./features/SendDataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  devTools: true,
});
