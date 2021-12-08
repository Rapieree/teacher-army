import customLabelStyle from "./custom-label.module.css";

const getlabelClassnames = (type, extraClasses) => {
  let outClassnames = `${customLabelStyle.label} ${extraClasses}`;

  switch (type) {
    case `inputDescription`:
      outClassnames += ` ${customLabelStyle.descriptoin}`;
      break;
  }

  return outClassnames;
};

const CustomLabel = ({type = `InputDescription`, children, className, ...nativeLabelProps}) => {
  return (
    <label className={getlabelClassnames(type, className)} {...nativeLabelProps}>{children}</label>
  );
};

export default CustomLabel;
