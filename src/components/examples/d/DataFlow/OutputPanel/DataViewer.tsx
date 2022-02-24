import ReactJson from "react-json-view";

const DataViewer = ({ data }: any) => {
  const displayData = data ? data.value.v : {};
  return (
    <ReactJson
      src={displayData}
      theme="monokai"
      enableClipboard={false}
      displayDataTypes={false}
      displayObjectSize={false}
      // theme={{
      //   base00: "#1a1a1a",
      //   base01: "#F8F8F2",
      //   base02: "#ddd",
      //   base03: "#444",
      //   base04: "purple",
      //   base05: "#444",
      //   base06: "#444",
      //   base07: "#444",
      //   base08: "#444",
      //   base09: "rgba(70, 70, 230, 1)",
      //   base0A: "rgba(70, 70, 230, 1)",
      //   base0B: "rgba(70, 70, 230, 1)",
      //   base0C: "rgba(70, 70, 230, 1)",
      //   base0D: "rgba(70, 70, 230, 1)",
      //   base0E: "rgba(70, 70, 230, 1)",
      //   base0F: "rgba(70, 70, 230, 1)",
      // }}
    />
  );
};

export default DataViewer;
