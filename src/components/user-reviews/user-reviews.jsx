import Image from "next/image";
import Review from "../review/review";
import Slider from "../slider/slider";
import userReviewsStyle from "./user-reviews.module.css";
import {ReactSVG} from "react-svg";

const Slide = ({slideData}) => {
  const {reviewData, imageSrc} = slideData;

  return (
    <div className={userReviewsStyle.slide}>
      <div className={userReviewsStyle.slideImageBlock}>
        <Image
          width={525}
          height={505}
          alt={reviewData.name}
          src={imageSrc}
          objectFit="contain"
          layout="intrinsic"
        />
        <ReactSVG src="/images/svg/icon-quote.svg" width={125} height={125} className={userReviewsStyle.quoteImage} wrapper="svg" />
      </div>
      <Review reviewData={reviewData} className={userReviewsStyle.review}/>
    </div>
  );
};


const UserReviews = ({className, content}) => {
  return (
    <section className={`${userReviewsStyle.userReviews} ${className}`}>
      <div className={userReviewsStyle.topBlock}>
        <h2 className={userReviewsStyle.title}>{content.title}</h2>
        <p className={userReviewsStyle.description}>{content.description}</p>
      </div>
      <p className={userReviewsStyle.subtitle}>{content.subtitle}</p>
      <Slider className={userReviewsStyle.slider}>
        <Slide slideData={content.slides[0]}/>
        <Slide slideData={content.slides[1]}/>
      </Slider>
    </section>
  );
};

export default UserReviews;
