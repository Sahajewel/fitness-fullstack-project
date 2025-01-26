import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'
import UseAdmin from '../../../Hooks/UseAdmin';
import UseTrainer from '../../../Hooks/UseTrainer';

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const [isTrainer] = UseTrainer();
    

    let content;
    if (isAdmin) {
        content = (
            <div className='flex flex-col justify-center mx-auto  gap-2 py-10 px-10'>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/all-newsletter-subscriber">All NewsLetter subscribers</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/all-trainers">All Trainers</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/applied-trainers">Applied Trainers</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/add-a-new-class">Add A New Class</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/add-new-forum">Add New Forum</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/balance">Balance</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/">Home</NavLink>
            </div>
        )
    }
    else if (isTrainer) {
        content = (
            <div className='flex flex-col justify-center mx-auto  gap-2 py-10 px-10'>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/manage-slot">Manage Slot</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/add-new-forum">Add New Forum</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/">Home</NavLink>
            </div>
        )
    }
    else {
        content = (
            <div className='flex flex-col justify-center mx-auto  gap-2 py-10 px-10'>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/profile">Profile</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/booked-trainer">Booked Trainer</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/">Home</NavLink>
            </div>
        )
    }

    return (
        <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
            <div className=' mx-auto md:flex'>
                <div className='md:w-96 md:min-h-screen bg-gray-400 '>
                    {content}
                </div>
                <div className='p-10 w-full '>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    )

}


