import React from 'react'
import Carousel from './Slider/Slider'
import Featured from './Featured/Featured'
import AboutUs from './AboutUs/AboutUs'
import NewsLetter from './NewsLetter/NewsLetter'
import CommunityForum from '../../DashBoard/AddNewForum/CommunityForum'
import Review from '../../DashBoard/Dashboard/Review/Review'
import TeamSection from '../TeamSection/TeamSection'
import Voting from '../Voting/Voting'
import JoinSection from '../../../Components/JoinSection/JoinSection'
import ServicesSection from '../../../Components/ServiceSection/ServiceSection'


export default function Home() {
  return (
    <div className='w-10/12 mx-auto pb-20'>
      <Carousel></Carousel>
      <Featured></Featured>
      <div className='-mt-16'>
        <AboutUs></AboutUs>
      </div>
      <Review></Review>
      {/* <div className='-mt-20 w-full'>
        <CommunityForum></CommunityForum>
      </div> */}
      <div className='my-20'>
        <Voting></Voting>
      </div>
      <NewsLetter></NewsLetter>
      <div className='pb-20'>
        <TeamSection></TeamSection>
      </div>
     <ServicesSection></ServicesSection>
    </div>
  )
}
