import { createBrowserRouter } from "react-router-dom";
import App from "../app/App.js";
import HomePage from "../pages/HomePage.js";
import AboutPage from "../pages/AboutPage.js";
// import NotFound from "../pages/NotFound.jsx";
import ContactPage from "../pages/ContactPage.js";
import DetailPage from "../pages/DetailPage.js";
import NaturalPage from "../pages/Natural.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "home/detail/:id", element: <DetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "natural", element: <NaturalPage /> },
      { path: "natural/detail/:id", element: <DetailPage /> },
    ],
  },
]);
