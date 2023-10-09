import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/Login/SignIn";
import AllJewelry from "../Pages/AllJewelry/AllJewelry";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement:<ErrorPage/> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign-up',
                element: <SignUp/>
            },
            {
                path: '/sign-in',
                element: <SignIn/>
            },
            {
                path: '/add-jewelry',
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: '/all-jewelry',
                element: <AllJewelry/>
            },
          
        
         
        ]
    },
]);


export default router;
