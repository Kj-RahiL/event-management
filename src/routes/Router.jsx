import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Login/LogIn";
import Register from "../Login/Register";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import ErrorELement from "../ErrorELement";
import PrivateRoute from "./PrivateRoute";
import BlogsCard from "../Pages/Blogs/BlogsCard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorELement></ErrorELement>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/service',
            element:<Service></Service>
        },
        {
            path:'/service/:id',
            loader:()=> fetch('events.json'),
            element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
            path:'/about',
            loader:()=>fetch('/author.json'),
            element:<About></About>
        },
        {
            path:'/blogs',
            loader:()=>fetch('/blog.json'),
            element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
        },
        {
            path:'/blogs/:id',
            loader:()=>fetch('/blog.json'),
            element:<PrivateRoute><BlogsCard></BlogsCard></PrivateRoute>
        },
        {
            path:'/contact',
            element:<PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

export default router;