import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/userApi";
import axios from "axios";

export const fetchRegistration = createAsyncThunk(
  "user/registration",
  async ({ login, password }: { login: string; password: string }) => {
    try {
      const response = await api.registration({ login, password });
      return response;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.response?.data.message);
      } else {
        throw e;
      }
    }
  },
);

export const fetchLogin = createAsyncThunk(
  "user/login",
  async ({ login, password }: { login: string; password: string }) => {
    try {
      const response = await api.login({ login, password });

      return response;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.response?.data.message);
      } else {
        throw e;
      }
    }
  },
);

export const fetchLogout = createAsyncThunk("user/logout", async () => {
  try {
    const response = await api.logout();
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.response?.data.message);
    } else {
      throw e;
    }
  }
});

export const fetchCheckAuth = createAsyncThunk("user/checkauth", async () => {
  try {
    const response = await api.checkAuth();
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.response?.data.message);
    } else {
      throw e;
    }
  }
});
