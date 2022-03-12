import { Handle, Position } from "react-flow-renderer";

import { nodeDefs } from "../../LvtFlow/Nodes";

const BasicNode = ({ data }: any) => {
  const nodeDef = nodeDefs[data.nodeId];
  let portsIn: JSX.Element[] = [];
  if (nodeDef.portsIn.length > 0) {
    portsIn = nodeDef.portsIn.map((port: any, index: number) => (
      <Handle
        key={`in-${index}`}
        type="target"
        id={port.name}
        // isConnectable={isConnectable}
        position={Position.Top}
        isValidConnection={data.isValidConnection}
        className={`portcolor-${port.dataType} ${
          port.ui?.hidden && "port-hidden"
        }`}
      />
    ));
  }
  let portsOut: JSX.Element[] = [];
  if (nodeDef.portsOut.length > 0) {
    portsOut = nodeDef.portsOut.map((port: any, index: number) => (
      <Handle
        key={`out-${index}`}
        type="source"
        id={port.name}
        // isConnectable={isConnectable}
        position={Position.Bottom}
        isValidConnection={data.isValidConnection}
        className={`portcolor-${port.dataType} ${
          port.ui?.hidden && "port-hidden"
        }`}
      />
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
