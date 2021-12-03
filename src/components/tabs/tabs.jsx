import React, {useState} from "react";
import Tab from "./tab";
import TabsNav from "./tabs-nav";

const Tabs = ({children, activeClass, activeTabLabel}) => {
  const [nav] = React.Children.map(children, (child) => child.type.name === TabsNav.name ? child : null);
  const contents = React.Children.map((children), (child) => child.type.name === Tab.name ? child : null);

  const [activeLabel, setActiveLabel] = useState(activeTabLabel);

  const onControlClick = (label) => {
    if (activeLabel !== label) {
      setActiveLabel(label);
    }
  };

  return (
    <>
      {
        <nav.type
          {...nav.props}
          activeLabel={activeLabel}
          activeClass={activeClass}
          onControlClick={onControlClick}
        />
      }
      {React.Children.map(contents, (child) => child.props.label === activeLabel ? child : null)}
    </>
  );
};

export default Tabs;
