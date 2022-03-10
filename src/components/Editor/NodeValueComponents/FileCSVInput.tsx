import CSVReader from "react-csv-reader";

const FileCSVInput = ({ port, node, lvtFlow }: any) => {
  return (
    <CSVReader
      onFileLoaded={(data) => {
        console.log(data);
        port.setValue(data);
        lvtFlow.chainUpdateNode(node.id);
      }}
    />
  );
};

export default FileCSVInput;
