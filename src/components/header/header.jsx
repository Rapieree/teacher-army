import headerStyle from "./header.module.css";

const Header = ({children}) => {
  return (
    <header className={headerStyle.header}>
      {children}
    </header>
  );
};

export default Header;
