const Select = ({ node, port, lvtFlow }: any) => {
  let options = [];
  if (port.ui.componentOptions) {
    const optionsSource = node.getPortInByName(
      port.ui.componentOptions.columnSource
    );
    if (optionsSource?.getValue()) options = optionsSource.getValue()[0];
  }

  return (
    <select
      value={port.value.v}
      onChange={(e) => {
        port.setValue(Number(e.target.value));
        lvtFlow.updateNodesFromNode(node.id);
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
