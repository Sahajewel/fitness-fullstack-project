import { useLoaderData } from 'react-router-dom'

export default function AppliedTrainersDetails() {
    const applidTrainersDetails = useLoaderData();
    console.log(applidTrainersDetails)
    const days1 = applidTrainersDetails?.day.map((days)=>days.label).join(", ");
    const skills1 = applidTrainersDetails?.skills.map((skill)=>skill).join(", ")
    return (
        <div>
            <h1 className='text-center py-10 text-black text-4xl font-bold underline pt-10'>Applied Trainer Details</h1>
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
                <div className="px-4 py-2">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-2">
                        Confirm
                    </button>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                        Rejected
                    </button>
                </div>
            </div>
        </div>
    )
}
