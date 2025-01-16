import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AllTrainersCard({allTrainer}) {
    
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 ">
            {/* Trainer Image */}
            <img
                src={allTrainer.profileImage}
                alt={allTrainer.name}
                className="w-full h-48 object-cover rounded-md"
            />
            {/* Trainer Name */}
            <h2 className="text-lg font-bold text-gray-800 mt-4">Trainer: {allTrainer.name}</h2>
            {/* Years of Experience */}
            <p className="text-sm text-gray-600">Experience: {allTrainer.experience} years</p>
            {/* Social Icons */}
            <div className="flex mt-2 gap-3 text-blue-500">
                <a href={allTrainer.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </a>
                <a href={allTrainer.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a>
                <a href={allTrainer.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
                </a>
            </div>
            {/* Available Slots */}
            <h3 className="text-md font-bold text-blue-600 underline mt-4">Available Slots:</h3>
            <div className="flex flex-col gap-2 mt-2">
                {allTrainer.availableSlots.map((slot, index) => (
                    <button
                        key={index}
                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-100 text-sm text-gray-700"
                    >
                        {slot}
                    </button>
                ))}
            </div>
            {/* Know More Button */}
            <Link to={`/trainer-details/${allTrainer._id}`}><button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Know More
            </button></Link>
        </div>
    )
}
