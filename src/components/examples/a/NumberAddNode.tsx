import { useEffect, useState } from "react";
import { Handle, Position } from "react-flow-renderer";

const NumberAddNode = ({ data, isConnectable }: any) => {
  const [stdOut0, setStdOut0] = useState(0);
  data.attr.stdOut0 = stdOut0;

  useEffect(() => {
    console.log("add: input updated", data.attr.stdIn0, data.attr.stdIn1);
    caculate();
  }, [data.attr.stdIn0, data.attr.stdIn1]);

  const caculate = () => {
    setStdOut0(data.attr.stdIn0 + data.attr.stdIn1);
    data.attr.stdOut0 = data.attr.stdIn0 + data.attr.stdIn1;
    data.onChange(data.attr.id);
  };

  const onRun = () => {
    data.onRun(data.attr.id);
    caculate();
  };

  return (
    <>
      <div className="node-title">Number Add</div>
      <div className="node-content">{data.attr.stdOut0.toString()}</div>

      <Handle
        type="target"
        position={Position.Left}
        style={{ top: "40%" }}
        id="stdIn0"
        isConnectable={isConnectable}
      />

      <Handle
        type="target"
        position={Position.Left}
        style={{ top: "60%" }}
        id="stdIn1"
        isConnectable={isConnectable}
      />

      <Handle
        type="source"
        position={Position.Right}
        id="stdOut0"
        isConnectable={isConnectable}
      />
      <div className="node-run" onClick={onRun}>
        RUN
      </div>
    </>
  );
};

export default NumberAddNode;
