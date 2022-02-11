import { Handle, Position } from "react-flow-renderer";

const NumberInputNode = ({ data, isConnectable }: any) => {
  return (
    <>
      <div className="node-title">Number Input</div>
      <div className="node-content">
        <input className="nodrag" type="number" />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="stdOut"
        isConnectable={isConnectable}
      />
    </>
  );
};

export default NumberInputNode;
