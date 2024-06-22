import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/userApi";

export const fetchRegistration = createAsyncThunk(
  "user/registration",
  async ({ login, password }: { login: string; password: string }) =>
    api.registration({ login, password }),
);

export const fetchLogin = createAsyncThunk(
  "user/login",
  async ({ login, password }: { login: string; password: string }) => {
    const response = await api.login({ login, password });
    console.log(response);

    return response;
  },
);

export const fetchLogout = createAsyncThunk("user/logout", async () =>
  api.logout(),
);

export const fetchCheckAuth = createAsyncThunk("user/checkauth", async () =>
  api.checkAuth(),
);
