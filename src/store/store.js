import { configureStore } from "@reduxjs/toolkit";
import AddWatchListSlice from "./slices/AddWatchListSlice";

const store = configureStore({
  reducer: {
    AddFav: AddWatchListSlice,
  },
});

export default store;
