import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import "../Navbar.css";
import ParamComp from "../components/ParamComp";
import Courses from "../components/courses";
import Mocktests from "../components/Mocktests";
import Reports from "../components/reports";
import Notfound from "../components/Notfound";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element : <div>
                <NavBar/>
                <Home/>
            </div>
        },
        {
            path: "/about",
            element : <div>
                <NavBar/>
                <About/>
            </div>
        },
        {
            path: "/dashboard",
            element: <div>
                <NavBar/>
                <Dashboard/>
            </div>,
            // Nested Routing
            children :[
                {
                    path: 'courses',
                    element: <Courses/>
                },
                {
                    path: 'mocktests',
                    element: <Mocktests/>
                },
                {
                    path: 'reports',
                    element: <Reports/>
                }
            ]
        },
        {
            // Route Parameter
            path: "/student/:id",
            element : <div>
                <NavBar/>
                <ParamComp/>
            </div>
        },
        {
            path : "*",
            element : <Notfound/>
        }
    ]
);

const Routing = () => {

return <div>
    <RouterProvider router={router}/>
</div>

}

export default Routing;