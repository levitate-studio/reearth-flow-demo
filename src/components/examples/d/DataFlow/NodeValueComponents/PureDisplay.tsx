const PureDisplay = ({ port }: any) => {
  return <div className="property-value">{port.value.v.toString()}</div>;
};

export default PureDisplay;
