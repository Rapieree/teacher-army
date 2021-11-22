import {socialsContent} from "./socials-content";
import socialsStyle from "./socials.module.css";

const content = socialsContent;

const Socials = () => {
  return (
    <ul className={socialsStyle.list}>
      {
        content.map((link) => {
          return (
            <li key={link.name} className={socialsStyle.item}>
              <a href={link.href} className={socialsStyle.link}>
                {link.image}
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
