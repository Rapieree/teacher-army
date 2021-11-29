import {useRouter} from "next/dist/client/router";
import Link from "next/link";
import {navsItems} from "../../utils/const";
import siteNavStyle from "./site-nav.module.css";

const getItemLinkClasses = (hrefLink, activeUrl, islight) => {
  let outClasses = siteNavStyle.item;
  outClasses += hrefLink === activeUrl ? ` ${siteNavStyle.active}` : ``;
  outClasses += islight ? ` ${siteNavStyle.light}` : ``;

  return outClasses;
};

const SiteNav = ({light}) => {
  const router = useRouter();

  return (
    <nav>
      <ul className={siteNavStyle.list}>
        {navsItems.map(([name, href]) => {
          return (
            <li key={name} className={getItemLinkClasses(href, router.pathname, light)}>
              <Link href={href}>
                <a className={siteNavStyle.link}>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SiteNav;
