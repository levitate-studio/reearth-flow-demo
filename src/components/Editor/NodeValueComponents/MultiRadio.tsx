import { useState } from "react";

// let active: string;

const MultiRadio = ({ port, node, lvtFlow }: any) => {
  const [active, setActive] = useState(port.value.v);
  let options = [];
  if (port.ui.componentOptions.radioSourceType) {
    switch (port.ui.componentOptions.radioSourceType) {
      case "self":
        options = port.ui.componentOptions.radioOptions;
        break;
      default:
        break;
    }
  }

  // active = port.value.v;
  const setValue = (value: string) => {
    setActive(value);
    // active = value;
    port.setValue(value);
    lvtFlow.reRenderUI(["currentElement"]);
    lvtFlow.updateNodesFromNode(node.id);
  };

  return (
    <div className="property-radios">
      {options.map((option: any, index: number) => (
        <div
          key={index}
          className={`radio ${active === option.value && "active"}`}
          onClick={() => {
            setValue(option.value);
          }}
        >
          {option.title}
        </div>
      ))}
      <div
        className="porperty-reset"
        onClick={() => {
          setValue(port.defaultValue);
        }}
      >
        R
      </div>
    </div>
  );
};

export default MultiRadio;
