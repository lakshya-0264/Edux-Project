
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import LandingScreen from "./Components/LandingScreen";
import LoginScreen from "./Components/LoginScreen";
import SignUpScreen from "./Components/SignUpScreen";
import Error from "./Components/Error";
import Profile from "./Components/Profile";


const AppLayout = () => {
    return(
        <div>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element: <LandingScreen/>
            },
            {
                path: "/login",
                element: <LoginScreen/>
            },
            {
                path: "/signup",
                element: <SignUpScreen/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router = {appRouter}/>)