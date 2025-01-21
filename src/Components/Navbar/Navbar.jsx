import React, { useContext, useEffect, useState } from 'react';
import logo from "../../assets/logo.jpg"
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import UseAdmin from '../../Hooks/UseAdmin';
import UseTrainer from '../../Hooks/UseTrainer';
const Navbar = () => {
    // State to track whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { logout, user } = useContext(AuthContext)
    // const [isAdmin] = UseAdmin();
    // const [isTrainer] = UseTrainer();
    // // // Function to toggle the mobile menu
    // let content;

    // useEffect(() => {
    //     if (isAdmin) {
    //         content = (
    //             <NavLink to="/dashboard/all-newsletter-subscriber" className="text-white text-lg hover:text-yellow-300 transition duration-300">Dashboard</NavLink>
    //         )
    //     }
    //     else if (isTrainer) {
    //         content = (
    //             <NavLink to="/dashboard/manage-slot" className="text-white text-lg hover:text-yellow-300 transition duration-300">Dashboard</NavLink>
    //         )
    //     }
    //     else {
    //         content = (
    //             <NavLink to="/dashboard/profile" className="text-white text-lg hover:text-yellow-300 transition duration-300">Dashboard</NavLink>
    //         )

    //     }
    // }, [content])
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
        <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side - Logo */}
                <div className="text-white text-3xl font-semibold tracking-wide hover:text-gray-200 transition duration-300">
                    <a href="/"><img className='w-32 rounded-full h-32' src={logo} alt="This is logo" /></a>
                </div>

                {/* Middle - Menu (Hidden on mobile) */}
                <div className="hidden md:flex space-x-8">
                    <NavLink to="/" className="text-white text-lg hover:text-yellow-300 transition duration-300">Home</NavLink>
                    <NavLink to="/secret" className="text-white text-lg hover:text-yellow-300 transition duration-300">Secret</NavLink>

                    
                    <NavLink to="/dashboard" className="text-white text-lg hover:text-yellow-300 transition duration-300">Dashboard</NavLink>
                    
                    <NavLink to="/all-trainers" className="text-white text-lg hover:text-yellow-300 transition duration-300">All Trainers</NavLink>

                </div>

                {/* Right side - Login/Register (Hidden on mobile) */}
                <div className="hidden md:flex space-x-6">
                    {user && user ? <div className='flex justify-center items-center'>
                        <img className='w-20 rounded-full mr-2' src={user?.photoURL} alt="" />
                        <button onClick={handleLogout} className="text-white text-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded-full transition duration-300">Logout</button>
                    </div>
                        :
                        <div>
                            <NavLink to="/login" className="text-white text-lg mr-2 bg-yellow-500 hover:bg-yellow-400 hover:text-white py-2 px-4 rounded-full transition duration-300">Login</NavLink>
                            <NavLink to="/register" className="text-white text-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded-full transition duration-300">Register</NavLink>
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
                    <NavLink to="/secret" className="text-white text-lg hover:text-yellow-300 transition duration-300">Secret</NavLink>
                    <NavLink to="/dashboard" className="text-white text-lg hover:text-yellow-300 transition duration-300">Dashboard</NavLink>
                    <NavLink to="all-trainers" className="text-white text-lg hover:text-yellow-300 transition duration-300">All Trainers</NavLink>
                    {user && user ? <div className='flex justify-center  items-center'>
                        <img className='w-20 rounded-full mr-2' src={user?.photoURL} alt="" />
                        <button onClick={handleLogout} className="text-white text-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded-full transition duration-300">Logout</button>
                    </div>
                        :
                        <div>
                            <NavLink to="/login" className="text-white text-lg mr-2 bg-yellow-500 hover:bg-yellow-400 hover:text-white py-2 px-4 rounded-full transition duration-300">Login</NavLink>
                            <NavLink to="/register" className="text-white text-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded-full transition duration-300">Register</NavLink>
                        </div>
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;
