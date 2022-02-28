import CSVReader from "react-csv-reader";

const FileCSVInput = ({ element, port, dataManager }: any) => {
  return (
    <CSVReader
      onFileLoaded={(data) => {
        console.log(data);
        dataManager.setPortValue(port, data, element.id);
      }}
    />
  );
};

export default FileCSVInput;
