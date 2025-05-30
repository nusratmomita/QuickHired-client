import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import { Component } from "react";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJobs from "../Pages/AddJobs/AddJobs";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/job/:id",
                loader: ({params}) => fetch(`http://localhost:8000/jobs/${params.id}`),
                Component: JobDetails
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute> <JobApply></JobApply> </PrivateRoute>
            },
            {
                path: "/myApplications",
                element: <PrivateRoute> <MyApplications></MyApplications> </PrivateRoute>
            },
            {
                path: "/addJobs",
                Component: AddJobs
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    }
])

