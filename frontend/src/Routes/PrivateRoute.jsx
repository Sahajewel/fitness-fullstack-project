import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Button, Spinner } from "flowbite-react";
import { Navigate, useLocation } from 'react-router-dom';
export default function PrivateRoute({ children }) {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Button color="gray">
                <Spinner aria-label="Alternate spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
              </Button>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
}
