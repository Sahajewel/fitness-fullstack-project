import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='md:flex md:w-10/12 mx-auto '>
            <div className='md:w-1/4 bg-red-500 md:min-h-screen py-16 flex flex-col items-center text-center p-5 space-y-3'>
                <NavLink className="bg-red-950 p-3 text-white rounded-xl " to="/dashboard/all-newsletter-subscriber">All NewsLetter subscribers</NavLink>
               <Link to="/">Home</Link>
            </div>
            <div className='md:w-3/4 p-20'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}


