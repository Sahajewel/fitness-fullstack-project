import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../Provider/AuthProvider'
import { Button, FileInput, Label, Modal, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
const imageBB = import.meta.env.VITE_IMG_BB_API;
const sentToBB = `https://api.imgbb.com/1/upload?key=${imageBB}`;
export default function ProfilePage() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const axiosPublic = useAxiosPublic()
    const axiosSecure = UseAxiosSecure()
    const {
        register,
        handleSubmit,
    } = useForm()




    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const response = await axiosPublic.post(sentToBB, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        console.log(response.data)
        console.log(data)
        const userInfo = {
            name: data.name,
            image: response.data.data.display_url,
            email: user?.email
        }
        const savedUser = JSON.parse(localStorage.getItem('user'));

       
        const res = await axiosPublic.put("/users", userInfo)
        console.log(res.data)
         Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Profile updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/dashboard")
        if (res.data.modifiedCount > 0) {
            user.displayName = data.name;
            user.photoURL = response.data.data.display_url
            localStorage.setItem('user', JSON.stringify(user));
            return { name: data.name, image: response.data.data.display_url };
        }
        if (savedUser) {
            // If user data exists, update the user object
            user.displayName = savedUser.displayName;
            user.photoURL = savedUser.photoURL;
        }
        const respo = await axiosPublic.get("/users");
        if (res.data) {
            user.displayName = respo.data.name;
            user.photoURL = respo.data.image;
        }


    }


    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }
    return (
        <div className='flex flex-col mx-auto items-center justify-center'>
             <Helmet>
             <title>Dashboard | profile</title>
           </Helmet>
            <h1 className='mb-10 text-white underline font-bold text-4xl'>Profile</h1>
            <div className='bg-white p-10'>
                <h1 className='text-black text-center mb-3'>Name: {user?.displayName}</h1>
                <img className='h-40 w-40 rounded-full mb-3' src={user?.photoURL} alt="" />
                <p className=' text-black mb-3'>Email: {user?.email}</p>
                <div className='w-full  flex justify-center'>
                    <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 hover:brightness-125 duration-300 transition text-white' onClick={() => setOpenModal(true)}>Edit Profile</button>
                </div>
            </div>

            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Profile</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Your Name" />
                                </div>
                                <TextInput
                                    {...register("name")}
                                    placeholder="Your Name"
                                    defaultValue={user?.displayName}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Upload Image" />
                                </div>
                                <FileInput {...register("image")} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Your email" />
                                </div>
                                <TextInput
                                    defaultValue={user?.email}
                                    placeholder="Your Email"
                                    required
                                    {...register("email")}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:brightness-125 duration-300 p-3' type='submit'>Update Profile</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </div>
    )
}
