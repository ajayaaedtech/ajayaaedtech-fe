// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slice/exampleSlice";
import authReducer from "./slice/authSlice"; // ✅ import the auth slice
import courseReducer from "./slice/courseSlice";


export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer, // ✅ add auth slice reducer
    courses: courseReducer,

  },
});
