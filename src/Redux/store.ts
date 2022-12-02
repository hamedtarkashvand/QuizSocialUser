import { configureStore } from "@reduxjs/toolkit";
import socialSlice from "./socialUser/slices/socialSlice";

const store = configureStore({
  reducer: {
    socialUser: socialSlice,
  },
});

export default store;
