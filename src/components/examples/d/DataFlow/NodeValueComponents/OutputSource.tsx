const OutputSource = ({ port, dataManager }: any) => {
  return (
    <div className="property-value ">
      <a
        className="output-source"
        onClick={() => {
          dataManager.setOutputSource(port);
        }}
      >
        {typeof port.value.v}
      </a>
    </div>
  );
};

export default OutputSource;
