const NumberInput = ({ port, node, lvtFlow }: any) => {
  return (
    <div className="property-value ">
      <input
        value={port.value.v}
        disabled={port.connected}
        onChange={(e) => {
          const number = e.target.value.replace(/[^\d.]/g, "");
          port.setValue(number);
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

export default NumberInput;
