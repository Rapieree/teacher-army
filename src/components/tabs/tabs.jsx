import React, {useState} from "react";

const Tabs = ({children, activeClass, activeTabLabel}) => {
  const [nav] = React.Children.map(children, (child) => child.type.name === `TabsNav` ? child : undefined);
  const contents = React.Children.map((children), (child) => child.type.name === `Tab` ? child : undefined);

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
      {React.Children.map(contents, (child) => child.props.label === activeLabel ? child : ``)}
    </>
  );
};

export default Tabs;
