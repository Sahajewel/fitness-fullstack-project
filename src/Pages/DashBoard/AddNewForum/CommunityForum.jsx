import React from 'react'
import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import UseForymCommunity from '../../../Hooks/UseForymCommunity';
import Voting from '../../HomePages/Voting/Voting';
import Home from '../../HomePages/Home/Home';
import { Helmet } from 'react-helmet';

export default function CommunityForum() {
    const axiosPublic = useAxiosPublic();
    const [communityForum] = UseForymCommunity()
    return (
        <div className='py-28 mt-10 mb-20 w-10/12  mx-auto bg-white text-black dark:bg-gray-900 dark:text-white shadow-2xl md:px-10'>
            <Helmet>
                <title>Home | community</title>
            </Helmet>
            <h1 className='text-center py-10  text-4xl font-bold  underline'>Community Forum</h1>
            <div className="flex flex-col gap-10 shadow-2xl space-y-5">
                {communityForum.map((category, index) => (
                    <div
                        key={index}
                        className=" shadow-lg rounded-lg p-6  transform transition-all duration-300 cursor-pointer "
                    >

                        <p className=" text-md mb-3">
                            <span className='text-lg font-bold'>Routine:</span>  <span className="font-medium "> {category.routine}</span>
                        </p>
                        <p className="text-md mb-3">
                            <span className='text-lg font-bold'>Fitness Tips:</span> <span className="font-medium"> {category.fitnessTips}</span>
                        </p>
                        <p className="text-md mb-3">
                            <span className='text-lg font-bold'>LifeStyle:</span> <span className="font-medium "> {category.lifeStyle}</span>
                        </p>
                        <p className="text-md mb-3">
                            <span className='text-lg font-bold'>WeightLoss:</span>  <span className="font-medium "> {category.weightLoss}</span>
                        </p>
                        <p className="text-md mb-3">
                            <span className='text-lg font-bold'>Cardio:</span>  <span className="font-medium "> {category.cardio}</span>
                        </p>
                        <p className="text-md mb-3">
                            <span className='text-lg font-bold'>Yoga:</span> <span className="font-medium "> {category.yoga}</span>
                        </p>
                        <p className="text-md mb-3">
                            <span className='text-lg font-bold'>Nutrition:</span> <span className="font-medium "> {category.nutrition}</span>
                        </p>
                        <p className="text-md mb-3">
                            <span className='text-lg font-bold'>Healthy Recipes:</span>  <span className="font-medium "> {category.healthyRecipes}</span>
                        </p>
                    </div>
                ))}
            </div>
            {/* {
                <Home></Home>? <CommunityForum></CommunityForum> : <communityForum></communityForum> && <Voting></Voting>
            } */}
            {/* <div className='mt-20'>
                <Voting></Voting>
            </div> */}
        </div>
    )
}
