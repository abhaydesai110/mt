import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { logIn, profile, register } from "../Services/AuthServices";

const getDefaultUser = () => {
  let user = localStorage.getItem("user");
  if (user && user !== "undefined") {
    return JSON.parse(user);
  } else {
    return null;
  }
};
const initialState = {
  user: localStorage.getItem("user") ? getDefaultUser() : {},
  profile: {},
};

export const registration = createAsyncThunk(
  "auth/register",
  async (payload) => {
    return await register(payload);
  }
);
export const logInUser = createAsyncThunk("auth/login", async (payload) => {
  return await logIn(payload);
});
export const getProfile = createAsyncThunk("auth/profile", async () => {
  return await profile();
});

// export const forgotPassword = createAsyncThunk(
//   "auth/forgotpassword",
//   async (payload) => {
//     return await forgotPass(payload);
//   }
// );

// export const newPassword = createAsyncThunk(
//   "auth/newpassword",
//   async (payload) => {
//     return await newPass(payload);
//   }
// );

// export const otpVerify = createAsyncThunk("auth/otp", async (payload) => {
//   return await otp(payload);
// });

// export const resendOtpVerify = createAsyncThunk(
//   "auth/resendOtp",
//   async (payload) => {
//     return await resendOtp(payload);
//   }
// );

// export const logOutUser = createAsyncThunk("auth/logOut", async () => {
//   return await logOut();
// });

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      localStorage.clear();
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.fulfilled, (state, action) => {
      let user = action?.payload?.data?.Data;
      state.user = user ? user : {};
      // localStorage.setItem("user", user ? JSON.stringify(user) : undefined);
    });
    // builder.addCase(getProfile.fulfilled, (state, action) => {
    //   let profile = action?.payload?.data?.Data;
    //   state.profile = profile;
    //   // localStorage.setItem("user", user ? JSON.stringify(user) : undefined);
    // });
    // builder.addCase(forgotPassword.fulfilled, (state, action) => {
    //   state.key = action?.payload?.data?.Data?.key;
    // });
    // builder.addCase(registration.fulfilled, (state, action) => {
    //   state.key = action?.payload?.data?.Data?.key;
    // });
  },
});
export default authSlice.reducer;

export const { removeToken } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectProfile = (state) => state.auth.profile;

export const useUser = () => {
  const user = useSelector(selectUser);
  localStorage.setItem("user", user ? JSON.stringify(user) : undefined);
  return useMemo(() => ({ user }), [user]);
};

export const userProfile = () => {
  const profile = useSelector(selectProfile);
  return useMemo(() => {
    ({ profile });
  }, [profile]);
};
