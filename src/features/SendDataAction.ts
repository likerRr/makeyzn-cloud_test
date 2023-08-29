import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendData = createAsyncThunk(
  "data/sendData",
  async function (_, { rejectWithValue, getState }) {
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
      return await response.json();
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
