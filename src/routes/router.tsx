import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import AllSupllies from "../pages/All Supplies/AllSupllies";



export const router = createBrowserRouter([
    {
        path : '/' , 
        element : <App />,
        children : [
            {
                path : 'home',
                // element : <Home />
                index : true
            },
            {
                path : 'allSupllies',
                element : <AllSupllies />
            }
        ]
    }
])