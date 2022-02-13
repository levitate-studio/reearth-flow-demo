import { useState } from "react";
import { Handle, Position } from "react-flow-renderer";

const NumberInputNode = ({ data, isConnectable }: any) => {
  const [stdOut0, setStdOut0] = useState(0);
  data.attr.stdOut0 = stdOut0;
  const onNodeValueChange = (e) => {
    setStdOut0(Number(e.target.value));
    data.onChange(data.attr.id);
  };
  return (
    <>
      <div className="node-title">Number Input</div>
      <div className="node-content">
        <input
          className="nodrag"
          type="number"
          value={stdOut0}
          onChange={onNodeValueChange}
        />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="stdOut0"
        isConnectable={isConnectable}
      />
    </>
  );
};

export default NumberInputNode;
