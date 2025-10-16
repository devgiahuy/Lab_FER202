import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const selectedOrchidSlice = createSlice({
  name: "selectedOrchid",
  initialState,
  reducers: {
    setSelectedOrchid: (state, action) => {
      state.current = action.payload;
    },
    clearSelectedOrchid: (state) => {
      state.current = null;
    },
  },
});

export const { setSelectedOrchid, clearSelectedOrchid } =
  selectedOrchidSlice.actions;

export default selectedOrchidSlice.reducer;

export const selectCurrentOrchid = (state) => state.selectedOrchid.current;
