const Input = ({ port, node, lvtFlow }: any) => {
  return (
    <div className="property-value ">
      <input
        value={port.value.v === undefined ? "" : port.value.v}
        disabled={port.connected}
        onChange={(e) => {
          port.setValue(e.target.value);
          lvtFlow.reRenderUI(["currentElement"]);
        }}
        onBlur={() => {
          lvtFlow.updateNodesFromNode(node.id);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
    </div>
  );
};

export default Input;
