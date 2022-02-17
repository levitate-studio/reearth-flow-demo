// import { useState, useEffect } from "react";

const PropertyBlock = (Props: any) => {
  const element = Props.currentElementId
    ? Props.dataset[Props.currentElementId]
    : null;

  // portIn
  const portsIn = element?.portsIn.length && (
    <>
      <div className="rf-block-subtitle">Ports IN</div>
      {element.portsIn.map((ele: any, index: number) => (
        <div className="property-line" key={`in-${index}`}>
          <span className="property-name">{ele.name}</span>
          <span className="property-name">{ele.value}</span>
        </div>
      ))}
    </>
  );

  // portIn
  const portsOut = element?.portsOut.length && (
    <>
      <div className="rf-block-subtitle">Ports OUT</div>
      {element.portsOut.map((ele: any, index: number) => (
        <div className="property-line" key={`out-${index}`}>
          <span className="property-name">{ele.name}</span>
          <span className="property-name">{ele.value}</span>
        </div>
      ))}
    </>
  );

  return (
    <div className="rf-block rf-block-property">
      <div className="rf-block-title">Properties</div>
      <div className="rf-block-content">
        {element && (
          <div className="property-line">
            <span className="property-name">Node ID</span>
            <span className="property-value">{Props.currentElementId}</span>
          </div>
        )}
        {portsIn}
        {portsOut}
      </div>
    </div>
  );
};

export default PropertyBlock;
