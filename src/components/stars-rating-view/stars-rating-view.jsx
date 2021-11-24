import RatingStarSvg from "../../assets/svg/icon-rating-star.svg";
import starsRatingViewStyle from "./stars-rating-view.module.css";

const StarsRatingView = ({count, className}) => {
  const getStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
          <RatingStarSvg
            key={i}
            width="32"
            height="32"
            className={`${starsRatingViewStyle.star} ${i < count ? starsRatingViewStyle.activeStar : ``}`}
          />
      );
    }
    return stars;
  };

  return (
    <div className={`${starsRatingViewStyle.starsRating} ${className}`}>
      {getStars().map((star) => star)}
    </div>
  );
};

export default StarsRatingView;
