import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Navlink from "../Pages/Navlink";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("heroData.json"),
      },
      {
        path: "/News",
        element: <Navlink title={"news"}></Navlink>,
      },
      {
        path: "/Destination",
        element: <Navlink title={"Destination"}></Navlink>,
      },
      {
        path: "/Blog",
        element: <Navlink title={"Blog"}></Navlink>,
      },
      {
        path: "/Contact",
        element: <Navlink title={"Contact"}></Navlink>,
      },
    ],
  },
]);

export default router;
