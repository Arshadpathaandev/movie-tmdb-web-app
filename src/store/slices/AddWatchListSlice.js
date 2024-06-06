import { createSlice } from "@reduxjs/toolkit";

// Initial state for the slice
const initialState = {
  addwatchList: JSON.parse(localStorage.getItem("watchList")) || [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

// Create the slice
export const AddWatchListSlice = createSlice({
  name: "AddWatchList",
  initialState,
  reducers: {
    addCartWatchList: (state, action) => {
      state.addwatchList.push(action.payload);
      state.success = true;
      state.message = "Item added to watchlist";
      // LocalStorage update
      localStorage.setItem("watchList", JSON.stringify(state.addwatchList));
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearWatchList: (state) => {
      state.addwatchList = [];
      state.message = "Watchlist cleared";
      // LocalStorage clear
      localStorage.removeItem("watchList");
    },
  },
});

// Export the actions
export const { addCartWatchList, setLoading, setError, clearWatchList } =
  AddWatchListSlice.actions;

// Export the reducer
export default AddWatchListSlice.reducer;
