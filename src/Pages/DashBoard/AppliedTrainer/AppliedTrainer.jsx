import React from 'react'
import UseAppliedTrainer from '../../../Hooks/UseAppliedTrainer'
import { Table } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function AppliedTrainer() {
  const [appliedTrainer] = UseAppliedTrainer()
  return (
    <div>
      <h1 className='text-center py-10 text-black text-4xl font-bold underline mt-10'>Applied Trainers:  {appliedTrainer.length}</h1>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Details</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
              appliedTrainer.map((apply, index) => <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
                <Table.Cell>{apply.name}</Table.Cell>
                <Table.Cell>{apply.email}</Table.Cell>
                <Table.Cell>
                 <Link to={`/dashboard/applied-trainers-details/${apply._id}`}> <button href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    See Details
                  </button></Link>
                </Table.Cell>
              </Table.Row>)
            }

          </Table.Body>
        </Table>
      </div>
    </div>
  )
}
