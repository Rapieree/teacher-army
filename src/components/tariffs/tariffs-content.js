import FireSvg from "../../assets/svg/icon-fire.svg";
import HeartsSvg from "../../assets/svg/icon-hearts.svg";

export const tariffsContent = {
  title: `Without Extra Charge Choose Your Best Plan`,
  tabsNav: [
    `Monthly`,
    `Yearly`,
  ],
  tabFirst: {
    icon: <FireSvg width="29" height="38" />,
    type: `Standard`,
    price: `$29`,
    duration: `monthly pack`,
    features: [
      `256 GB SSD STORE`,
      `FULL UI KIT DOWNLOAD`,
      `PUBLIC API`,
      `FULL UI PACK DOWNLOAD`,
      `24/7 SUPPORT`,
    ],
    buttonText: `Install Pack`,
  },
  tabSecond: {
    icon: <HeartsSvg width="47" height="36" />,
    type: `NoN Standart`,
    price: `$666`,
    duration: `creepy pack`,
    features: [
      `3301 GB SSD STORE`,
      `FULL UI KIT DOWNLOAD`,
      `PUBLIC API`,
      `FULL UI PACK DOWNLOAD`,
      `14/08 SUPPORT`,
    ],
    buttonText: `Install Pack`,
  },
};
