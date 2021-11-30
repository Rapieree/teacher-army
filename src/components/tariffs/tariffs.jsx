import tariffsStyle from "./tariffs.module.css";
import CustomButton from "../custom-button/custom-button";
import {ReactSVG} from "react-svg";
import TabsNav from "../tabs/tabs-nav";
import Tabs from "../tabs/tabs";
import Tab from "../tabs/tab";

const TariffCard = ({tariffData}) => {
  const {type, price, duration, features, icon, buttonText} = tariffData;

  return (
    <div className={tariffsStyle.card}>
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

const Tariffs = ({className, content}) => {
  return (
    <section className={`${tariffsStyle.tariffs} ${className}`}>
      <h2 className={tariffsStyle.title}>{content.title}</h2>

      <Tabs activeClass={tariffsStyle.navActive} activeTabLabel="monthly">
        <TabsNav className={tariffsStyle.tabsNav}>
          <CustomButton className={tariffsStyle.navButton} label="monthly">Monthly</CustomButton>
          <CustomButton className={tariffsStyle.navButton} label="yearly">Yearly</CustomButton>
        </TabsNav>

        <Tab label="monthly">
          <div className={tariffsStyle.tabContent}>
            <TariffCard tariffData={content.tabFirst} />
            <TariffCard tariffData={content.tabFirst} />
          </div>
        </Tab>

        <Tab label="yearly">
          <div className={tariffsStyle.tabContent}>
            <TariffCard tariffData={content.tabSecond} />
            <TariffCard tariffData={content.tabSecond} />
          </div>
        </Tab>
      </Tabs>
    </section>
  );
};

export default Tariffs;