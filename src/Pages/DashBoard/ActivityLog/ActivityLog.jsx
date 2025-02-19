import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'
import { FaEye } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { Button, Label, Modal, Textarea } from 'flowbite-react';

export default function ActivityLog() {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }
    const { data: rejects = [] } = useQuery({
        queryKey: ["rejects", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get("https://assignment-12-server-black-kappa.vercel.app/reject")
            console.log(res.data)
            return res.data
        }

    })

    return (
        <div className='shadow-2xl'>
            <h1 className='text-center py-10   text-4xl font-bold underline'>Activity Log</h1>
            <div className='md:flex justify-center gap-20 my-10 p-10 '>
                <h1 className='text-blck text-xl'>Name: {user?.displayName}</h1>
                <h1 className=' text-xl'>Email: {user?.email}</h1>
                <button className=' text-xl'></button>
                <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:brightness-125 duration-300 transition p-3' onClick={() => setOpenModal(true)}><FaEye className='text-white'></FaEye></button>
                <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Rejected reason" />
                            </div>

                            <ul>
                                {rejects.map((reject, index) => (
                                    <li key={index}>

                                        <Textarea defaultValue={reject.text} id="comment" placeholder="Leave a comment..." required rows={4} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        </div>
    )
}
