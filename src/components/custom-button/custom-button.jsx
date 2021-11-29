import customButtonStyle from "./custom-button.module.css";

const CustomButton = ({children, className, ...nativeButtonsProps}) => {
  return (
    <button className={`${customButtonStyle.button} ${className}`} {...nativeButtonsProps}>
      {children}
    </button>
  );
};

export default CustomButton;
