import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../loyouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/dashboard/Cart";
import Dashboard from "../loyouts/Dashboard";
import Users from "../pages/dashboard/Users";
import AddItems from "../pages/dashboard/AddItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // General user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      //Admin routes
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
