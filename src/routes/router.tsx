import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import AllSupllies from "../pages/All Supplies/AllSupllies";
import SingleSupplyDetails from "../pages/Single Supply Details/SingleSupplyDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashBoard from "../pages/Dashboard/DashBoard";
import AllSuppliesDashboard from "../pages/Dashboard/Dashboard All Supplies/AllSuppliesDashboard";
import CreateSupply from "../pages/Dashboard/Create New Supply/CreateSupply";
import DashBoardHome from "../pages/Dashboard/DashBoardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "supplies",
        element: <AllSupllies />,
      },
      {
        path: "supplies/:id",
        element: <SingleSupplyDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path : '/dashboard',
    element : <DashBoard />,
    children : [
        {
          index : true ,
          element : <DashBoardHome />
        },
        {
            path: "supplies",
            element: <AllSuppliesDashboard />,
          },
          {
            path: "create-supply",
            element: <CreateSupply />,
          },
    ]
  },
]);
