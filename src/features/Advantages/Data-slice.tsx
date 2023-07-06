import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InfoValues } from "../../components/Step1";
import { FormValues } from "../../components/Step2";
import { MainValues } from "../../pages/MainPage";
import { AboutValues } from "../../components/Step3";

export const sendData = createAsyncThunk(
  "data/sendData",
  async function (_, { rejectWithValue, dispatch, getState }) {
    try {
      const response = await fetch(
        "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: getState().data.phone,
            email: getState().data.email,
            nickname: getState().data.nickname,
            name: getState().data.name,
            surname: getState().data.surname,
            sex: getState().data.sex,
            advntgs: getState().data.advntgs.map((e) => e.advntg),
            checkboxes: getState().data.checkboxes,
            radio: Number(getState().data.radio),
            about: getState().data.about,
          }), // отредактировать типы данных 
        }
      );
      if (!response.ok) {
        throw new Error("Can't send data to server");
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.message);
    }
  }
);

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
  status: "",
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
  extraReducers: {
    [sendData.fulfilled]: (state, action) => {
      console.log("Отправлено!");
      state.status = "fulfilled";
    },
    [sendData.rejected]: (state, action) => {
      console.log("rejected!");
      state.status = "rejected";
    },
  },
});

export const { addData, addMain, addInfo, addAbout } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
