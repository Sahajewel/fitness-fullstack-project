import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Error from "../Pages/ErrorPages/Error";
import Home from "../Pages/HomePages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        }, 
        {
          path: "/secret", 
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
  ]);

