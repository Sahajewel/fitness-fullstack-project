import React, { useState, useEffect } from "react";
import banner1 from "../../../../assets/banner1.webp"
import { Link } from "react-router-dom";
const Carousel = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Transform Your Fitness Journey",
            description: "Step into a world of fitness where every workout brings you closer to your goals. Experience personalized training, motivating classes, and the support you need to succeed."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Strength and Endurance Awaits",
            description: "Push your limits with our expert trainers and state-of-the-art equipment. Build strength, endurance, and confidence with every session.",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Achieve Your Best Self",
            description: "Whether you’re a beginner or a pro, our fitness center is the perfect place to challenge yourself, grow stronger, and become the best version of you",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 4000); // Auto-slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[600px] overflow-hidden pt-30">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full h-[600px] flex-shrink-0"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="bg-black bg-opacity-50 text-white flex flex-col items-center justify-center h-full">
                            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold p-4">{slide.title}</h2>
                            <p className="mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-lg p-4 mx-10">{slide.description}</p>

                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
