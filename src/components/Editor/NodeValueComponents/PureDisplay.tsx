const PureDisplay = ({ port }: any) => {
  const value = port.value.v !== undefined ? port.value.v.toString() : "";
  return <div className="property-value">{value}</div>;
};

export default PureDisplay;
