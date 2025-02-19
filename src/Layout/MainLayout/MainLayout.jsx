import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Foooter/Footer";


export default function MainLayout() {
    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="">
                <div className="w-11/12 mx-auto min-h-[calc(100vh-447.25px)] ">
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
