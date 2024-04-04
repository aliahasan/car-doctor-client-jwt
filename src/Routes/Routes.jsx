import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Bookings from "../Pages/Bookings/Bookings";
import BookService from "../Pages/BookService/BookService";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path:'/',
            element :  <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/signup',
          element:  <SignUp></SignUp>,
        },
       
        {
          path: '/book/:id',
          element: <BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element:<PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default router