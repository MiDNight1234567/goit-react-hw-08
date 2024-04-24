import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import {
  setToken,
  clearToken,
  requestGetCurrentUser,
  requestLogOut,
  requestSignIn,
  requestSignUp,
} from "../../services/userApi";

const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      console.log(data);
      return data;
    } catch (err) {
      console.log("not valid email or password");
      toast.error(
        "This email address is already in use. Please log in with this email or register using a different email address."
      );
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);
      return data;
    } catch (err) {
      toast.error(
        "You are not registered. Please register or log in with another email address."
      );
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const apiLogoutUser = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await requestLogOut();
    clearToken();
    return;
  } catch (err) {
    toast.error("We are experiencing server issues. Please try again later.");
    return thunkAPI.rejectWithValue(err.message);
  }
});

const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestGetCurrentUser();
      return data;
    } catch (err) {
      toast.error("We are experiencing server issues. Please try again later.");
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export { apiLoginUser, apiLogoutUser, apiRegisterUser, apiRefreshUser };
