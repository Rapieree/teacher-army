import customInputStyle from "./custom-input.module.css";

const CustomInput = ({classname, ...nativeInputProps}) => {
  return (
    <input className={`${customInputStyle.input} ${classname}`} {...nativeInputProps} />
  );
};

export default CustomInput;
