import CSVReader from "react-csv-reader";

const FileCSVInput = ({ port, node, lvtFlow }: any) => {
  return (
    <div className="property-value ">
      <CSVReader
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
