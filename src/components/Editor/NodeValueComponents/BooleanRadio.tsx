// let active;
// import { useState } from "react";
let active: boolean;
const BooleanRadio = ({ props }: any) => {
  // const [active, setActive] = useState(props.port.value.v);
  // active = port.value.v;
  const setActive = (a: boolean) => {
    active = a;
  };
  setActive(props.port.value.v);
  console.log(active);

  const setValue = (value: boolean) => {
    // active = value;
    setActive(value);
    props.port.setValue(value);
    props.node.update?.(props.node);
    props.lvtFlow.reRenderUI(["currentElement"]);
    props.lvtFlow.updateNodesFromNode(props.node.id);
  };
  return (
    <div className="property-radios">
      <div
        className={`radio ${active === true && "active"}`}
        onClick={() => {
          setValue(true);
        }}
      >
        TRUE
      </div>
      <div
        className={`radio ${active === false && "active"}`}
        onClick={() => {
          setValue(false);
        }}
      >
        FALSE
      </div>
      <div
        className="porperty-reset"
        onClick={() => {
          setValue(props.port.defaultValue);
        }}
      >
        R
      </div>
    </div>
  );
};

export default BooleanRadio;
