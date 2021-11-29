import {ReactSVG} from "react-svg";
import socialsStyle from "./socials.module.css";

const Socials = ({content}) => {
  return (
    <ul className={socialsStyle.list}>
      {
        content.map((link) => {
          return (
            <li key={link.name} className={socialsStyle.item}>
              <a href={link.href} className={socialsStyle.link}>
                <ReactSVG src={link.icon.src} width={link.icon.width} height={link.icon.height} wrapper="svg" />
                <span className="visually-hidden">{link.name}</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

export default Socials;
