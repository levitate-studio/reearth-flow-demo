const NumberInput = ({ element, port, dataManager }: any) => {
  return (
    <input
      value={port.value.v}
      type="number"
      disabled={port.isConnected}
      onChange={(e) =>
        dataManager.setPortValue(port, Number(e.target.value), element.id)
      }
    />
  );
};

export default NumberInput;
