import React from "react";

const TabsNav = ({className, children, activeClass, onControlClick, activeLabel}) => {
  return (
    <div className={className} >
      {
        React.Children.map(children, (child) => {
          return (
            <child.type
              onClick={() => onControlClick(child.props.label)}
              key={child.props.label}
              {...child.props}
              className={`${child.props.className} ${child.props.label === activeLabel ? activeClass : ``}`}
            />
          );
        })
      }
    </div>
  );
};

export default TabsNav;
