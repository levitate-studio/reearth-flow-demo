import CSVReader from "react-csv-reader";

const FileCSVInput = ({ port, node, lvtFlow }: any) => {
  const papaparseOptions = {
    skipEmptyLines: true,
  };
  return (
    <div className="property-value ">
      <CSVReader
        parserOptions={papaparseOptions}
        onFileLoaded={(data) => {
          port.setValue(data);
          lvtFlow.reRenderUI(["currentElement"]);
          lvtFlow.updateNodesFromNode(node.id);
        }}
      />
    </div>
  );
};

export default FileCSVInput;
