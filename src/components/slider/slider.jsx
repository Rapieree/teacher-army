import {useState} from "react";
import sliderStyle from "./slider.module.css";

const Slider = ({className, children = []}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const checkIndex = (index) => {
    return Array.isArray(children) & children.hasOwnProperty(index) ? true : false;
  };

  return (
    <div className={`${sliderStyle.Slider} ${className}`}>
      <div className={sliderStyle.wrapper}>
        <div className={sliderStyle.slide}>
          {Array.isArray(children) ? children[currentSlideIndex] : children}
        </div>
      </div>
      <div className={sliderStyle.controls}>
        <button
          className={sliderStyle.controlPrev}
          type="button"
          aria-label="Previous slide"
          disabled = {checkIndex(currentSlideIndex - 1) ? false : true}
          onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)}
        ></button>
        <button
          className={sliderStyle.controlNext}
          type="button"
          aria-label="Next slide"
          disabled = {checkIndex(currentSlideIndex + 1) ? false : true}
          onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)}
        ></button>
      </div>
    </div>
  );
};

export default Slider;
