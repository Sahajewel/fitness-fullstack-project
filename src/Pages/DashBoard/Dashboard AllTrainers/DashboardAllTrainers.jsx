import React from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'
import { Table } from 'flowbite-react'
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

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
        <div>
            <h1 className='text-center py-10 text-black text-4xl font-bold'>All Trainers</h1>
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
                            allTrainers.map((allTrainer) => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{allTrainer.name}</Table.Cell>
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

