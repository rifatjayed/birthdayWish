import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home.jsx";
import BirthdaySurprise from "./BirthdaySurprise.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Surprice from "./surprice.jsx";
import Page3 from "./Page3.jsx";
import No from "./No.jsx";
import Lastpage from "./Lastpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <BirthdaySurprise></BirthdaySurprise>,
      },
      {
        path: "/surprice",
        element: <Surprice></Surprice>,
      },
      ,
      {
        path: "/page3",
        element: <Page3></Page3>,
      },
      ,
      {
        path: "/no",
        element: <No></No>,
      },
      {
        path: "/lastpage",
        element: <Lastpage></Lastpage>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
