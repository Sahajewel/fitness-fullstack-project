import React, { useContext } from 'react'
import UseAdmin from '../Hooks/UseAdmin'
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'flowbite-react';
import { AuthContext } from '../Provider/AuthProvider';

export default function AdminRoutes({children}) {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <Button color="gray">
                        <Spinner aria-label="Alternate spinner button example" size="sm" />
                        <span className="pl-3">Loading...</span>
                      </Button>
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to="/" state={location.pathname}></Navigate>
}
