import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Joblist from "./pages/Joblist.jsx";
import Login from "./pages/Login.jsx";
import Add from "./pages/Add.jsx";
import Detail from "./pages/Detail.jsx";
import Edit from "./pages/Edit.jsx";
import CompanyList from "./pages/CompanyList.jsx";
import Register from "./pages/Register.jsx";

function authen() {
  const access_token = localStorage.access_token;
  if (!access_token) { //token bisa diganti
    throw redirect(`/login`);
  }
  return null;
}

function authLogin() {
  const access_token = localStorage.access_token;
  if (access_token) {
    throw redirect(`/`);
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: authLogin,
  },
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Joblist />,
        loader: authen,
      },
      {
        path: "/add",
        element: <Add />,
        loader: authen,
      },
      {
        path: "/details/:id",
        element: <Detail />,
        loader: authen,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
        loader: authen,
      },
      {
        path: "/companies",
        element: <CompanyList />,
        loader: authen,
      },
      {
        path: "/register",
        element: <Register />,
        loader: authen,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);