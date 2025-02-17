import { Button, Label, Textarea } from 'flowbite-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

export default function AddNewForum() {
    const axioxSecure = UseAxiosSecure();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const newForum = {
            routine: data.routine,
            fitnessTips: data.fitnessTips,
            lifeStyle: data.lifeStyle,
            weightLoss: data.weightLoss,
            cardio: data.cardio,
            yoga: data.yoga,
            nutrition: data.nutrition,
            healthyRecipes: data.healthyRecipes,
        }
        const res = await axioxSecure.post("/add-new-forum", newForum)
        console.log(res.data)
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added A New Forum",
            showConfirmButton: false,
            timer: 1500
        });
       navigate("/dashboard")

    }
    return (
        <div>
             <Helmet>
             <title>Dashboard | add-new-forum</title>
           </Helmet>
            <h1 className='text-center py-10 text-white  text-4xl font-bold underline'>Add A New Forum</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>
                {/* routine and tips */}
                <div className='md:flex gap-6'>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className='text-white text-lg' value="Workout Routine" />
                        </div>
                        <Textarea {...register("routine")} id="comment" placeholder="Wright something about workout routine" required rows={4} />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className='text-white text-lg' value="Fitness Tips" />
                        </div>
                        <Textarea {...register("fitnessTips")} id="comment" placeholder="Wright something about fitness tips" required rows={4} />
                    </div>
                </div>
                {/* healthy lifestyle & weight loss */}
                <div className='md:flex gap-6'>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className='text-white text-lg' value="Healthy Lifestyle" />
                        </div>
                        <Textarea {...register("lifeStyle")} id="comment" placeholder="Wright something about healthy Life style" required rows={4} />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className='text-white text-lg' value="Weight Loss" />
                        </div>
                        <Textarea {...register("weightLoss")} id="comment" placeholder="Wright something about weight loss" required rows={4} />
                    </div>
                </div>
                {/* cardio workout & Yoga */}
                <div className='md:flex gap-6'>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className='text-white text-lg' value="Cardio Workouts" />
                        </div>
                        <Textarea {...register("cardio")} id="comment" placeholder="Wright something about cardio workouts" required rows={4} />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className='text-white text-lg' value="Yoga" />
                        </div>
                        <Textarea {...register("yoga")} id="comment" placeholder="Wright something about Yoga" required rows={4} />
                    </div>
                </div>
                {/*  */}
                <div className='md:flex gap-6'>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className='text-white text-lg' value="Nutrition Tips" />
                        </div>
                        <Textarea {...register("nutrition")} id="comment" placeholder="Wright something about nutrition Tips" required rows={4} />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label className='text-white text-lg' value="Healthy Recipes" />
                        </div>
                        <Textarea {...register("healthyRecipes")} id="comment" placeholder="Wright something about healthy recipes" required rows={4} />
                    </div>
                </div>

                <div className='flex mx-auto justify-center my-4'>
                    <button className='bg-white text-black hover:brightness-125 transition duration-300 p-3' type='submit' color='success'>Add New Forum</button>
                </div>
            </form>
        </div>
    )
}
