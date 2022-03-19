const NumberInput = ({ port, node, lvtFlow }: any) => {
  return (
    <div className="property-value ">
      <input
        value={port.value.v}
        type="number"
        disabled={port.connected}
        onChange={(e) => {
          port.setValue(Number(e.target.value));
          lvtFlow.reRenderUI(["currentElement"]);
        }}
        onBlur={() => {
          lvtFlow.updateNodesFromNode(node.id);
        }}
      />
    </div>
  );
};

export default NumberInput;
