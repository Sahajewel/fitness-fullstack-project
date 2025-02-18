import React, { useContext, useEffect, useState } from 'react';
import logo from "../../assets/logo.jpg"
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
    // State to track whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { logout, user } = useContext(AuthContext);
    const [scrolled, setScrolled] = useState(false)
    useEffect(()=>{
        const handleScrolled=()=>{
            if(window.scrollY > 50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScrolled);
        return()=>{
            window.removeEventListener("scroll", handleScrolled)
        }
    }, [])
  
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogout = () => {
        logout()
            .then((result) => {
                console.log(result?.user)
            })
    }

    return (
        <nav className={` p-4 top-0 left-0  shadow-lg fixed w-full z-10 ${scrolled ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-400" : "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"}`}>
            <div className="container mx-auto flex justify-between items-center">

                <div className="text-white text-3xl font-semibold tracking-wide hover:text-gray-200 transition duration-300">
                    <a href="/"><img className='w-20 rounded-full h-20' src={logo} alt="This is logo" /></a>
                </div>

                <div className="hidden md:flex space-x-8">
                    <NavLink to="/" className="text-white text-lg hover:text-yellow-300 transition duration-300">Home</NavLink>
                   {
                    user?  <NavLink to="/all-trainers" className="text-white text-lg hover:text-yellow-300 transition duration-300">All Trainers</NavLink> : ""
                   }
                    <NavLink to="/all-classes" className="text-white text-lg hover:text-yellow-300 transition duration-300">All Classes</NavLink>
                   {
                    user?  <NavLink to="/dashboard" className="text-white text-lg hover:text-yellow-300 transition duration-300">Dashboard</NavLink> : ""
                   }
                    <NavLink to="/community-forum"  className="text-white text-lg hover:text-yellow-300 transition duration-300">Community</NavLink>
                 
                </div>

                {/* Right side - Login/Register (Hidden on mobile) */}
                <div className="hidden md:flex space-x-6">
                    {user && user ? <div className='flex justify-center items-center'>
                        <img className='w-20 rounded-full mr-2' src={user?.photoURL} alt="" />
                        <p>{user?.address}</p>
                        <button onClick={handleLogout} className="text-black text-lg bg-white  hover:brightness-125     py-2 px-4 rounded-full transition duration-300">Logout</button>
                    </div>
                        :
                        <div>
                             <NavLink to="/login" className="text-black  bg-white  hover:brightness-125 text-lg mr-2  py-2 px-4 rounded-full transition duration-300">Login</NavLink>
                             <NavLink to="/register" className="text-black text-lg bg-white  hover:brightness-125 py-2 px-4 rounded-full transition duration-300">Register</NavLink>
                        </div>
                    }


                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Show when 'isMenuOpen' is true */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 via-pink-800 to-red-800 m-10 p-6 space-y-4">
                    <NavLink to="/" className="text-white text-lg hover:text-yellow-300 transition duration-300">Home</NavLink>
                  {
                    user?   <NavLink to="/all-trainers" className="text-white text-lg hover:text-yellow-300 transition duration-300">All Trainers</NavLink> : ""
                  }
                    <NavLink to="/all-classes" className="text-white text-lg hover:text-yellow-300 transition duration-300">All Classes</NavLink>
                    {
                        user? <NavLink to="/dashboard" className="text-white text-lg hover:text-yellow-300 transition duration-300">Dashboard</NavLink> : ""
                    }
                    <NavLink to="/community-forum"  className="text-white text-lg hover:text-yellow-300 transition duration-300">Community</NavLink>
                    
                    {user && user ? <div className='flex justify-center  items-center'>
                        <img className='w-20 rounded-full mr-2' src={user?.photoURL} alt="" />
                        <p>{user?.address}</p>
                        <button onClick={handleLogout} className="text-black text-lg bg-white  hover:brightness-125     py-2 px-4 rounded-full transition duration-300">Logout</button>
                    </div>
                        :
                        <div>
                            <NavLink to="/login" className="text-black  bg-white  hover:brightness-125 text-lg mr-2  py-2 px-4 rounded-full transition duration-300">Login</NavLink>
                            <NavLink to="/register" className="text-black text-lg bg-white  hover:brightness-125 py-2 px-4 rounded-full transition duration-300">Register</NavLink>
                        </div>
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;
