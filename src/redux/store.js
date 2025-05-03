// redux store.js
import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./shoppingSlice";

const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
  },
});

export default store;
// export type RootStore = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
