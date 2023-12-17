import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../loyouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Menu from "../pages/menu/Menu";

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
    ],
  },
]);
