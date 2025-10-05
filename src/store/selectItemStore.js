import { configureStore } from "@reduxjs/toolkit";
import selectedOrchidReducer from "../features/selectOrchidSlice";

const STORAGE_KEY = "orchidStore"; // key để lưu vào localStorage

// 🪄 1. Hàm đọc dữ liệu từ localStorage
const loadState = () => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

// 🪄 2. Hàm lưu state vào localStorage
const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
};

// 🪄 3. Tạo store
const preloadedState = loadState();
export const store = configureStore({
  reducer: {
    selectedOrchid: selectedOrchidReducer,
  },
  preloadedState,
});

// 🪄 4. Lắng nghe thay đổi store → lưu lại vào localStorage
store.subscribe(() => {
  saveState({
    selectedOrchid: store.getState().selectedOrchid,
  });
});
