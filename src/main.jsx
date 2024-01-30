import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GuestLayout from "./layouts/Guest.jsx";
import ErrorPage from "./pages/Error.jsx";

import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPost from "./pages/BlogPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/BlogPost",
        element: <BlogPost />,
      },

      //   {
      //     path: "*",
      //     element: <p>404 Error !</p>,
      //   },
    ],
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
