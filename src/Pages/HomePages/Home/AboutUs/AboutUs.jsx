import React from "react";

const AboutUs = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto flex flex-col items-center lg:flex-row lg:space-x-12">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <img
                        src="https://via.placeholder.com/600x400" // Replace with your image
                        alt="Fitness Center"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
                    <p className="text-xl text-gray-600 mb-6">
                        Welcome to Tokyo Fitness Center, where your fitness journey begins! We are committed to helping you
                        achieve your fitness goals with state-of-the-art equipment, expert trainers, and a motivating community.
                        Whether you are looking to lose weight, build muscle, or just stay active, our center provides everything you
                        need to succeed.
                    </p>
                    <p className="text-xl text-gray-600">
                        Join us and experience a personalized approach to fitness that is designed to inspire and transform your
                        body and mind. Together, we will help you become the best version of yourself.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
