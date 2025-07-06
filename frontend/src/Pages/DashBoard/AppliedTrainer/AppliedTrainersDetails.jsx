import { useLoaderData, useNavigate } from 'react-router-dom'
import UseAllUsers from '../../../Hooks/UseAllUsers';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';

export default function AppliedTrainersDetails() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const { user } = useContext(AuthContext)
    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }
    const [users] = UseAllUsers();
    console.log(users)
    const axiosSecure = UseAxiosSecure();
    const applidTrainersDetails = useLoaderData();
    console.log(applidTrainersDetails);
    const navigate = useNavigate()
    const days1 = applidTrainersDetails?.day?.map((days) => days.label).join(", ");
    const skills1 = applidTrainersDetails?.skills?.map((skill) => skill).join(", ");
    const handleMakeTrainer = (userId) => {
        axiosSecure.patch(`/users/trainer/${userId}`)
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are now Trainer",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/dashboard")
            })
    }
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        console.log(data)
        
        const userInfo ={
            name:data.name,
            email:data.email,
            text: data.text
        }
        const res = await axiosSecure.post("/reject", userInfo)
        console.log(res.data)
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message has been sent",
            showConfirmButton: false,
            timer: 1500
        });
        navigate("/dashboard")
    }
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold underline pt-10'>Applied Trainer Details</h1>
            <div className="max-w-md mx-auto bg-slate-200 p-10  shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center p-4">
                    <img
                        className="w-16 h-16 rounded-full border-2 border-gray-300"
                        src={applidTrainersDetails?.image}
                        alt={applidTrainersDetails?.name}
                    />
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold text-gray-800">Name: {applidTrainersDetails?.name}</h2>
                        <p className="text-gray-500 text-sm">Email: {applidTrainersDetails?.email}</p>
                        <p className="text-gray-500 text-sm">Age: {applidTrainersDetails?.age}</p>

                    </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                    <p className="text-gray-500 text-sm ">Skills: {skills1}</p>
                    <p className="text-gray-500 text-sm ">Available Day: {days1}</p>
                </div>
                <div className="px-4 py-2 ">


                    {
                        users.map((user) => {
                            return user && user?.role !== "trainer" && user?.role !== "admin" && <Button key={user._id} onClick={() => handleMakeTrainer(user._id)} className="w-full mb-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                                confirm
                            </Button>
                        })
                    }
                    <Button className="w-full mb-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md" onClick={() => setOpenModal(true)}>Reject</Button>
                    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                        <Modal.Header />
                        <Modal.Body>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <div className="mb-2 block">
                                        <Label value='Name' />
                                    </div>
                                    <TextInput
                                        {...register("name")}
                                        value={user?.displayName}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label value='Email' />
                                    </div>
                                    <TextInput
                                        {...register("email")}
                                        value={user?.email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>
                                <div className="max-w-md">
                                    <div className="mb-2 block">
                                        <Label  value="Rejected Reason" />
                                    </div>
                                    <Textarea {...register("text")}  placeholder="Rejected Reason" required rows={4} />
                                </div>
                                <Button type='submit w-full'>Submit</Button>

                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
