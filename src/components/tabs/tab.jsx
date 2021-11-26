import React from "react";

const Tab = ({children}) => {
  return (
    React.Children.map(children, (child) => child)
  );
};

export default Tab;
