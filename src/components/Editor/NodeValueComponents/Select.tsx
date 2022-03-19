const Select = ({ node, port, lvtFlow }: any) => {
  let options = [];
  if (port.ui.componentOptions.selectorSourceType) {
    let optionsSource;
    if (port.ui.componentOptions.selectorSource) {
      optionsSource = node.getPortInByName(
        port.ui.componentOptions.selectorSource
      );
    }

    switch (port.ui.componentOptions.selectorSourceType) {
      case "preset":
        options = [{ title: "" }, ...optionsSource.getValue()];
        break;
      case "csvColumn":
        if (optionsSource.getValue()) {
          optionsSource.getValue()[0].map((v: string, index: number) => {
            options.push({
              title: v,
              value: index,
            });
          });
        }
        break;
      case "self":
        options = port.ui.componentOptions.selectorOptions;
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
          port.setValue(e.target.value);
          lvtFlow.reRenderUI(["currentElement"]);
          lvtFlow.updateNodesFromNode(node.id);
        }}
      >
        {options.map((option: any, index: number) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
