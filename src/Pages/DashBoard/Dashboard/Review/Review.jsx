import UseReview from "../../../../Hooks/UseReview";

const Review = () => {
   const [reviews] = UseReview();
   console.log(reviews)
    return(
        <div>
         {reviews.length}
        </div>
    
   )
};
export default Review;