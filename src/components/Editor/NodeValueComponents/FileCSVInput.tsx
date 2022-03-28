import CSVReader from "react-csv-reader";

const FileCSVInput = ({ props }: any) => {
  const papaparseOptions = {
    skipEmptyLines: true,
  };
  return (
    <div className="property-value ">
      <CSVReader
        parserOptions={papaparseOptions}
        onFileLoaded={(data) => {
          props.port.setValue(data);
          props.lvtFlow.reRenderUI(["currentElement"]);
          props.lvtFlow.updateNodesFromNode(props.node.id);
        }}
      />
    </div>
  );
};

export default FileCSVInput;
