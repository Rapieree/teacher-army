import tariffsStyle from "./tariffs.module.css";
import CustomButton from "../custom-button/custom-button";
import TabsNav from "../tabs/tabs-nav";
import Tabs from "../tabs/tabs";
import Tab from "../tabs/tab";
import {TariffCard} from "./tariff-card";

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
