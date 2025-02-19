import React from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'
import { Button, Table } from 'flowbite-react';
import { Helmet } from 'react-helmet';

export default function ManageSlot() {
    const [allTrainers] = UseAllTrainers();

    return (
        <div className='shadow-2xl'>
             <Helmet>
             <title>Dashboard | manage-slot</title>
           </Helmet>
            <h1 className='text-center py-10 underline  text-4xl font-bold'>Manage Slots</h1>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Slots</Table.HeadCell>
                        <Table.HeadCell className="text-left">Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {allTrainers.map((trainer, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    {trainer.availableSlots?.map((slot, slotIndex) => (
                                        <Button key={slotIndex} className="mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 duration-300 hover:brightness-125 transition">
                                            {slot}
                                        </Button>
                                    ))}
                                </Table.Cell>
                                <Table.Cell className="text-right">
                                    {trainer.availableSlots?.map((slot, slotIndex) => (
                                        <Button  key={slotIndex} className="mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 duration-300 hover:brightness-125 transition">
                                            Delete
                                        </Button>
                                    ))}
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
