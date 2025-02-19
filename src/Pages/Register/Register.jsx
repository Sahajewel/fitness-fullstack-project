import { useForm } from "react-hook-form"
import { Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
export default function Register() {
    const { createUser, updateUserProfile, google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic()
    const handleGoogle = () => {
        google()
            .then((result) => {
                console.log(result.user)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    image: result?.user?.photoURL
                }
                axiosPublic.post("/users", userInfo)
                    .then((res) => {
                        console.log(res.data)
                    })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Succefully signup By Google",
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
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user)
                updateUserProfile(data.name, data.photo, data.phoneNumber, data.address)
                    .then((result) => {
                        console.log(result)
                        const userProfile = {
                            name: data.name,
                            email: data.email,
                            image: data.photo,
                            phoneNumber: data.phoneNumber,
                            address: data.address,
                        }
                        axiosPublic.post("/users", userProfile)
                            .then((res) => {
                                console.log(res.data)
                                reset()
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Succefully signup",
                                    showConfirmButton: false,
                                    timer: 1500
                                });


                            })
                        navigate(location?.state ? location.state : "/")

                    })
                    .catch((error) => {
                        console.log(error)
                    })





            })
    }
    return (
        <div className="py-10 bg-white text-black dark:bg-gray-900 dark:text-white shadow-2xl mb-10">
            <h1 className="text-center pt-36 text-4xl  font-bold mb-5">Register</h1>
            <div className="flex justify-center items-center  ">
                <form onSubmit={handleSubmit(onSubmit)} className="w-[600px] flex  flex-col gap-4">
                    <div className="md:flex justify-between  items-center gap-4">
                        <div className="w-full">
                            <div className="mb-2 block  ">
                                <Label className="text-xl " value="Your Name" />
                            </div>
                            <TextInput {...register("name", { required: true })} className="" type="text" placeholder="name" required />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 block  ">
                                <Label className="text-xl " value="photo URL" />
                            </div>
                            <TextInput {...register("photo", { required: true })} className="" type="text" placeholder="photo url" required />
                        </div>

                    </div >
                    <div className="md:flex justify-between  items-center gap-4">
                        <div className="w-full">
                            <div className="mb-2 block  ">
                                <Label className="text-xl " value="Your email" />
                            </div>
                            <TextInput {...register("email", { required: true })} className="" type="email" placeholder="email" required />

                        </div>
                        <div className="w-full">

                            <div className="mb-2 block ">
                                <Label className="text-xl " value="Your password" />
                            </div>
                            <TextInput {...register("password", { required: true })} placeholder="password" type="password" required />
                        </div>
                    </div>
                    {/* New Fields for Phone Number and Address */}
                    <div className="md:flex justify-between  items-center gap-4">
                        <div className="w-full">
                            <Label className=" text-lg" htmlFor="phoneNumber" value="Phone Number" />
                            <TextInput
                                id="phoneNumber"
                                type="text"
                                {...register("phoneNumber", { required: true })}
                                placeholder="Enter your phone number"
                            />
                            {errors.phoneNumber && <span>This field is required</span>}
                        </div>

                        <div className="w-full">
                            <Label className=" text-lg" htmlFor="address" value="Address" />
                            <TextInput
                                id="address"
                                type="text"
                                {...register("address", { required: true })}
                                placeholder="Enter your address"
                            />
                            {errors.address && <span>This field is required</span>}
                        </div>
                    </div>
                    <button className=" p-3 border rounded-xl  hover:brightness-150 duration-300 transition">Register</button>
                    <p className=" p-2 border text-center">If you already an account please <Link className="text-red-500 hover:brightness-150 duration-300 transition" to="/login">Login</Link></p>
                    <button onClick={handleGoogle} className="flex justify-center items-center border p-2 "><span className="mr-4  hover:brightness-150 duration-300 transition">Sign up google</span> <FaGoogle /></button>
                </form>
            </div>
        </div>
    )
}
