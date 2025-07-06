import React, { useContext, useRef, useState } from 'react'
import UseBookedTrainer from '../../../../Hooks/UseBookedTrainer'
import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function BookedTrainer() {
    const [bookedTrainer] = UseBookedTrainer();
    const navigate = useNavigate()
    console.log(bookedTrainer)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);
    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const cls = bookedTrainer.classes
    console.log(cls)

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm()

    // const onSubmit = async (data) => {
    //     console.log(data)
    //     const textArea = {
    //         text: data.text
    //     }
    //     const res = await axiosPublic.post("/review", textArea)
    //     console.log(res.data)
    //     Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Added Review",
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // }
   
    const handleSubmit = async (e) => {
      
        e.preventDefault();
       
        const newReview = { name, email, text, rating };
        const response = await axiosPublic.post("/review", newReview);
        console.log(response.data)

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Succefully Reviewed",
            showConfirmButton: false,
            timer: 1500
        });
       navigate("/dashboard")

    };
    return (
        <div className='shadow-2xl pb-10'>
             <Helmet>
             <title>Dashboard | booked-trainer</title>
           </Helmet>
            <h1 className='text-center py-10  text-4xl font-bold'> Booked Trainer</h1>
            {
                bookedTrainer.map((trainer, index) => <div key={index} className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden border">

                    <div className="p-6 shadow-2xl">
                        <h2 className="text-2xl font-semibold ">
                            Trainer: {trainer.payment}
                        </h2>
                        {/* <p className="mt-2 text-gray-600">{trainer.details}</p> */}

                        <div className="mt-4">
                            <h3 className="text-lg font-medium ">Classes Info:</h3>
                            <p className="">{trainer.classes?.join(", ")}</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-medium ">Slot Info:</h3>
                            <p className="">{trainer.slot}</p>
                        </div>
                        <Button className="mt-6 w-full  text-white py-2 px-4 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:brightness-125  transition-colors duration-300" onClick={() => setOpenModal(true)}>Review</Button>
                        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                            <Modal.Header />
                            <Modal.Body>
                                <form  onSubmit={handleSubmit} className="p-4  rounded bg-white text-black dark:bg-gray-900 dark:text-white">
                                    <div>
                                        <label className="block text-sm font-medium">Name</label>
                                        <input
                                            // defaultValue={user?.displayName}
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full p-2 border rounded mt-1"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium">Email</label>
                                        <input
                                            // defaultValue={user?.email}
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-2 border rounded mt-1"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium">Review</label>
                                        <textarea
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            className="w-full p-2 border rounded mt-1"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium">Rating</label>
                                        <select
                                            value={rating}
                                            onChange={(e) => setRating(Number(e.target.value))}
                                            className="w-full p-2 border rounded mt-1 bg-white text-black dark:bg-gray-900 dark:text-white"
                                            required
                                        >
                                            {[5, 4, 3, 2, 1].map((star) => (
                                                <option key={star} value={star}>
                                                    {star} Star{star > 1 && "s"}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button type="submit" className="mt-4 bg-gradient-to-r text-white from-blue-500 via-purple-500 to-pink-500 hover:brightness-125 duration-300 transition px-4 py-2 rounded">
                                        Submit Review
                                    </button>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>)
            }
        </div>
        // <div>
        //     {
        //         bookedTrainer.map((booked)=><div key={booked._id}>
        //             <p>{booked.payment}</p>
        //             <p>{booked.classes?.join(", ")}</p>
        //         </div>)
        //     }
        // </div>
    )
}
