import { configureStore } from "@reduxjs/toolkit";
import selectedOrchidReducer from "../features/selectOrchidSlice";

const STORAGE_KEY = "orchidStore"; // key để lưu vào localStorage

const loadState = () => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    selectedOrchid: selectedOrchidReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    selectedOrchid: store.getState().selectedOrchid,
  });
});
