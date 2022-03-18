import { useContext, useMemo, useState } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import { clog } from "../../LvtFlow/Core/CommFuc";
import { getInternalDataType } from "../../LvtFlow/Core/DataTypes";
import NodeValueComponents from "../NodeValueComponents";
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

  const valueComponent = (node: any, port: any) => {
    let component = port.ui.component;
    if (component === "NumberInput" && typeof port.value.v === "object") {
      component = "OutputSource";
    }
    return NodeValueComponents[component]?.({
      node,
      port,
      lvtFlow,
      setOutputSource,
    });
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
          <div className="property-name">{port.name}</div>
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
          <div className="property-name">{port.name}</div>
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
            <div className="df-block-group-title">Basic</div>
            <div className="property-line">
              <div className="property-name">Node</div>
              <div className="property-value">{element.nodeId}</div>
            </div>
            <div className="property-line">
              <div className="property-name">Description</div>
              <div className="property-value">{element.ui?.description}</div>
            </div>
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
