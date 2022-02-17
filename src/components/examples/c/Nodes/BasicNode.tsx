import { Handle, Position } from "react-flow-renderer";

const BasicNode = ({ data, isConnectable }: any) => {
  let portsIn = "";
  if (data.portsIn.length > 0) {
    portsIn = data.portsIn.map((port: any, index: number) => (
      <Handle
        key={`in-${index}`}
        type="target"
        id={port.name}
        isConnectable={isConnectable}
        position={Position.Top}
      />
    ));
  }
  let portsOut = "";
  if (data.portsOut.length > 0) {
    portsOut = data.portsOut.map((port: any, index: number) => (
      <Handle
        key={`out-${index}`}
        type="source"
        id={port.name}
        isConnectable={isConnectable}
        position={Position.Bottom}
      />
    ));
  }
  return (
    <div className="node">
      <div className="node-ports node-ports-top">{portsIn}</div>
      <div className="node-title">{data.ui.title}</div>
      <div className="node-ports node-ports-bottom">{portsOut}</div>
    </div>
  );
};

export default BasicNode;
