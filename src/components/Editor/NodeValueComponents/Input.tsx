const Input = ({ port, node, lvtFlow }: any) => {
  return (
    <input
      value={port.value.v}
      disabled={port.connected}
      onChange={(e) => {
        port.setValue(e.target.value);
        lvtFlow.chainUpdateNode(node.id);
      }}
    />
  );
};

export default Input;