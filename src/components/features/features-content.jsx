import LightBulbSvg from "../../assets/svg/icon-lightbulb.svg";
import NotebookSvg from "../../assets/svg/icon-notebook.svg";
import FriendlySvg from "../../assets/svg/icon-friendly.svg";
import GearSvg from "../../assets/svg/icon-gear.svg";
import FingerSvg from "../../assets/svg/icon-finger.svg";
import featuresStyle from "./features.module.css";

export const featuresContent = {
  slogan: `Your Vision, Our Future.`,
  title: `Committed to People, Committed `,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  featuresList: [
    {
      name: `Creative Ideas`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
      icon: <LightBulbSvg width="55" height="57" className={featuresStyle.icon} />,
    },
    {
      name: `Beautiful Blog`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
      icon: <NotebookSvg width="57" height="46" className={featuresStyle.icon} />,
    },
    {
      name: `User Friendly`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
      icon: <FriendlySvg width="57" height="50" className={featuresStyle.icon} />,
    },
    {
      name: `Perfect Showcase`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
      icon: <GearSvg width="57" height="57" className={featuresStyle.icon} />,
    },
    {
      name: `Easy to Use`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida`,
      icon: <FingerSvg width="47" height="57" className={featuresStyle.icon} />,
    },
  ]
};
