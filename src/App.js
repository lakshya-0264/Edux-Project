
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import LandingScreen from "./components/LandingScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import Error from "./components/Error";
import Profile from "./components/Profile";


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