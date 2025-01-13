import React from 'react'
import Slider from './Slider/Slider'
import Carousel from './Slider/Slider'
import Featured from './Featured/Featured'
import AboutUs from './AboutUs/AboutUs'

export default function Home() {
  return (
    <div>
      <Carousel></Carousel>
      <Featured></Featured>
      <AboutUs></AboutUs>
    </div>
  )
}
