import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
          element:  <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router