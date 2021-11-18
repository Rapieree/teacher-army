import customButtonStyle from "./custom-button.module.css";

const CustomButton = ({children}) => {
  return (
    <button className={customButtonStyle.button}>
      {children}
    </button>
  );
};

export default CustomButton;
