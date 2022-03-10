const Select = ({ node, port, lvtFlow }: any) => {
  let options = [];
  if (port.ui.componentOptions)
    options = node.getPortInByName(port.ui.componentOptions.columnSource).value
      .v[0];
  return (
    <select
      value={port.value.v}
      onChange={(e) => {
        port.setValue(Number(e.target.value));
        lvtFlow.chainUpdateNode(node.id);
      }}
    >
      {options.map((column: string, index: number) => (
        <option key={index} value={index}>
          {column}
        </option>
      ))}
    </select>
  );
};

export default Select;
