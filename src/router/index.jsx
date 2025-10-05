import { createBrowserRouter } from "react-router-dom";
import App from "../app/App.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import DetailPage from "../pages/DetailPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "detail/:id", element: <DetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "contact", element: <NotFound /> },
      { index: true, element: <HomePage /> },
    ],
  },
]);
