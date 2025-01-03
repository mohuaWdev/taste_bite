import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/recipes",
        element: <Recipes />,
      },

      {
        path: "/test-page",
        element: <div>This is a test page</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
