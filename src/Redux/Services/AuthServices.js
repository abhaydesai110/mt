import { LOGIN, PROFILE, REGISTER } from "../../Apis/ConstApis";
import authHeader from "./AuthHeadres";
import { apiInstance } from "./AxiosServices";

export const register = (payload) => {
  return apiInstance.post(REGISTER, payload);
};
export const logIn = (payload) => {
  return apiInstance.post(LOGIN, payload);
};
export const profile = () => {
  return apiInstance.get(PROFILE, { headers: authHeader() });
};

// export const forgotPass = (payload) => {
//   return apiInstance.post(FORGET_PASSWORD, payload);
// };

// export const newPass = (payload) => {
//   return apiInstance.post(NEW_PASSWORD, payload);
// };

// export const otp = (payload) => {
//   return apiInstance.post(OTP, payload);
// };

// export const resendOtp = (payload) => {
//   return apiInstance.post(RESEND_OTP, payload);
// };

// export const logOut = () => {
//   return apiInstance.post(LOGOUT, {}, { headers: authHeader() });
// };
