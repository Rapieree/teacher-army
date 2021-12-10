import tariffsStyle from "./tariffs.module.css";
import CustomButton from "../custom-button/custom-button";
import {ReactSVG} from "react-svg";

export const TariffCard = ({tariffData, className}) => {
  const {type, price, duration, features, icon, buttonText} = tariffData;

  return (
    <div className={`${tariffsStyle.card} ${className}`}>
      <div className={tariffsStyle.topIcon}>
        <ReactSVG src="/images/svg/icon-notch.svg" className={tariffsStyle.notch} width="202" height="80" wrapper="svg" />
        <ReactSVG src={icon.src} className={tariffsStyle.icon} width={icon.width} height={icon.height} wrapper="svg"/>
      </div>
      <p className={tariffsStyle.type}>{type}</p>
      <p className={tariffsStyle.price}>{price}</p>
      <p className={tariffsStyle.duration}>{duration}</p>
      <ul className={tariffsStyle.list}>
        {
          features.map((feature) => {
            return (
              <li key={feature} className={tariffsStyle.item}>
                <ReactSVG
                  src="/images/svg/icon-feature-mark.svg"
                  className={tariffsStyle.itemIcon}
                  width="24"
                  height="24"
                  wrapper="svg"
                />
                <span>{feature}</span>
              </li>
            );
          })
        }
      </ul>
      <CustomButton className={tariffsStyle.cardButton}>{buttonText}</CustomButton>
    </div>
  );
};
