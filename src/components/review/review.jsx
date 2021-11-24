import StarsRatingView from "../stars-rating-view/stars-rating-view";
import reviewStyle from "./review.module.css";

const Review = ({className, reviewData}) => {
  const {name, shortInfo, rating, text} = reviewData;

  return (
    <div className={`${reviewStyle.review} ${className}`}>
      <div className={reviewStyle.infoBlock}>
        <p className={reviewStyle.name}>{name}</p>
        <p className={reviewStyle.shortInfo}>{shortInfo}</p>
      </div>
      <StarsRatingView count={rating}/>
      <p className={reviewStyle.text}>{text}</p>
    </div>
  );
};

export default Review;
