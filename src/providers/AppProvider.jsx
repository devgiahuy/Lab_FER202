import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "../store/selectItemStore";
import { router } from "../router";

export default function AppProvider() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
