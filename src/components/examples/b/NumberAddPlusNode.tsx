import { useEffect } from "react";
import { Handle, Position } from "react-flow-renderer";

const NumberAddNodePlus = ({ data, isConnectable }: any) => {
  // init
  useEffect(() => {
    data.attr.stdOut0 = NaN;
    data.attr.stdIn0 = NaN;
    data.attr.stdIn1 = NaN;
  }, []);

  const update = () => {
    data.attr.stdOut0 = data.attr.stdIn0 + data.attr.stdIn1;
    data.onUpdate(data.attr.id);
  };

  const onRun = () => {
    data.onRun(data.attr.id);
    update();
  };

  useEffect(() => {
    update();
  }, [data.attr.stdIn0, data.attr.stdIn1]);

  return (
    <>
      <div className="node-title">Number Add</div>
      <div className="node-content">{data.attr.stdOut0?.toString()}</div>

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

export default NumberAddNodePlus;
