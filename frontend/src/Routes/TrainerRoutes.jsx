import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Button, Spinner } from "flowbite-react";
import { Navigate, useLocation } from "react-router-dom";
import UseTrainer from "../Hooks/UseTrainer";

export default function TrainerRoutes({children}) {
    const {user, loading} = useContext(AuthContext);
    const [isTrainer, isTrainerLoading] = UseTrainer();
    const location = useLocation()
    if(loading || isTrainerLoading){
        return <Button color="gray">
                                <Spinner aria-label="Alternate spinner button example" size="sm" />
                                <span className="pl-3">Loading...</span>
                              </Button>
    }
    if(user && isTrainer){
        return children
    }
  return <Navigate to="/" state={location.pathname}></Navigate>
}
