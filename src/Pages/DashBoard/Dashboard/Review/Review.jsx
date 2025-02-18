import { useContext, useState } from "react";
import UseReview from "../../../../Hooks/UseReview";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Review = () => {
   const [reviews] = UseReview();
   const [currentIndex, setCurrentIndex] = useState(0);
   const { user } = useContext(AuthContext)
   const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
   };

   const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 3 + reviews.length) % reviews.length);
   };

   const renderStars = (rating) => {
      return Array(5)
         .fill(0)
         .map((_, index) => (
            <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
               ★
            </span>
         ));
   };
   return (
      <div className="w-full p-4 -mt-16">
         <h2 className="text-4xl font-bold text-white text-center underline mb-10">Testimonials</h2>
         {reviews.length > 0 ? (
            <div className="relative">
               <div className="flex gap-4 overflow-hidden">
                  {reviews
                     .slice(currentIndex, currentIndex + 3)
                     .map((review, index) => (
                        <div
                           key={index}
                           className="bg-white rounded-xl shadow-lg p-4 w-1/3 min-w-[300px] flex-shrink-0"
                        >
                           <h3 className="text-lg font-semibold">Name: {review?.name}</h3>
                           <h3 className="text-lg font-semibold">Email: {review?.email}</h3>
                           <div className="mt-2">{renderStars(review.rating)}</div>
                           <p className="text-sm text-gray-800 mt-2">{review.text}</p>
                        </div>
                     ))}
               </div>

               <button
                  onClick={handlePrev}
                  className="absolute -left-14 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
               >
                  Prev
               </button>
               <button
                  onClick={handleNext}
                  className="absolute -right-14 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
               >
                  Next
               </button>
            </div>
         ) : (
            <p className="text-center">No reviews available</p>
         )}
      </div>


   )
};
export default Review;