import { createSlice } from "@reduxjs/toolkit";

// 🎯 1. State ban đầu
const initialState = {
  current: null, // sẽ lưu object orchid khi user click
};

// 🎯 2. Tạo slice
const selectedOrchidSlice = createSlice({
  name: "selectedOrchid",
  initialState,
  reducers: {
    // Cập nhật orchid đang được chọn
    setSelectedOrchid: (state, action) => {
      state.current = action.payload;
    },
    // Xóa lựa chọn hiện tại
    clearSelectedOrchid: (state) => {
      state.current = null;
    },
  },
});

// 🎯 3. Xuất action và reducer
export const { setSelectedOrchid, clearSelectedOrchid } =
  selectedOrchidSlice.actions;
export default selectedOrchidSlice.reducer;

// (Tùy chọn) selector giúp đọc nhanh
export const selectCurrentOrchid = (state) => state.selectedOrchid.current;
