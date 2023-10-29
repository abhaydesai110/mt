import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
const reducer = combineReducers({
  // auth: userSlice.reducer,
});
const store = configureStore({
  reducer,
});
export default store;
