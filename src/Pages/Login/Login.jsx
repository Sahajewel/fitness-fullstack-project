import { useForm } from "react-hook-form"
import { Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
export default function Register() {
    const { signIn ,google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const handleGoogle = () => {
        google()
        .then((result)=>{
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Succefully Login By Google",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(location?.state? location.state : "/")
        })
        
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
       signIn(data.email, data.password)
       .then((result)=>{
        console.log(result.user)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Succefully Login",
            showConfirmButton: false,
            timer: 1500
          });
        navigate(location?.state? location.state : "/")
       })
                reset()
            
    }
    return (
        <div className="pb-10">
            <h1 className="text-center pt-10 text-4xl text-white font-bold mb-5">Login</h1>
            <div className="flex justify-center items-center  ">
                <form onSubmit={handleSubmit(onSubmit)} className="w-[300px] flex max-w-md flex-col gap-4">
                    <div >
                        <div className="mb-2 block text-white ">
                            <Label className="text-xl text-white" value="Your email" />
                        </div>
                        <TextInput {...register("email", { required: true })} className="" type="email" placeholder="email" required />
                    </div>
                    <div>
                        <div className="mb-2 block text-white">
                            <Label className="text-xl text-white" value="Your password" />
                        </div>
                        <TextInput {...register("password", { required: true })} placeholder="password" type="password" required />
                    </div>
                    <button className="bg-white p-3 rounded-xl text-black hover:brightness-125 duration-300 transition">Login</button>
                    <p className="bg-white p-2">If you don't have  an account please <Link className="text-red-500 hover:brightness-150 duration-300 transition" to="/register">Register</Link></p>
                    <button onClick={handleGoogle} className="flex justify-center items-center border p-2 "><span className="mr-4 text-white hover:brightness-150 duration-300 transition">Sign in google</span> <FaGoogle /></button>
                </form>
            </div>
        </div>
    )
}
