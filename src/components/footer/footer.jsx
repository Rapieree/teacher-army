import LinksList from "../linksList/links-list";
import Logo from "../logo/logo";
import Socials from "../socials/socials";
import {footerContent} from "./footer-content";
import footerStyle from "./footer.module.css";

const content = footerContent;

const Footer = ({className}) => {
  return (
    <footer className={`${footerStyle.footer} ${className}`}>
      <div className={footerStyle.block}>
        <Logo light className={footerStyle.logo}/>
        <Socials />
      </div>
      <div className={`${footerStyle.linksBlock}`}>
        <LinksList
          title={content.shortLinks.title}
          linksData={content.shortLinks.linksData}
          className={footerStyle.linksList}
        />
        <LinksList
          title={content.helpLinks.title}
          linksData={content.helpLinks.linksData}
          className={footerStyle.linksList}
        />
        <LinksList
          title={content.otherLinks.title}
          linksData={content.otherLinks.linksData}
          className={footerStyle.linksList}
        />
      </div>
    </footer>
  );
};

export default Footer;
