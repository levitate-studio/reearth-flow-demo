const Input = ({ port, node, lvtFlow }: any) => {
  return (
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
    />
  );
};

export default Input;
