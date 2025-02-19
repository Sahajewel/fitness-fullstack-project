import { Card } from "flowbite-react";
import {  useLoaderData } from 'react-router-dom'

export default function TrainerDetails() {
    const loader = useLoaderData()
    console.log(loader)
    return (

        <div className="shadow-2xl bg-white text-black dark:bg-gray-900 dark:text-white mx-auto mb-20 w-10/12 md:px-10">
            <h1 className='text-center py-10  text-4xl font-bold ' >Trainer Info</h1>
            <div className='md:flex justify-center items-center gap-10 p-10'>
                <div >

                    <h1 className='text-center py-10  text-4xl font-bold underline'>Trainer Info</h1>
                    <div>
                        <Card
                            className="max-w-sm"
                            imgSrc={loader.profileImage} imgAlt={loader.name}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Trainer: {loader.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {loader.details}
                            </p>
                            <p className="text-bold"><span className="font-bold">Expertise:</span> {loader.expertise.map((exper, ind) => <li key={ind}>
                                {exper}
                            </li>)}</p>
                            <p ><span className="font-bold">Background: </span>  {loader.background}</p>
                            <p><span className="font-bold">Qualifications:</span> {loader.qualifications.map((quali, ind) => <li key={ind}>{quali}</li>)}</p>
                        </Card>
                    </div>

                </div>
               
            </div >
            
        </div>


    )
}

