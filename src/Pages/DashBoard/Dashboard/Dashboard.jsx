import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'
import UseAdmin from '../../../Hooks/UseAdmin';
import UseTrainer from '../../../Hooks/UseTrainer';

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const [isTrainer] = UseTrainer()

    let content;
    if (isAdmin) {
        content = (
            <div>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/all-newsletter-subscriber">All NewsLetter subscribers</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/all-trainers">All Trainers</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/applied-trainers">Applied Trainers</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/add-a-new-class">Add A New Class</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/">Home</NavLink>
            </div>
        )
    }
    else if (isTrainer) {
        content = (
            <div>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/manage-slot">Manage Slot</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/">Home</NavLink>
            </div>
        )
    }
    else {
        content = (
            <div>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/profile">Profile</NavLink>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/">Home</NavLink>
            </div>
        )
    }

    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )

}


