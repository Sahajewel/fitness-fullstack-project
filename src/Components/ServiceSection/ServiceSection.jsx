import ser1 from "../../assets/ser-1.webp"
import ser2 from "../../assets/ser-2.webp"
import ser3 from "../../assets/ser-3.webp"
const ServicesSection = () => {
    return (
        <section className="bg-white shadow-2xl text-black dark:bg-gray-900 dark:text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold ">
                    Our Fitness Services
                </h2>
                <p className="text-lg  mt-4">
                    Explore our wide range of services designed to help you achieve your fitness goals.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 ">
                    {/* Personal Training */}
                    <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                        <img
                            src={ser1}
                            alt="Personal Training"
                            className="w-24 h-24 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold ">Personal Training</h3>
                        <p className=" mt-3">
                            Our expert trainers will design personalized fitness plans to help you reach your full potential.
                        </p>
                    </div>

                    {/* Group Classes */}
                    <div className=" p-6 border rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                        <img
                            src={ser1}
                            alt="Group Classes"
                            className="w-24 h-24 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold ">Group Classes</h3>
                        <p className=" mt-3">
                            Join our energetic group classes and enjoy working out with others in a motivating and fun environment.
                        </p>
                    </div>

                    {/* Wellness Programs */}
                    <div className=" p-6 border rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                        <img
                            src={ser3}
                            alt="Wellness Programs"
                            className="w-24 h-24 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold ">Wellness Programs</h3>
                        <p className=" mt-3">
                            Our wellness programs focus on overall health, from nutrition advice to stress management and recovery.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
