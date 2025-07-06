import React from "react";

const Featured = () => {
    const features = [
        {
            title: "Personalized Training Plans",
            description:
                "Get a fitness plan tailored to your unique goals, helping you stay on track and achieve real results.",
            icon: "💪",
        },
        {
            title: "Expert Trainers",
            description:
                "Train with certified professionals who provide guidance, motivation, and expertise to help you succeed.",
            icon: "🏋️‍♂️",
        },
        {
            title: "State-of-the-Art Equipment",
            description:
                "Work out with the latest fitness equipment to optimize your training and reach peak performance.",
            icon: "🛠️",
        },
        {
            title: "Group Classes & Workshops",
            description:
                "Join group classes and workshops that offer fun, dynamic workouts and foster a supportive community.",
            icon: "👯‍♂️",
        },
        {
            title: "Nutritional Guidance",
            description:
                "Receive expert advice on nutrition to complement your fitness journey and enhance results.",
            icon: "🥗",
        },
        {
            title: "24/7 Access",
            description:
                "Enjoy the flexibility of working out anytime with round-the-clock access to our fitness center.",
            icon: "🕒",
        },
    ];

    return (
        <section className="mt-24 pb-10 shadow-2xl md:px-10 bg-white text-black dark:bg-gray-900 dark:text-white">
             <h2 className="text-4xl  underline font-bold py-12 mb-12 text-center ">Featured Features</h2>
            <div className="container mx-auto text-center">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className=" p-6 rounded-lg shadow-md hover:shadow-xl transition-all border "
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
