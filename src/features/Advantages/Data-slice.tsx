import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InfoValues } from "../../components/Step1";
import { FormValues } from "../../components/Step2";
import { MainValues } from "../../pages/MainPage";
import { AboutValues } from "../../components/Step3";

const initialState = {
  phone: "",
  email: "",
  nickname: "",
  name: "",
  surname: "",
  sex: "",
  advntgs: [{ advntg: "" }, { advntg: "" }, { advntg: "" }],
  checkboxes: [],
  radio: "",
  about: "",
} as any;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<FormValues>) => {
      state.advntgs = action.payload.advntgs;
      state.checkboxes = action.payload.checkboxes;
      state.radio = action.payload.radio;
    },
    addMain: (state, action: PayloadAction<MainValues>) => {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    addInfo: (state, action: PayloadAction<InfoValues>) => {
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.sex = action.payload.sex;
    },
    addAbout: (state, action: PayloadAction<AboutValues>) => {
      state.about = action.payload.about;
    },
  },
});

export const { addData, addMain, addInfo, addAbout } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
