import { Table } from "flowbite-react";
import UseNewsletter from "../../../Hooks/UseNewsletter";
import { Helmet } from "react-helmet";
export default function AllNewsLettersSubscriber() {
    const [newsLetter] = UseNewsletter()
    return (
        <div className="bg-white shadow-2xl text-black dark:bg-gray-900 dark:text-white md:px-10 md:pb-10">
             <Helmet>
             <title>Dashboard | all-newsletter-subscribers</title>
           </Helmet>
            <h1 className='text-center  underline text-4xl font-bold mb-8 pt-10'>All Newsletter Subscriber</h1>
            <h1 className="mb-5 text-xl  ">Newsletter subscriber: {newsLetter.length}</h1>
            <div className="overflow-x-auto">
                <Table className="shadow-2xl">
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y shadow-2xl">
                        {
                            newsLetter.map((news, index) => <Table.Row key={news._id} className="shadow-2xl bg-white text-black dark:bg-gray-900 dark:text-white">
                                <Table.Cell className="whitespace-nowrap font-medium shadow-2xl">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell className="shadow-2xl">{news.name}</Table.Cell>
                                <Table.Cell className="shadow-2xl">{news.email}</Table.Cell>
                            </Table.Row>)
                        }



                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
