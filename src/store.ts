import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./features/Advantages/Data-slice";


export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
    devTools: true,
});