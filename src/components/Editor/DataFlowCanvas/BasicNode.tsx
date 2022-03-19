import { Handle, Position } from "react-flow-renderer";

import { getInternalDataType } from "../../LvtFlow/Core/DataTypes";
import { nodeDefs } from "../../LvtFlow/Nodes";

const BasicNode = ({ data }: any) => {
  const nodeDef = nodeDefs[data.nodeId];
  if (!nodeDef) return false;
  let portsIn: JSX.Element[] = [];
  if (nodeDef.portsIn.length > 0) {
    portsIn = nodeDef.portsIn.map((port: any, index: number) => (
      <div className="port-wrapper in" key={`in-${index}`}>
        <Handle
          type="target"
          id={port.name}
          position={Position.Top}
          isValidConnection={data.isValidConnection}
          className={`portcolor-${getInternalDataType(port.dataType)} ${
            port.ui?.hidden && "port-hidden"
          }`}
        />
        <div className="port-tip">
          <div className="port-name">{port.name}</div>
          <div className="port-description">{port.ui?.description}</div>
        </div>
      </div>
    ));
  }
  let portsOut: JSX.Element[] = [];
  if (nodeDef.portsOut.length > 0) {
    portsOut = nodeDef.portsOut.map((port: any, index: number) => (
      <div className="port-wrapper out" key={`out-${index}`}>
        <Handle
          key={`out-${index}`}
          type="source"
          id={port.name}
          position={Position.Bottom}
          isValidConnection={data.isValidConnection}
          className={`portcolor-${getInternalDataType(port.dataType)} ${
            port.ui?.hidden && "port-hidden"
          }`}
        />
        <div className="port-tip">
          <div className="port-name">{port.name}</div>
          <div className="port-description">{port.ui?.description}</div>
        </div>
      </div>
    ));
  }
  return (
    <div className="node">
      <div className="node-ports node-ports-top">{portsIn}</div>
      <div
        className={`node-content nodecolor-${nodeDef.category?.replace(
          ".",
          "-"
        )}`}
      >
        <div className="node-title">{nodeDef.ui.title}</div>
        <div className="node-cover"></div>
      </div>
      <div className="node-ports node-ports-bottom">{portsOut}</div>
    </div>
  );
};

export default BasicNode;
