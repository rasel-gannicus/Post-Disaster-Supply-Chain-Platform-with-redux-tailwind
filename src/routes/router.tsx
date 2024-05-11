import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import AllSupllies from "../pages/All Supplies/AllSupllies";
import SingleSupplyDetails from "../pages/Single Supply Details/SingleSupplyDetails";
import Login from "../pages/Login/Login";



export const router = createBrowserRouter([
    {
        path : '/' , 
        element : <App />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : 'home',
                element : <Home />
            },
            {
                path : 'supplies',
                element : <AllSupllies />
            },
            {
                path : 'supplies/:id',
                element : <SingleSupplyDetails />
            },
            {
                path : 'login',
                element : <Login />
            },
        ]
    }
])