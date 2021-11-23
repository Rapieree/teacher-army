import customButtonStyle from "./custom-button.module.css";

const CustomButton = ({children, className, ...state}) => {
  return (
    <button className={`${customButtonStyle.button} ${className}`} {...state}>
      {children}
    </button>
  );
};

export default CustomButton;
