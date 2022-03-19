const Select = ({ node, port, lvtFlow }: any) => {
  let options = [];
  if (
    port.ui.componentOptions.selectorSourceType &&
    port.ui.componentOptions.selectorSource
  ) {
    const optionsSource = node.getPortInByName(
      port.ui.componentOptions.selectorSource
    );
    switch (port.ui.componentOptions.selectorSourceType) {
      case "preset":
        [{ title: "" }, ...optionsSource.getValue()].map((l: any) =>
          options.push(l.title)
        );
        break;
      case "csvColumn":
        if (optionsSource.getValue()) {
          options = optionsSource.getValue()[0];
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="property-value ">
      <select
        value={port.value.v}
        onChange={(e) => {
          port.setValue(Number(e.target.value));
          lvtFlow.reRenderUI(["currentElement"]);
          lvtFlow.updateNodesFromNode(node.id);
        }}
      >
        {options.map((column: string, index: number) => (
          <option key={index} value={index}>
            {column}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
