import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Foooter/Footer";


export default function MainLayout() {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
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
