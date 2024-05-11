import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import AllSupllies from "../pages/All Supplies/AllSupllies";
import SingleSupplyDetails from "../pages/Single Supply Details/SingleSupplyDetails";



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
            }
        ]
    }
])