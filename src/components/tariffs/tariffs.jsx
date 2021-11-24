import {tariffsContent} from "./tariffs-content";
import tariffsStyle from "./tariffs.module.css";
import FeatureMarkSvg from "../../assets/svg/icon-feature-mark.svg";
import CustomButton from "../custom-button/custom-button";
import NotchSvg from "../../assets/svg/icon-notch.svg";

const content = tariffsContent;

const TariffCard = ({tariffData}) => {
  const {type, price, duration, features, icon, buttonText} = tariffData;

  return (
    <div className={tariffsStyle.card}>
      <div className={tariffsStyle.topIcon}>
        <NotchSvg className={tariffsStyle.notch} width="202" height="80" />
        {icon}
      </div>
      <p className={tariffsStyle.type}>{type}</p>
      <p className={tariffsStyle.price}>{price}</p>
      <p className={tariffsStyle.duration}>{duration}</p>
      <ul className={tariffsStyle.list}>
        {
          features.map((feature) => {
            return (
              <li key={feature} className={tariffsStyle.item}>
                <FeatureMarkSvg className={tariffsStyle.itemIcon} width="20" height="20" />
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

const Tariffs = ({className}) => {
  return (
    <section className={`${tariffsStyle.tariffs} ${className}`}>
      <h2 className={tariffsStyle.title}>{content.title}</h2>
      <div className={tariffsStyle.tabsNav}>
        <CustomButton className={`${tariffsStyle.navButton} ${tariffsStyle.navActive}`}>{content.tabsNav[0]}</CustomButton>
        <CustomButton className={tariffsStyle.navButton}>{content.tabsNav[1]}</CustomButton>
      </div>
      <div className={tariffsStyle.tabContent}>
        <TariffCard tariffData={content.tabFirst} />
        <TariffCard tariffData={content.tabFirst} />
      </div>
    </section>
  );
};

export default Tariffs;
