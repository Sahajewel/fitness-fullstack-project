import React from 'react'
import Carousel from './Slider/Slider'
import Featured from './Featured/Featured'
import AboutUs from './AboutUs/AboutUs'
import NewsLetter from './NewsLetter/NewsLetter'

export default function Home() {
  return (
    <div>
      <Carousel></Carousel>
      <Featured></Featured>
      <AboutUs></AboutUs>
      <NewsLetter></NewsLetter>
    </div>
  )
}
