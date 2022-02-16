import { FormEvent, useState, useEffect } from "react";
import { Handle, Position } from "react-flow-renderer";

const NumberInputNode = ({ data, isConnectable }: any) => {
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    data.attr.stdOut0 = inputValue;
  }, []);

  const update = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setInputValue(Number(input.value));
    data.attr.stdOut0 = Number(input.value);
    data.onUpdate(data.attr.id);
  };
  return (
    <>
      <div className="node-title">Number Input</div>
      <div className="node-content">
        <input
          className="nodrag"
          type="number"
          value={inputValue}
          onChange={update}
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
