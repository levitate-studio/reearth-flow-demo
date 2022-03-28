const PureDisplay = ({ props }: any) => {
  const value =
    props.port.value.v !== undefined ? props.port.value.v.toString() : "";
  return <div className="property-value">{value}</div>;
};

export default PureDisplay;
