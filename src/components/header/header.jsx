import CustomButton from "../custom-button/custom-button";
import Logo from "../logo/logo";
import SiteNav from "../site-nav/site-nav";
import headerStyle from "./header.module.css";

const Header = ({light, className}) => {
  return (
    <header className={`${headerStyle.header} ${className}`}>
      <Logo light={light}/>
      <SiteNav light={light}/>
      <CustomButton>Get Started</CustomButton>
    </header>
  );
};

export default Header;
