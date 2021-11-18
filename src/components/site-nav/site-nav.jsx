import Link from "next/link";
import {navsItems} from "../../utils/const";
import siteNavStyles from "./site-nav.module.css";

const SiteNav = ({currentUrl}) => {
  return (
    <nav>
      <ul className={siteNavStyles.list}>
        {navsItems.map(([name, href]) => {
          return (
            <li key={name} className={currentUrl !== href ? siteNavStyles.item : `${siteNavStyles.item} ${siteNavStyles.active}`}>
              <Link href={href}>
                <a className={siteNavStyles.link}>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SiteNav;
