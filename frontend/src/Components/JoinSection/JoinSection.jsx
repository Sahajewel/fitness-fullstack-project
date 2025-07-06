import { motion } from "framer-motion";

const JoinSection = () => {
    return (
        <section className="relative w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left Side - Text Content */}
                <div className="text-center md:text-left md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-extrabold text-white"
                    >
                        Join Our Fitness Community
                    </motion.h2>
                    <p className="text-lg text-gray-200 mt-4">
                        Take your fitness journey to the next level with expert trainers, world-class facilities, and a supportive community.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold text-lg rounded-xl shadow-md hover:bg-gray-100 transition"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Right Side - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
                >
                    <img
                        src="/assets/fitness-group.png"
                        alt="Fitness Community"
                        className="w-full max-w-md rounded-xl shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default JoinSection;
