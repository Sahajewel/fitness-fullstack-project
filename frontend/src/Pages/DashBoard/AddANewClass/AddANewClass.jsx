import { Button, FileInput, Label, Textarea, TextInput } from 'flowbite-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const imageBB = import.meta.env.VITE_IMG_BB_API;
const sentToBB = `https://api.imgbb.com/1/upload?key=${imageBB}`;
export default function AddANewClass() {
    const axiosSecure = UseAxiosSecure();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        console.log(data)
        const imageFile = {image: data.image[0]}
        const response = await axiosSecure.post(sentToBB, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
            
        })
        console.log(response.data)
        const classInfo = {
            addClass: data.addClass,
            image: response.data.data.display_url,
            textArea: data.details
        }
        const res = await axiosSecure.post("/add-a-class", classInfo)
        console.log(res.data) 
         Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added A Class",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/dashboard")
    }
    return (
        <div className='bg-white text-black dark:bg-gray-900 pb-10 dark:text-white shadow-2xl '>
             <Helmet>
             <title>Dashboard | add-a-new-class</title>
           </Helmet>
            <h1 className='text-center py-10  text-4xl font-bold underline'>Add A New Class</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-lg flex-col justify-center mx-auto gap-4 pb-10 shadow-2xl p-6 mb-10">
                <div>
                    <div className="mb-2 block">
                        <Label className='' value="Class Name" />
                    </div>
                    <TextInput {...register('addClass')} type="text" placeholder="Add Class" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className='' value="Upload Image" />
                    </div>
                    <FileInput {...register('image')} />
                </div>
                <div className="">
                    <div className="mb-2 block">
                        <Label className='' value="Write Details" />
                    </div>
                    <Textarea {...register('details')} placeholder="Write Details" required rows={4} />
                </div>
                <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 hover:brightness-125 duration-300 transition text-white' type="submit">Submit</button>
            </form>
        </div>
    )
}
