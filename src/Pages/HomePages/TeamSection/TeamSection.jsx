import React from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'

export default function TeamSection() {
    const [allTrainers] = UseAllTrainers();
    console.log(allTrainers)
  return (
    <section className="py-12 shadow-2xl md:px-10 bg-white text-black dark:bg-gray-900 dark:text-white">
       <h2 className="text-4xl  font-bold text-center mb-8">Meet Our Trainers</h2>
    <div className="container mx-auto px-4">
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allTrainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={trainer.profileImage}
              alt={trainer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {trainer.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{trainer.background}</p>
              <h4 className="text-sm font-bold text-gray-800 mb-2">
                Areas of Expertise:
              </h4>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {trainer.expertise.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
