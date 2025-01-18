import React from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'
import { Table } from 'flowbite-react'

export default function DashboardAllTrainers() {
    const [allTrainers] = UseAllTrainers()
    return (
        <div>
            <h1 className='text-center py-10 text-black text-4xl font-bold'>All Trainers</h1>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Trainer</Table.HeadCell>
                        <Table.HeadCell>Expertise</Table.HeadCell>
                        <Table.HeadCell>Details</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            allTrainers.map((allTrainer) => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{allTrainer.name}</Table.Cell>
                                <Table.Cell>{allTrainer.expertise.map((exper, ind) => <li key={ind}>{exper}</li>)}</Table.Cell>
                                <Table.Cell>{allTrainer.details}</Table.Cell>
                                <Table.Cell>Delete</Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

