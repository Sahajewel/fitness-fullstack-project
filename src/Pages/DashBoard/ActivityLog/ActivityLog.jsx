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
        <div>
            <h1 className='text-center py-10 text-white  text-4xl font-bold underline'>activity Log</h1>
            <div className='md:flex justify-center gap-20 my-10 bg-gray-400 p-10 '>
                <h1 className='text-white text-xl'>Name: {user?.displayName}</h1>
                <h1 className='text-white text-xl'>Email: {user?.email}</h1>
                <button className='text-black text-xl'></button>
                <Button onClick={() => setOpenModal(true)}><FaEye></FaEye></Button>
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
