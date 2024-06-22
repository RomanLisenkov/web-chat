import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCheckAuth,
  fetchLogin,
  fetchLogout,
  fetchRegistration,
} from "./ActionCreators";

interface UserState {
  login: string | null;
  id: number | null;
  isLoading: boolean;
  isAuth: boolean;
  error: string | null | undefined;
}

const initialState: UserState = {
  login: null,
  id: null,
  isLoading: false,
  isAuth: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistration.fulfilled, (state, action) => {
        console.log(action.payload);
        state.login = action.payload.user.login;
        state.id = action.payload.user.id;
        state.isAuth = true;
        state.isLoading = false;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(fetchRegistration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegistration.rejected, (state, action) => {
        console.log(action.error);
        state.error = action.error.message;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.login = action.payload.user.login;
        state.id = action.payload.user.id;
        state.isAuth = true;
        state.isLoading = false;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
       
        console.log(action);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.login = null;
        state.id = null;
        state.isAuth = false;
        state.isLoading = false;
        localStorage.removeItem("token");
      })
      .addCase(fetchLogout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        console.log(action.error);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCheckAuth.fulfilled, (state, action) => {
        console.log(action.payload);
        state.login = action.payload.user.login;
        state.id = action.payload.user.id;
        state.isAuth = true;
        state.isLoading = false;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(fetchCheckAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCheckAuth.rejected, (state, action) => {
        console.log(action.error);
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
