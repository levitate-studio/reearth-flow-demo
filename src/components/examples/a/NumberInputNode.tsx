import { FormEvent, useState } from "react";
import { Handle, Position } from "react-flow-renderer";

const NumberInputNode = ({ data, isConnectable }: any) => {
  const [stdOut0, setStdOut0] = useState(0);
  data.attr.stdOut0 = stdOut0;

  const caculate = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setStdOut0(Number(input.value));
    data.attr.stdOut0 = Number(input.value);
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
          onChange={caculate}
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
