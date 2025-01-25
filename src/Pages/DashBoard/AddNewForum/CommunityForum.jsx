import React from 'react'
import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import UseForymCommunity from '../../../Hooks/UseForymCommunity';
import Voting from '../../HomePages/Voting/Voting';
import Home from '../../HomePages/Home/Home';

export default function CommunityForum() {
    const axiosPublic = useAxiosPublic();
    const [communityForum] = UseForymCommunity()
    return (
        <div className='pb-20'>
            <h1 className='text-center py-10  text-4xl font-bold text-white underline'>Community Forum</h1>
            <div className="flex flex-col gap-10">
                {communityForum.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                    >

                        <p className=" text-md mb-3">
                            <span className='text-lg font-bold'>Routine:</span>  <span className="font-medium  text-gray-800"> {category.routine}</span>
                        </p>
                        <p className="text-md mb-3">
                        <span className='text-lg font-bold'>Fitness Tips:</span> <span className="font-medium text-gray-800"> {category.fitnessTips}</span>
                        </p>
                        <p className="text-md mb-3">
                        <span className='text-lg font-bold'>LifeStyle:</span> <span className="font-medium text-gray-800"> {category.lifeStyle}</span>
                        </p>
                        <p className="text-md mb-3">
                        <span className='text-lg font-bold'>WeightLoss:</span>  <span className="font-medium text-gray-800"> {category.weightLoss}</span>
                        </p>
                        <p className="text-md mb-3">
                        <span className='text-lg font-bold'>Cardio:</span>  <span className="font-medium text-gray-800"> {category.cardio}</span>
                        </p>
                        <p className="text-md mb-3">
                        <span className='text-lg font-bold'>Yoga:</span> <span className="font-medium text-gray-800"> {category.yoga}</span>
                        </p>
                        <p className="text-md mb-3">
                        <span className='text-lg font-bold'>Nutrition:</span> <span className="font-medium text-gray-800"> {category.nutrition}</span>
                        </p>
                        <p className="text-md mb-3">
                        <span className='text-lg font-bold'>Healthy Recipes:</span>  <span className="font-medium text-gray-800"> {category.healthyRecipes}</span>
                        </p>
                    </div>
                ))}
            </div>
            {/* {
                <Home></Home>? <CommunityForum></CommunityForum> : <communityForum></communityForum> && <Voting></Voting>
            } */}
           <Voting></Voting>
        </div>
    )
}
