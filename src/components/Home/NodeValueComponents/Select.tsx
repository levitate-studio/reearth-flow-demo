const Select = ({ element, port, dataManager }: any) => {
  let options = [];
  if (
    element.data.portsIn.find((p: any) => p.name === port.options.columnSource)
      .value.v
  )
    options = element.data.portsIn.find(
      (p: any) => p.name === port.options.columnSource
    ).value.v[0];
  return (
    <select
      value={port.value.v}
      onChange={(e) => {
        dataManager.setPortValue(port, Number(e.target.value), element.id);
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
