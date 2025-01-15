import { Table } from "flowbite-react";
import UseNewsletter from "../../../Hooks/UseNewsletter";
export default function AllNewsLettersSubscriber() {
    const [newsLetter] = UseNewsletter()
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-8'>All Newsletter Subscriber</h1>
            <h1 className="mb-5">newsletter subscriber: {newsLetter.length}</h1>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            newsLetter.map((news, index) => <Table.Row key={news._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell>{news.name}</Table.Cell>
                                <Table.Cell>{news.email}</Table.Cell>
                            </Table.Row>)
                        }



                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
