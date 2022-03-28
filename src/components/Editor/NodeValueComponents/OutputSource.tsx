const OutputSource = ({ props }: any) => {
  return (
    <div className="property-value ">
      <a
        className="output-source"
        onClick={() => {
          props.setOutputSource(props.port);
        }}
      >
        {Array.isArray(props.port.value.v)
          ? "array"
          : typeof props.port.value.v}
      </a>
    </div>
  );
};

export default OutputSource;
