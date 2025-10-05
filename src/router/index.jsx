import { createBrowserRouter } from "react-router-dom";
import App from "../app/App.jsx";
import About from "../pages/AboutPage";
import Contact from "../pages/ContactPage";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import HomePage from "../pages/Homepage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/",
        children: [
          { index: true, element: <HomePage /> },
          { path: "detail/:id", element: <ProductDetail /> },
        ],
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
