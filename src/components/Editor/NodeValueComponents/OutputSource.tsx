const OutputSource = ({ port, lvtFlow }: any) => {
  return (
    <div className="property-value ">
      <a
        className="output-source"
        onClick={() => {
          lvtFlow.setOutputSource(port);
        }}
      >
        {typeof port.value.v}
      </a>
    </div>
  );
};

export default OutputSource;
