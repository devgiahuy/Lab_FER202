import React from "react";
import { RouterProvider } from "react-router-dom";
import { store } from "../store/selectItemStore";
import { router } from "../router";
import { Provider } from "react-redux";

export default function AppProvider() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
