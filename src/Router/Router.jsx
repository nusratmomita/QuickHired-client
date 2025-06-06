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
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewTotalApplications from "../Pages/ViewTotalApplications/ViewTotalApplications";

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
                path: "/myPostedJobs",
                element: <PrivateRoute> <MyPostedJobs></MyPostedJobs> </PrivateRoute>
            },
            {
                path: "/applications/:job_id",
                loader: ({params}) => fetch(`http://localhost:8000/applications/job/${params.job_id}`),
                element: <PrivateRoute> <ViewTotalApplications></ViewTotalApplications></PrivateRoute>
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

