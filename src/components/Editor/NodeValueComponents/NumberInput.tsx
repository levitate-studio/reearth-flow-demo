const NumberInput = ({ props }: any) => {
  return (
    <div className="property-value ">
      <input
        value={props.port.value.v === undefined ? "" : props.port.value.v}
        disabled={props.port.connected}
        onChange={(e) => {
          // const number = e.target.value.replace(/[^\d.]/g, "");
          props.port.setValue(e.target.value);
          props.node.update?.(props.node);
          props.lvtFlow.reRenderUI(["currentElement"]);
        }}
        onBlur={() => {
          props.port.setValue(Number(props.port.value.v));
          props.lvtFlow.updateNodesFromNode(props.node.id);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
      <div
        className="porperty-reset"
        onClick={() => {
          props.port.setValue(props.port.defaultValue);
          props.node.update?.(props.node);
          props.lvtFlow.reRenderUI(["currentElement"]);
          props.lvtFlow.updateNodesFromNode(props.node.id);
        }}
      >
        R
      </div>
    </div>
  );
};

export default NumberInput;
