import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthSlices from "./Slices/AuthSlices";

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });
const reducer = combineReducers({
  auth: AuthSlices,
});
const store = configureStore({
  reducer,
});
export default store;
