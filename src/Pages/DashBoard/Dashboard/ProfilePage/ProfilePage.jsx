import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../Provider/AuthProvider'
import { Button, FileInput, Label, Modal, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

export default function ProfilePage() {
    const { user } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async(data) => {
        console.log(data)
        const userInfo = {
            name: data.name,
            image: data.image
        }
        const res = await axiosPublic.patch("/users", userInfo)
        console.log(res.data)

    }

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }
    return (
        <div className='flex flex-col mx-auto items-center justify-center'>
            <h1>Name: {user?.displayName}</h1>
            <img className='h-40 w-40 rounded-full' src={user?.photoURL} alt="" />
            <p className='mb-2'>Email: {user?.email}</p>
            <Button onClick={() => setOpenModal(true)}>Edit Profile</Button>

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
                                <FileInput {...register("image")} id="file-upload" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Your email" />
                                </div>
                                <TextInput
                                    defaultValue={user?.email}
                                    placeholder="Your Email"
                                    required
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <Button type='submit'>Update Profile</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </div>
    )
}
