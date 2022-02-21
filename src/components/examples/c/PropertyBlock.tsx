import { useState } from "react";

const PropertyBlock = (Props: any) => {
  const [_timestamp, setTimestemp] = useState(0);

  const element = Props.currentElementId
    ? Props.dataset[Props.currentElementId]
    : null;

  const updateValue = (port: any, value: any) => {
    // update port
    port.value.v = Number(value);
    // update node
    element.update?.(element.data);
    // trigger re-render
    setTimestemp(new Date().getTime());
    //
    // console.log(element);
    updateTree(element.id);
  };

  const updateTree = (elementId: string) => {
    if (Props.dataset[elementId].data.portsOut?.length > 0) {
      Array.from(Props.dataset[elementId].data.portsOut).forEach((out: any) => {
        Array.from(out.targets).forEach((target: any) => {
          Props.dataset[target].update?.(Props.dataset[target].data);
          updateTree(target);
        });
      });
    }
  };

  const valueComponent = (port: any) => {
    switch (port.valueComp) {
      case "pureDisplay":
      default:
        return <div className="property-value">{port.value.v}</div>;
      case "numberInput":
        return (
          <input
            value={port.value.v}
            type="number"
            disabled={port.isConnected}
            onChange={(e) => updateValue(port, e.target.value)}
          />
        );
    }
  };

  // portIn
  const portsIn = element?.data.portsIn.length > 0 && (
    <>
      <div className="rf-block-subtitle">Ports IN</div>
      {element.data.portsIn.map((ele: any, index: number) => (
        <div className="property-line" key={`in-${index}`}>
          <div className="property-name">{ele.name}</div>
          {valueComponent(ele)}
        </div>
      ))}
    </>
  );

  // portIn
  const portsOut = element?.data.portsOut.length && (
    <>
      <div className="rf-block-subtitle">Ports OUT</div>
      {element.data.portsOut.map((ele: any, index: number) => (
        <div className="property-line" key={`out-${index}`}>
          <div className="property-name">{ele.name}</div>
          {valueComponent(ele)}
        </div>
      ))}
    </>
  );

  return (
    <div className="rf-block rf-block-property">
      <div className="rf-block-title">Properties</div>
      <div className="rf-block-content">
        {element && (
          <>
            <div className="rf-block-subtitle">Basic</div>
            <div className="property-line">
              <div className="property-name">Node</div>
              <div className="property-value">{element.data.ui.title}</div>
            </div>
            <div className="property-line">
              <div className="property-name">Element ID</div>
              <div className="property-value">{Props.currentElementId}</div>
            </div>
          </>
        )}
        {portsIn}
        {portsOut}
      </div>
    </div>
  );
};

export default PropertyBlock;
