import { createBrowserRouter } from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage'
import RegistrationForm from "../pages/signUpPage/signUpPage";
import NoPage from '../pages/noPage/noPage'





export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/signup',
        element: <RegistrationForm/>
    },
 {
        path: '/*',
        element: <NoPage/> 
    },

]);