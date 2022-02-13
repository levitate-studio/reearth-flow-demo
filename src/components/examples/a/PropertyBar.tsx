import { useContext } from "react";

import { CurrentElementContext } from "./index";

const PropertyBar = () => {
  const currentElement: any = useContext(CurrentElementContext);
  let list;
  if (currentElement?.data) {
    list = Object.keys(currentElement.data.attr).map((key) => (
      <div key={key}>
        <span className="property-name">{key}</span>
        <span className="property-value">
          {currentElement.data.attr[key].toString()}
        </span>
      </div>
    ));
  } else {
    list = "";
  }
  return (
    <div className="property-bar">
      <div className="tool-bar-title">Properties</div>
      <div className="tool-bar-card">{list}</div>
    </div>
  );
};

export default PropertyBar;
