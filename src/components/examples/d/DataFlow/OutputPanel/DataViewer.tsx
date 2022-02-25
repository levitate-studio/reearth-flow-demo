import ReactJson from "react-json-view";

const DataViewer = ({ data }: any) => {
  const displayData = data
    ? typeof data.value.v === "object"
      ? data.value.v
      : { value: data.value.v }
    : {};
  return (
    <ReactJson
      src={displayData}
      theme="monokai"
      enableClipboard={false}
      displayDataTypes={false}
      displayObjectSize={false}
    />
  );
};

export default DataViewer;
