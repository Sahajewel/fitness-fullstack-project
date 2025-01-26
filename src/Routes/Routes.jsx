import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Error from "../Pages/ErrorPages/Error";
import Home from "../Pages/HomePages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
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
import Balance from "../Pages/DashBoard/Dashboard/Balance";
import BookedTrainer from "../Pages/DashBoard/Dashboard/BookedTrainer/BookedTrainer";
import Classes from "../Pages/HomePages/AllClasses";
import CommunityForum from "../Pages/DashBoard/AddNewForum/CommunityForum";
import DefaultDashboard from "../Pages/DashBoard/Dashboard/DefaultDashboard";
import ActivityLog from "../Pages/DashBoard/ActivityLog/ActivityLog";
import AboutUs from "../Pages/HomePages/Home/AboutUs/AboutUs";
import Contact from "../Pages/HomePages/Contact/Contact";
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
          path: "/all-trainers",
          element: <AllTrainers></AllTrainers>
        },
        {
          path: "/trainer-details/:id",
          element: <TrainerDetails></TrainerDetails>,
          loader: ({params})=>fetch(`https://assignment-12-server-black-kappa.vercel.app/all-trainers/${params.id}`)
        },
        {
          path: "/trainer-booked/:id/:slot",
          element: <PrivateRoute><TrainerBooked></TrainerBooked></PrivateRoute>,
          loader: ({params})=>fetch(`https://assignment-12-server-black-kappa.vercel.app/all-trainers/${params.id}`)
        },
        {
          path: "/payment/:id/:price/:name/:slot",
          element: <PrivateRoute><Payment></Payment></PrivateRoute>,
          loader: ({params})=>fetch(`https://assignment-12-server-black-kappa.vercel.app/all-trainers/${params.id}`)
        },
        {
          path: "/become-a-trainer",
          element:<PrivateRoute> <BecomeATrainer></BecomeATrainer></PrivateRoute>
        },
        {
          path: "/all-classes",
          element: <Classes></Classes>
        },
        {
          path: "/community-forum",
          element: <CommunityForum></CommunityForum>
        },
        {
          path: "/about-us",
          element: <AboutUs></AboutUs>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: "",
          element: <DefaultDashboard></DefaultDashboard>
        },
        {
          path: "/dashboard/all-newsletter-subscriber",
          element: <AdminRoutes><AllNewsLettersSubscriber></AllNewsLettersSubscriber></AdminRoutes>
        },
        {
          path: "/dashboard/all-trainers",
          element: <AdminRoutes><DashboardAllTrainers></DashboardAllTrainers></AdminRoutes>
        },
        {
          path: "/dashboard/applied-trainers",
          element: <AdminRoutes><AppliedTrainer></AppliedTrainer></AdminRoutes>
        }, 
        {
          path: "/dashboard/applied-trainers-details/:id",
          element: <AdminRoutes><AppliedTrainersDetails></AppliedTrainersDetails></AdminRoutes>,
          loader:({params})=>fetch(`https://assignment-12-server-black-kappa.vercel.app/become-a-trainer/${params.id}`),
         
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
          element: <AdminRoutes><Balance></Balance></AdminRoutes>
        },
        {
          path: "/dashboard/booked-trainer",
          element: <BookedTrainer></BookedTrainer>
        },
        {
          path: "/dashboard/activity-log",
          element: <ActivityLog></ActivityLog>,
        }
      ]
    }
    ,
   
  ]);

