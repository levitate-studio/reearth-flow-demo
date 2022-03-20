let active;

const BooleanRadio = ({ port, node, lvtFlow }: any) => {
  active = port.value.v;
  const setValue = (value: boolean) => {
    active = value;
    port.setValue(value);
    lvtFlow.reRenderUI(["currentElement"]);
    lvtFlow.updateNodesFromNode(node.id);
  };
  return (
    <div className="property-radios">
      <div
        className={`radio ${active === true && "active"}`}
        onClick={() => {
          setValue(true);
        }}
      >
        TRUE
      </div>
      <div
        className={`radio ${active === false && "active"}`}
        onClick={() => {
          setValue(false);
        }}
      >
        FALSE
      </div>
      <div
        className="porperty-reset"
        onClick={() => {
          setValue(port.defaultValue);
        }}
      >
        R
      </div>
    </div>
  );
};

export default BooleanRadio;
