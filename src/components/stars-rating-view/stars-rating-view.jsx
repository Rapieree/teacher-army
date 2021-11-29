import {ReactSVG} from "react-svg";
import starsRatingViewStyle from "./stars-rating-view.module.css";

const getStars = (count) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
        <ReactSVG
          src="/images/svg/icon-rating-star.svg"
          key={i}
          width="32"
          height="32"
          wrapper="svg"
          className={`${starsRatingViewStyle.star} ${i < count ? starsRatingViewStyle.activeStar : ``}`}
        />
    );
  }
  return stars;
};

const StarsRatingView = ({count, className}) => {
  return (
    <div className={`${starsRatingViewStyle.starsRating} ${className}`}>
      {getStars(count)}
    </div>
  );
};

export default StarsRatingView;
