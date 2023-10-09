import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";


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
                path: '/add-jewelry',
                element: <AddProduct/>
            },
        
         
        ]
    },
]);


export default router;
