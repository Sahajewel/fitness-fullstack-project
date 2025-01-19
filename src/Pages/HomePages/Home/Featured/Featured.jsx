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
        <section className="py-16 ">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-12">Featured Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
