import "./df-property-panel.css";

const PropertyPanel = ({ dataManager }: any) => {
  const element = dataManager.currentElement;
  const updateValue = (port: any, value: any) => {
    // update port
    port.value.v = Number(value);
    //
    dataManager.updateNode(element.id);
    dataManager.reRender();
  };

  const valueComponent = (port: any) => {
    switch (port.component) {
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
      <div className="df-block-subtitle">Ports IN</div>
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
      <div className="df-block-subtitle">Ports OUT</div>
      {element.data.portsOut.map((ele: any, index: number) => (
        <div className="property-line" key={`out-${index}`}>
          <div className="property-name">{ele.name}</div>
          {valueComponent(ele)}
        </div>
      ))}
    </>
  );

  return (
    <div className="df-property-panel">
      <div className="df-block-title">Properties</div>
      <div className="df-block-content">
        {element && (
          <>
            <div className="df-block-subtitle">Basic</div>
            <div className="property-line">
              <div className="property-name">Node</div>
              <div className="property-value">{element.public.title}</div>
            </div>
            <div className="property-line">
              <div className="property-name">Element ID</div>
              <div className="property-value">{element.id}</div>
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
