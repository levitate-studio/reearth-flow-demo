const NumberInput = ({ port, node, lvtFlow }: any) => {
  return (
    <input
      value={port.value.v}
      type="number"
      disabled={port.connected}
      onChange={(e) => {
        port.setValue(Number(e.target.value));
        lvtFlow.chainUpdateNode(node.id);
      }}
    />
  );
};

export default NumberInput;
