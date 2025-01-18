import { Button, Checkbox, FileInput, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { AuthContext } from "../../Provider/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from 'sweetalert2';
const animatedComponents = makeAnimated();
const imageBB = import.meta.env.VITE_IMG_BB_API;
const sentToBB = `https://api.imgbb.com/1/upload?key=${imageBB}`;
export default function BecomeATrainer() {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const axiosPublic= useAxiosPublic();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const imageFile = {image: data.image[0]}
        const response = await axiosPublic.post(sentToBB, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        } )
        console.log(response.data)
        console.log(data)
        const becomeATrainer = {
            name: data.name,
            email: data.email,
            age: data.age,
            image: response.data.data.display_url,
            skills: data.skills,
            day: data.day,
            time: data.time

        }
        const res = await axiosSecure.post("/become-a-trainer",becomeATrainer)
        console.log(res.data)
        
   
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Request has been sent",
                showConfirmButton: false,
                timer: 1500
            });
        

    }
    const options = [
        { value: 'monday', label: 'Monday' },
        { value: 'tuesday', label: 'Tuesday' },
        { value: 'wednesday', label: 'Wednesday' },
        { value: 'thursday', label: 'Thursday' },
        { value: 'friday', label: 'Friday' },
        { value: 'saturday', label: 'Saturday' },
        { value: 'sunday', label: 'Sunday' },
    ]
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold underline pt-10'>Become A Trainer</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex p-20 flex-col gap-4 mx-auto text-white">
                {/* name and email */}
                <div className="md:flex justify-center items-center  gap-5">
                    <div className="w-full">
                        <div className="mb-2 block ">
                            <Label className="text-white text-lg" value="Full Name" />
                        </div>
                        <TextInput {...register('name')} type="text" placeholder="Your full name" required shadow />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className="text-white text-lg" value="Your Email" />
                        </div>
                        <TextInput {...register('email')} readOnly defaultValue={user?.email} id="password2" type="email" required shadow />
                    </div>
                </div>
                {/* age and profile */}
                <div className="md:flex justify-center items-center  gap-5">

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className="text-white text-lg" value="Your Age" />
                        </div>
                        <TextInput {...register('age')} type="text" required shadow />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className="text-white text-lg" value="Upload Image" />
                        </div>
                        <FileInput {...register('image')} />
                    </div>
                </div>
                {/* checkboxes and day */}
                <div className="md:flex justify-center items-center  gap-5">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className="text-white text-lg" value="Skills" />
                        </div>
                        <div className="flex  gap-2 items-center">
                            <Checkbox {...register("skills")} value='Yoga' />
                            <Label className="text-white text-lg">Yoga</Label>
                            <Checkbox {...register("skills")} value='Meditation' />
                            <Label className="text-white text-lg">Meditation</Label>
                            <Checkbox {...register("skills")} value='Cardio' />
                            <Label className="text-white text-lg">Cardio</Label>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label className="text-white text-lg" value="Pick Day" />
                            </div>
                            <Controller
                                name="day"
                                control={control} // Use control from useForm
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        className="text-black"
                                        value={value}
                                        onChange={onChange}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        options={options}
                                        components={animatedComponents}
                                    />
                                )}
                            />
                        </div>

                    </div>
                </div>
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label className="text-white text-lg" value="Time" />
                    </div>
                    <TextInput {...register('time')} type="time" required shadow />
                </div>
                <Button type="submit">Apply</Button>
            </form>
        </div>
    )
}
