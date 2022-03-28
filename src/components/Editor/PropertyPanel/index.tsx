import { useContext, useMemo, useState } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import { clog } from "../../LvtFlow/Core/CommFuc";
import { getInternalDataType } from "../../LvtFlow/Core/DataTypes";
import BooleanRadio from "../NodeValueComponents/BooleanRadio";
import Checkbox from "../NodeValueComponents/Checkbox";
import FileCSVInput from "../NodeValueComponents/FileCSVInput";
import FileCSVWriter from "../NodeValueComponents/FileCSVWriter";
import Input from "../NodeValueComponents/Input";
import MultiRadio from "../NodeValueComponents/MultiRadio";
import NumberInput from "../NodeValueComponents/NumberInput";
import OutputSource from "../NodeValueComponents/OutputSource";
import PureDisplay from "../NodeValueComponents/PureDisplay";
import Select from "../NodeValueComponents/Select";

import "./df-property-panel.css";

const PropertyPanel = ({ setOutputSource }: any) => {
  const lvtFlow = useContext(LvtFlowContext);
  const [element, setElement] = useState(lvtFlow.currentElement);

  useMemo(() => {
    if (lvtFlow.currentElementRenderSeed) {
      clog.log("UI", "update properties panel");
      setElement(lvtFlow.currentElement);
    }
  }, [lvtFlow.currentElementRenderSeed]);

  const getRealValueComponent = (port: any) => {
    let component = port.ui.component;

    // if input and connected -> use OutputSource instead
    if (port.portType === "input" && port.connected) {
      component = "OutputSource";
    }
    // if OutputSource but is simple value -> use PureDisplay instead
    if (
      component === "OutputSource" &&
      (typeof port.value.v !== "object" ||
        (port.value.v.length === 1 && typeof port.value.v[0] !== "object"))
    ) {
      component = "PureDisplay";
    }
    return component;
  };

  const valueComponent = (node: any, port: any) => {
    const component = getRealValueComponent(port);
    switch (component) {
      case "BooleanRadio":
        return (
          <BooleanRadio props={{ port, node, lvtFlow, setOutputSource }} />
        );
      case "Checkbox":
        return <Checkbox props={{ port, node, lvtFlow, setOutputSource }} />;
      case "FileCSVInput":
        return (
          <FileCSVInput props={{ port, node, lvtFlow, setOutputSource }} />
        );
      case "FileCSVWriter":
        return (
          <FileCSVWriter props={{ port, node, lvtFlow, setOutputSource }} />
        );
      case "Input":
        return <Input props={{ port, node, lvtFlow, setOutputSource }} />;
      case "MultiRadio":
        return <MultiRadio props={{ port, node, lvtFlow, setOutputSource }} />;
      case "NumberInput":
        return <NumberInput props={{ port, node, lvtFlow, setOutputSource }} />;
      case "OutputSource":
        return (
          <OutputSource props={{ port, node, lvtFlow, setOutputSource }} />
        );
      case "PureDisplay":
        return <PureDisplay props={{ port, node, lvtFlow, setOutputSource }} />;
      case "Select":
        return <Select props={{ port, node, lvtFlow, setOutputSource }} />;
      default:
        break;
    }
  };

  // portIn
  const portsIn = element?.data && element?.data.portsIn.length > 0 && (
    <>
      <div className="df-block-group-title">Ports IN</div>
      {element?.data.portsIn.map((port: any, index: number) => (
        <div className="property-line" key={`in-${index}`}>
          <div
            className={`property-datatype portcolor-${getInternalDataType(
              port.dataType
            )}`}
          ></div>
          <div className="property-name" title={port.ui?.description}>
            <span>{port.name}</span>
            <div className="tail-cover"></div>
          </div>
          {valueComponent(element, port)}
        </div>
      ))}
    </>
  );

  // portIn
  const portsOut = element?.data && element.data.portsOut.length > 0 && (
    <>
      <div className="df-block-group-title">Ports OUT</div>
      {element?.data.portsOut.map((port: any, index: number) => (
        <div className="property-line" key={`out-${index}`}>
          <div
            className={`property-datatype portcolor-${getInternalDataType(
              port.dataType
            )}`}
          ></div>
          <div className="property-name" title={port.ui?.description}>
            <span>{port.name}</span>
            <div className="tail-cover"></div>
          </div>
          {valueComponent(element, port)}
        </div>
      ))}
    </>
  );

  return (
    <div className="df-property-panel">
      <div className="df-block-title">
        <div className="df-block-title-tab">Properties</div>
      </div>
      <div className="df-block-content">
        {element && (
          <>
            <div className="df-block-group-title node-id">{element.nodeId}</div>
            <div className="df-block-group-des">{element.ui?.description}</div>
            <div className="property-line">
              <div className="property-name">Element ID</div>
              <div className="property-value">{element.id}</div>
            </div>
            <div className="property-line">
              <div className="property-name">Data Version</div>
              <div className="property-value">{element.dataVersion}</div>
            </div>
          </>
        )}
        {portsIn}
        {portsOut}
      </div>
    </div>
  );
};

export default PropertyPanel;
