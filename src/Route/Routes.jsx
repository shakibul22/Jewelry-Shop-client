import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/Login/SignIn";


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
                element: <AddProduct/>
            },
        
         
        ]
    },
]);


export default router;
