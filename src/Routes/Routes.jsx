import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Error from "../Pages/ErrorPages/Error";
import Home from "../Pages/HomePages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/DashBoard/Dashboard/Dashboard";
import AllNewsLettersSubscriber from "../Pages/DashBoard/AdminDashboard/AllNewsLettersSubscriber";
import AllTrainers from "../Pages/HomePages/AllTrainers/AllTrainers";
import TrainerDetails from "../Pages/HomePages/AllTrainers/TrainerDetails";
import TrainerBooked from "../Pages/TrainerBooked/TrainerBooked";
import Payment from "../Pages/Payment/Payment";
import BecomeATrainer from "../Pages/BecomeATrainer/BecomeATrainer";
import DashboardAllTrainers from "../Pages/DashBoard/Dashboard AllTrainers/DashboardAllTrainers";
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
        },
        {
          path: "/all-trainers",
          element: <AllTrainers></AllTrainers>
        },
        {
          path: "/trainer-details/:id",
          element: <TrainerDetails></TrainerDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/all-trainers/${params.id}`)
        },
        {
          path: "/trainer-booked/:id",
          element: <TrainerBooked></TrainerBooked>,
          loader: ({params})=>fetch(`http://localhost:5000/all-trainers/${params.id}`)
        },
        {
          path: "/payment/:id",
          element: <Payment></Payment>,
          loader: ({params})=>fetch(`http://localhost:5000/all-trainers/${params.id}`)
        },
        {
          path: "/become-a-trainer",
          element: <BecomeATrainer></BecomeATrainer>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: "/dashboard/all-newsletter-subscriber",
          element: <AllNewsLettersSubscriber></AllNewsLettersSubscriber>
        },
        {
          path: "/dashboard/all-trainers",
          element: <DashboardAllTrainers></DashboardAllTrainers>
        }
      ]
    }
    ,
   
  ]);

