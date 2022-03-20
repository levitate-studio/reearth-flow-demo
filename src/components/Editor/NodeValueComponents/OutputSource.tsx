const OutputSource = ({ port, setOutputSource }: any) => {
  return (
    <div className="property-value ">
      <a
        className="output-source"
        onClick={() => {
          setOutputSource(port);
        }}
      >
        {typeof port.value.v}
      </a>
    </div>
  );
};

export default OutputSource;
