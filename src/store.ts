import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./features/Data-slice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  devTools: true,
});
