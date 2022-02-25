import * as NodeValueComponents from "../NodeValueComponents";
import "./df-property-panel.css";

console.log(NodeValueComponents);

const PropertyPanel = ({ dataManager }: any) => {
  const element = dataManager.currentElement;

  const valueComponent = (element: any, port: any) => {
    return NodeValueComponents[port.component]?.({
      element,
      port,
      dataManager,
    });
  };

  // portIn
  const portsIn = element?.data.portsIn.length > 0 && (
    <>
      <div className="df-block-group-title">Ports IN</div>
      {element.data.portsIn.map((port: any, index: number) => (
        <div className="property-line" key={`in-${index}`}>
          <div className="property-name">{port.name}</div>
          {valueComponent(element, port)}
        </div>
      ))}
    </>
  );

  // portIn
  const portsOut = element?.data.portsOut.length > 0 && (
    <>
      <div className="df-block-group-title">Ports OUT</div>
      {element.data.portsOut.map((port: any, index: number) => (
        <div className="property-line" key={`out-${index}`}>
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
              <div className="property-value">{element.public.nodeId}</div>
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
