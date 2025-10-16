import React from "react";
import { RouterProvider } from "react-router-dom";
import { store } from "../store/selectItemStore.js";
import { router } from "../router/index.js";
import { Provider } from "react-redux";

export default function AppProvider() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
