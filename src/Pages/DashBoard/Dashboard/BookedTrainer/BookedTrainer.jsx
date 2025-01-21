import React, { useState } from 'react'
import UseBookedTrainer from '../../../../Hooks/UseBookedTrainer'
import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

export default function BookedTrainer() {
    const [bookedTrainer] = UseBookedTrainer();
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const axiosPublic = useAxiosPublic()

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        console.log(data)
        const textArea = {
            text: data.text
        }
        const res = await axiosPublic.post("/review", textArea)
        console.log(res.data)
          Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Added Review",
                                showConfirmButton: false,
                                timer: 1500
                            });
    }
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold'> Booked Trainer</h1>
            {
                bookedTrainer.map((trainer, index) => <div key={index} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Trainer: {trainer.trainer}
                        </h2>
                        <p className="mt-2 text-gray-600">{trainer.details}</p>

                        <div className="mt-4">
                            <h3 className="text-lg font-medium text-gray-800">Classes Info:</h3>
                            <p className="text-gray-600">{trainer.classes.map((cla, inx) => <li key={inx}>{cla}</li>)}</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-medium text-gray-800">Slot Info:</h3>
                            <p className="text-gray-600">{trainer.slot}</p>
                        </div>
                        <Button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300" onClick={() => setOpenModal(true)}>Review</Button>
                        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                            <Modal.Header />
                            <Modal.Body>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <Label htmlFor="comment" value="Feedback Review" />
                                        </div>
                                        <Textarea {...register("text")} id="comment" placeholder="Leave a comment..." required rows={4} />
                                    </div>
                                    <div className='flex justify-center my-4'>
                                        <Button type='submit'>Submit</Button>
                                    </div>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>)
            }
        </div>
    )
}
