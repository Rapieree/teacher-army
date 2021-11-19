import {useRouter} from "next/dist/client/router";
import Link from "next/link";
import {navsItems} from "../../utils/const";
import siteNavStyles from "./site-nav.module.css";

const SiteNav = ({light}) => {
  const router = useRouter();

  const getItemLinkClasses = (hrefLink, activeUrl, islight) => {
    let outClasses = siteNavStyles.item;
    outClasses += hrefLink === activeUrl ? ` ${siteNavStyles.active}` : ``;
    outClasses += islight ? ` ${siteNavStyles.light}` : ``;

    return outClasses;
  };

  return (
    <nav>
      <ul className={siteNavStyles.list}>
        {navsItems.map(([name, href]) => {
          return (
            <li key={name} className={getItemLinkClasses(href, router.pathname, light)}>
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
