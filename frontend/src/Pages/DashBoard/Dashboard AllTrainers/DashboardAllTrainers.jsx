import React from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'
import { Table } from 'flowbite-react'
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

export default function DashboardAllTrainers() {
    const [allTrainers, refetch] = UseAllTrainers();
    const axiosSecure = UseAxiosSecure()
    const handleDelete = async(id)=>{
        const res = await axiosSecure.delete(`/all-trainer/${id}`)
        if(res.data.deletedCount >0){
            refetch()
             Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Succefully Deleted Trainer",
                        showConfirmButton: false,
                        timer: 1500
                      });
        }
    }
    return (
        <div className='bg-white text-black dark:bg-gray-900 dark:text-white shadow-2xl md:px-10'>
             <Helmet>
             <title>Dashboard | all-trainers</title>
           </Helmet>
            <h1 className='text-center py-10  underline text-4xl font-bold'>All Trainers</h1>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Trainer</Table.HeadCell>
                        <Table.HeadCell>Expertise</Table.HeadCell>
                        <Table.HeadCell>Details</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            allTrainers.map((allTrainer) => <Table.Row className="">
                                <Table.Cell className="whitespace-nowrap font-medium ">{allTrainer.name}</Table.Cell>
                                <Table.Cell>{allTrainer.expertise.map((exper, ind) => <li key={ind}>{exper}</li>)}</Table.Cell>
                                <Table.Cell>{allTrainer.details}</Table.Cell>
                                <Table.Cell ><button onClick={()=>handleDelete(allTrainer._id)}>Delete</button></Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

