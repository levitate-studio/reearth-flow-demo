const options: any = [];

const Checkbox = ({ port, node, lvtFlow }: any) => {
  if (port.ui.componentOptions.selectorSourceType) {
    let optionsSource;

    switch (port.ui.componentOptions.selectorSourceType) {
      case "csvColumn":
        if (port.ui.componentOptions.selectorSource) {
          optionsSource = node.getPortInByName(
            port.ui.componentOptions.selectorSource
          );
        }
        if (optionsSource.getValue()) {
          optionsSource.getValue()[0].map((v: string, index: number) => {
            options[index] = {
              title: v,
              value: port.value.v[index],
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
    port.setValue(values);
    lvtFlow.reRenderUI(["currentElement"]);
    lvtFlow.updateNodesFromNode(node.id);
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
            port.setValue(port.defaultValue);
          }}
        >
          R
        </div>
      )}
    </div>
  );
};

export default Checkbox;
