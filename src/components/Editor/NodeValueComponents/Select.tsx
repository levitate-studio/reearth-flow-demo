const Select = ({ props }: any) => {
  let options = [];
  if (props.port.ui.componentOptions.selectorSourceType) {
    let optionsSource;
    if (props.port.ui.componentOptions.selectorSource) {
      optionsSource = props.node.getPortInByName(
        props.port.ui.componentOptions.selectorSource
      );
    }

    switch (props.port.ui.componentOptions.selectorSourceType) {
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
        options = props.port.ui.componentOptions.selectorOptions;
        break;
      default:
        break;
    }
  }

  return (
    <div className="property-value ">
      <select
        value={props.port.value.v}
        onChange={(e) => {
          props.port.setValue(e.target.value);
          props.lvtFlow.reRenderUI(["currentElement"]);
          props.lvtFlow.updateNodesFromNode(props.node.id);
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
