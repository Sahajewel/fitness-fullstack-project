import { Button, Checkbox, FileInput, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { AuthContext } from "../../Provider/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
const animatedComponents = makeAnimated();
const imageBB = import.meta.env.VITE_IMG_BB_API;
const sentToBB = `https://api.imgbb.com/1/upload?key=${imageBB}`;
export default function BecomeATrainer() {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
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
        const becomeATrainer = {
            name: data.name,
            email: data.email,
            age: data.age,
            image: response.data.data.display_url,
            skills: data.skills,
            day: data.day,
            // name: data.name,
            // email: data.email,
            // age: data.age,
            // image: response.data.data.display_url,
            // skills: data.skills,
            // day: data.day,
            time: data.time,
            // experience: data.experience,
            // background: data.background,
            // details: data.details,
            // qualifications: data.qualifications,
            // trainerClasses: data.trainerClasses,
            // packages: data.packages,
            // socialLinks: {
            //     facebook: data.facebook,
            //     twitter: data.twitter,
            //     instagram: data.instagram,
            // },
        }
        const res = await axiosSecure.post("/become-a-trainer", becomeATrainer)
        console.log(res.data)

reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Request has been sent",
            showConfirmButton: false,
            timer: 1500
        });
navigate("/")

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
    const timeSlots = [
        { value: 'morning', label: 'Morning (6:00 AM - 12:00 PM)' },
        { value: 'noon', label: 'Noon (12:00 PM - 4:00 PM)' },
        { value: 'evening', label: 'Evening (4:00 PM - 10:00 PM)' },
    ];
    return (
        <div className=" pt-40 mb-20 shadow-2xl bg-white text-black dark:bg-gray-900 dark:text-white w-10/12 mx-auto md:px-10">
            <h1 className='text-center py-6  text-4xl font-bold underline pt-10'>Become A Trainer</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex p-20 flex-col gap-4 mx-auto ">
                {/* name and email */}
                <div className="md:flex justify-center items-center  gap-5">
                    <div className="w-full">
                        <div className="mb-2 block ">
                            <Label className=" text-lg" value="Full Name" />
                        </div>
                        <TextInput {...register('name')} type="text" placeholder="Your full name" required shadow />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className=" text-lg" value="Your Email" />
                        </div>
                        <TextInput {...register('email')} readOnly defaultValue={user?.email} id="password2" type="email" required shadow />
                    </div>
                </div>
                {/* age and profile */}
                <div className="md:flex justify-center items-center  gap-5">

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className=" text-lg" value="Your Age" />
                        </div>
                        <TextInput placeholder="age" {...register('age')} type="number" required shadow />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className=" text-lg" value="Upload Image" />
                        </div>
                        <FileInput {...register('image')} />
                    </div>
                </div>
                {/* checkboxes and day */}
                <div className="md:flex justify-center items-center  gap-5">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className=" text-lg" value="Skills" />
                        </div>
                        <div className="flex  gap-2 items-center">
                            <Checkbox {...register("skills")} value='Yoga' />
                            <Label className=" text-lg">Yoga</Label>
                            <Checkbox {...register("skills")} value='Meditation' />
                            <Label className=" text-lg">Meditation</Label>
                            <Checkbox {...register("skills")} value='Cardio' />
                            <Label className=" text-lg">Cardio</Label>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label className=" text-lg" value="Pick Day" />
                            </div>
                            <Controller
                                name="day"
                                control={control} // Use control from useForm
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                       
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
                {/* time slot */}
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label className=" text-lg" value="Pick Time Slots" />
                    </div>
                    <Controller
                        name="time"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Select
                                
                                value={value}
                                onChange={onChange}
                                isMulti
                                closeMenuOnSelect={false}
                                options={timeSlots}
                                components={animatedComponents}
                            />
                        )}
                    />
                </div>

                <button className=" p-3 bg-gradient-to-r text-white from-blue-500 via-purple-500 to-pink-500 hover:brightness-125 duration-300 transition" type="submit">Apply</button>
            </form>
        </div>
        // <div>
        //     <h1 className="text-center py-10 text-white text-4xl font-bold underline pt-10">
        //         Become A Trainer
        //     </h1>
        //     <form onSubmit={handleSubmit(onSubmit)} className="flex p-20 flex-col gap-4 mx-auto text-white">
        //         {/* name and email */}
        //         <div className="md:flex justify-center items-center gap-5">
        //             <div className="w-full">
        //                 <div className="mb-2 block ">
        //                     <Label className="text-white text-lg" value="Full Name" />
        //                 </div>
        //                 <TextInput {...register('name')} type="text" placeholder="Your full name" required shadow />
        //             </div>
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Your Email" />
        //                 </div>
        //                 <TextInput {...register('email')} readOnly defaultValue={user?.email} id="password2" type="email" required shadow />
        //             </div>
        //         </div>

        //         {/* age and profile */}
        //         <div className="md:flex justify-center items-center gap-5">
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Your Age" />
        //                 </div>
        //                 <TextInput {...register('age')} type="text" required shadow />
        //             </div>
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Upload Image" />
        //                 </div>
        //                 <FileInput {...register('image')} />
        //             </div>
        //         </div>

        //         {/* skills and day */}
        //         <div className="md:flex justify-center items-center gap-5">
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Skills" />
        //                 </div>
        //                 <div className="flex gap-2 items-center">
        //                     <Checkbox {...register("skills")} value="Yoga" />
        //                     <Label className="text-white text-lg">Yoga</Label>
        //                     <Checkbox {...register("skills")} value="Meditation" />
        //                     <Label className="text-white text-lg">Meditation</Label>
        //                     <Checkbox {...register("skills")} value="Cardio" />
        //                     <Label className="text-white text-lg">Cardio</Label>
        //                 </div>
        //             </div>

        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Pick Day" />
        //                 </div>
        //                 <Controller
        //                     name="day"
        //                     control={control}
        //                     render={({ field: { onChange, value } }) => (
        //                         <Select
        //                             className="text-black"
        //                             value={value}
        //                             onChange={onChange}
        //                             isMulti
        //                             closeMenuOnSelect={false}
        //                             options={options}
        //                             components={animatedComponents}
        //                         />
        //                     )}
        //                 />
        //             </div>
        //         </div>

        //         {/* Time Slots */}
        //         <div className="w-full">
        //             <div className="mb-2 block">
        //                 <Label className="text-white text-lg" value="Pick Time Slots" />
        //             </div>
        //             <Controller
        //                 name="time"
        //                 control={control}
        //                 render={({ field: { onChange, value } }) => (
        //                     <Select
        //                         className="text-black"
        //                         value={value}
        //                         onChange={onChange}
        //                         isMulti
        //                         closeMenuOnSelect={false}
        //                         options={timeSlots}
        //                         components={animatedComponents}
        //                     />
        //                 )}
        //             />
        //         </div>

        //         {/* Experience, Background, Details, Qualifications, Trainer Classes, Packages */}
        //         <div className="md:flex justify-center items-center gap-5">
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Experience" />
        //                 </div>
        //                 <TextInput {...register('experience')} type="text" placeholder="Your experience in years" required shadow />
        //             </div>
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Background" />
        //                 </div>
        //                 <TextInput {...register('background')} type="text" placeholder="Your background" required shadow />
        //             </div>
        //         </div>

        //         <div className="w-full">
        //             <div className="mb-2 block">
        //                 <Label className="text-white text-lg" value="Trainer Details" />
        //             </div>
        //             <TextInput {...register('details')} type="text" placeholder="Short details about you" required shadow />
        //         </div>

        //         <div className="md:flex justify-center items-center gap-5">
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Qualifications" />
        //                 </div>
        //                 <TextInput {...register('qualifications')} type="text" placeholder="Your qualifications" required shadow />
        //             </div>
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Trainer Classes" />
        //                 </div>
        //                 <TextInput {...register('trainerClasses')} type="text" placeholder="Classes you can teach" required shadow />
        //             </div>
        //         </div>

        //         {/* <div className="w-full">
        //             <div className="mb-2 block">
        //                 <Label className="text-white text-lg" value="Packages Offered" />
        //             </div>
        //             <TextInput {...register('packages')} type="text" placeholder="Packages you offer" required shadow />
        //         </div> */}

        //         {/* Social Links */}
        //         <div className="md:flex justify-center items-center gap-5">
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Facebook" />
        //                 </div>
        //                 <TextInput {...register('facebook')} type="url" placeholder="Your Facebook link" required shadow />
        //             </div>
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Twitter" />
        //                 </div>
        //                 <TextInput {...register('twitter')} type="url" placeholder="Your Twitter link" required shadow />
        //             </div>
        //             <div className="w-full">
        //                 <div className="mb-2 block">
        //                     <Label className="text-white text-lg" value="Instagram" />
        //                 </div>
        //                 <TextInput {...register('instagram')} type="url" placeholder="Your Instagram link" required shadow />
        //             </div>
        //         </div>

        //         <Button type="submit">Apply</Button>
        //     </form>
        // </div>
    )
}
