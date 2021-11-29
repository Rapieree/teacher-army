import customButtonStyle from "./custom-button.module.css";

const CustomButton = ({children, className}) => {
  return (
    <button className={`${customButtonStyle.button} ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
