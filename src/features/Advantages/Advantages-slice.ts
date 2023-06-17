import { createSlice } from "@reduxjs/toolkit";

const advantagesSlice = createSlice({
    name: "@@advatnages",
    initialState: [],
    reducers: {
        addAdvantages: {},
        removeAdvantages: {},
    },
});

export const { addAdvantages, removeAdvantages, } = advantagesSlice.actions;

export const advantagesReducer = advantagesSlice.reducer;