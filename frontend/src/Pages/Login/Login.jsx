import { useForm } from "react-hook-form"
import { Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
export default function Register() {
    const { signIn, google, user } = useContext(AuthContext);

   
    const [emailRole, setEmailRole] = useState("");
    const [passwordRole, setPasswordRole] = useState("");
    const fillCredentiasls = (role) => {
        if (role === "admin") {
            setEmailRole("jewelsaha@gmail.com");
            setPasswordRole("123456");
        } else if (role === "trainer") {
            setEmailRole("mom@gmail.com");
            setPasswordRole("123456");
        } else {
            setEmailRole("pavel55@gmail.com");
            setPasswordRole("123456");
        }
    };
    useEffect(() => {
        if (user?.role === "admin") {
            setEmailRole("jewelsaha@gmail.com");
            setPasswordRole("123456")
        } else if (user?.role === "trainer") {
            setEmailRole("mom@gmail.com");
            setPasswordRole("123456")
        } else  {
            setEmailRole("pavel55@gmail.com")
            setPasswordRole("123456")
        }
      }, [user]);
     
    const navigate = useNavigate();
    const location = useLocation()
    const handleGoogle = () => {
        google()
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Succefully Login By Google",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/")
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
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Succefully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/")
            })
        reset()

    }
    useEffect(() => {
        reset({
            email: emailRole,
            password: passwordRole
        });
    }, [emailRole, passwordRole, reset]);
    return (
        <div className="py-10 bg-white text-black dark:bg-gray-900 dark:text-white shadow-2xl mb-20 ">
            <h1 className="text-center pt-36 text-4xl  font-bold mb-5">Login</h1>
            <div className="flex justify-center items-center  ">
                <form onSubmit={handleSubmit(onSubmit)} className="w-[300px] flex max-w-md flex-col gap-4 ">
                    <div >
                        <div className="mb-2 block text-white ">
                            <Label className="text-xl " value="Your email" />
                        </div>
                        {/* <TextInput  {...register("email", { required: true })} className="" type="email" placeholder="email" onChange={(e)=>setEmailRole(e.target.value)} required /> */}

                        <TextInput
                            {...register("email", { required: true })}
                            className=""
                            type="email"
                            placeholder="email"
                            value={emailRole}  // ✅ Auto-fill works here
                            onChange={(e) => setEmailRole(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block text-white">
                            <Label className="text-xl " value="Your password" />
                        </div>
                        {/* <TextInput  {...register("password", { required: true })} placeholder="password" type="password" onChange={(e) => setPasswordRole(e.target.value)} required /> */}
                        <TextInput
                            {...register("password", { required: true })}
                            placeholder="password"
                            type="password"
                            value={passwordRole}  // ✅ Auto-fill works here
                            onChange={(e) => setPasswordRole(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        onClick={() => fillCredentiasls("admin")}
                        type="button"
                        className="shadow-2xl p-3 rounded-xl  hover:brightness-125 duration-300 transition border"
                    >
                        Admin Credentials
                    </button>
                    <button
                        onClick={() => fillCredentiasls("trainer")}
                        type="button"
                        className="shadow-2xl p-3 rounded-xl  hover:brightness-125 duration-300 transition border"
                    >
                        Trainer Credentials
                    </button>
                    <button
                        onClick={() => fillCredentiasls("user")}
                        type="button"
                        className="shadow-2xl p-3 rounded-xl  hover:brightness-125 duration-300 transition border"
                    >
                        User Credentials
                    </button>
                    <button className=" p-3 rounded-xl  shadow-2xl hover:brightness-125 duration-300 transition border">Login</button>
                    <p className="shadow-2xl p-2 border text-center">If you don't have  an account please <Link className="text-red-500 hover:brightness-150 duration-300 transition" to="/register">Register</Link></p>
                    <button onClick={handleGoogle} className="flex justify-center items-center border p-2 "><span className="mr-4  hover:brightness-150 duration-300 transition">Sign in google</span> <FaGoogle /></button>
                </form>
            </div>
        </div>
    )
}
