import { useContext } from "react";

import { CurrentElementContext } from "./index";

const PropertyBlock = () => {
  const currentElement: any = useContext(CurrentElementContext);
  console.log("aaa", currentElement);
  let list;
  if (currentElement?.data) {
    list = Object.keys(currentElement.data.attr).map((key) => (
      <div key={key}>
        <span className="property-name">{key}</span>
        <span className="property-value">
          <input
            type="text"
            value={currentElement.data.attr[key]}
            onChange={() => {
              console.log(currentElement.data.attr[key]);
            }}
          />
          {/* {currentElement.data.attr[key]?.toString()} */}
        </span>
      </div>
    ));
  } else {
    list = "";
  }
  return (
    <div className="sidebar-block property-block">
      <div className="sidebar-block-title">Properties</div>
      <div className="sidebar-block-content">{list}</div>
    </div>
  );
};

export default PropertyBlock;
