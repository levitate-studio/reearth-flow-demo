const options: any = [];

const Checkbox = ({ props }: any) => {
  if (props.port.ui.componentOptions.selectorSourceType) {
    let optionsSource;

    switch (props.port.ui.componentOptions.selectorSourceType) {
      case "csvColumn":
        if (props.port.ui.componentOptions.selectorSource) {
          optionsSource = props.node.getPortInByName(
            props.port.ui.componentOptions.selectorSource
          );
        }
        if (optionsSource.getValue()) {
          optionsSource.getValue()[0].map((v: string, index: number) => {
            options[index] = {
              title: v,
              value: props.port.value.v[index],
            };
          });
        }
        break;
      default:
        break;
    }
  }

  const setValue = (index: number, value: boolean) => {
    options[index].value = value;
    const values = [];
    for (let i = 0, j = options.length; i < j; i += 1) {
      values.push(options[i].value);
    }
    props.port.setValue(values);
    props.node.update?.(props.node);
    props.lvtFlow.reRenderUI(["currentElement"]);
    props.lvtFlow.updateNodesFromNode(props.node.id);
  };
  return (
    <div className="property-radios multi">
      {options.map((option: any, index: number) => (
        <div
          key={index}
          className={`radio ${option.value === true && "active"}`}
          onClick={() => {
            setValue(index, !option.value);
          }}
        >
          {option.title}
        </div>
      ))}

      {options.length > 0 && (
        <div
          className="porperty-reset"
          onClick={() => {
            props.port.setValue(props.port.defaultValue);
          }}
        >
          R
        </div>
      )}
    </div>
  );
};

export default Checkbox;
