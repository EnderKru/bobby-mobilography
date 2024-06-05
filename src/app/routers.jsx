import { createBrowserRouter } from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage'
import { SignUp } from "../pages/signUpPage/signUpPage";
import NoPage from '../pages/noPage/noPage'





export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
 {
        path: '/*',
        element: <NoPage/> 
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
]);