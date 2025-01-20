import React from 'react'
import UsePayment from '../../../Hooks/UsePayment'
import { Table } from 'flowbite-react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import UseNewsletter from '../../../Hooks/UseNewsletter';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
export default function Balance() {
    const [payments] = UsePayment();
    const [newsLetter] = UseNewsletter();
    const totalPrice = payments.reduce((previus, current) => previus + current.price, 0);
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const chartData = [
        { name: 'Total paid members', value: payments.length },
        { name: 'Newsletter Subscriber', value: newsLetter.length },
    ];
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold underline'>Total Balance: ${totalPrice}</h1>
            <div className='flex justify-center flex-col '>
                <div className="overflow-x-auto mb-10">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>User Name</Table.HeadCell>
                            <Table.HeadCell>Email</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                payments.map((payment, index) => <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index + 1}
                                    </Table.Cell>
                                    <Table.Cell>{payment.name}</Table.Cell>
                                    <Table.Cell>{payment.email}</Table.Cell>
                                    <Table.Cell>${payment.price}</Table.Cell>
                                </Table.Row>)
                            }

                        </Table.Body>
                    </Table>
                </div>
                <div className='bg-white p-10 flex mx-auto'>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis className='text-red-500' dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="red" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <h1 className='text-center text-white text-lg font-bold'>Bar Chart</h1>
            </div>
        </div>
    )
}
