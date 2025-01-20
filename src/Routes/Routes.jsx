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
import AppliedTrainer from "../Pages/DashBoard/AppliedTrainer/AppliedTrainer";
import AppliedTrainersDetails from "../Pages/DashBoard/AppliedTrainer/AppliedTrainersDetails";
import AddANewClass from "../Pages/DashBoard/AddANewClass/AddANewClass";
import ManageSlot from "../Pages/DashBoard/ManageSlot/ManageSlot";
import ProfilePage from "../Pages/DashBoard/Dashboard/ProfilePage/ProfilePage";
import AdminRoutes from "./AdminRoutes";
import TrainerRoutes from "./TrainerRoutes";
import AddNewForum from "../Pages/DashBoard/AddNewForum/AddNewForum";
import Booked from "../Pages/TrainerBooked/Booked.jsx/Booked";
import Balance from "../Pages/DashBoard/Dashboard/Balance";
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
          path: "/trainer-booked/:id/:slot",
          element: <TrainerBooked></TrainerBooked>,
          loader: ({params})=>fetch(`http://localhost:5000/all-trainers/${params.id}`)
        },
        {
          path: "/payment/:id/:price/:name/:slot",
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
        },
        {
          path: "/dashboard/applied-trainers",
          element: <AppliedTrainer></AppliedTrainer>
        }, 
        {
          path: "/dashboard/applied-trainers-details/:id",
          element: <AppliedTrainersDetails></AppliedTrainersDetails>,
          loader:({params})=>fetch(`http://localhost:5000/become-a-trainer/${params.id}`),
         
        }, 
        {
          path: "add-a-new-class",
          element: <AdminRoutes><AddANewClass></AddANewClass></AdminRoutes>
        },
        {
          path: "/dashboard/manage-slot",
          element: <TrainerRoutes><ManageSlot></ManageSlot></TrainerRoutes>
        }, 
        {
          path: "/dashboard/profile",
          element: <ProfilePage></ProfilePage>
        },
        {
          path: "/dashboard/add-new-forum",
          element: <AddNewForum></AddNewForum>
        },
        {
          path: "/dashboard/balance",
          element: <Balance></Balance>
        }
      ]
    }
    ,
   
  ]);

