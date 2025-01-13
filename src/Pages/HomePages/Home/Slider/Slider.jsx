import React, { useState, useEffect } from "react";
import banner1 from "../../../../assets/banner1.webp"
import { Link } from "react-router-dom";
const Carousel = () => {
    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co/ZJKkH5T/DALL-E-2025-01-13-23-34-44-A-dynamic-fitness-center-with-people-working-out-lifting-weights-and-exer.webp",
            title: "Transform Your Fitness Journey",
            description: "Step into a world of fitness where every workout brings you closer to your goals. Experience personalized training, motivating classes, and the support you need to succeed."
        },
        {
            id: 2,
            image: "https://i.ibb.co/ThRKmYY/DALL-E-2025-01-13-23-41-42-A-modern-and-dynamic-fitness-center-banner-with-people-working-out-showin.webp",
            title: "Strength and Endurance Awaits",
            description: "Push your limits with our expert trainers and state-of-the-art equipment. Build strength, endurance, and confidence with every session.",
        },
        {
            id: 3,
            image: "https://i.ibb.co/Sm0yY4L/DALL-E-2025-01-13-23-42-46-A-vibrant-fitness-center-banner-showcasing-a-group-of-people-participatin.webp",
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
        <div className="relative w-full h-96 overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full h-96 flex-shrink-0"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="bg-black bg-opacity-50 text-white flex flex-col items-center justify-center h-full">
                            <h2 className="text-2xl font-bold p-4">{slide.title}</h2>
                            <p className="mt-2 p-4">{slide.description}</p>
                            <Link><button className="btn">Click</button></Link>
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
