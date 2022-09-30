import { CSSProperties } from "react";
import { useCSVReader } from "react-papaparse";

const FileCSVInput = ({ props }: any) => {
  const { CSVReader } = useCSVReader();

  const styles = {
    csvReader: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
    } as CSSProperties,
    browseFile: {
      width: "30%",
      border: "none",
      background: "#333",
      color: "#ccc",
      padding: "4px 6px",
      cursor: "pointer",
      fontFamily: "Source Code Pro",
      fontWeight: "bold",
      flexShrink: 0,
    } as CSSProperties,
    acceptedFile: {
      color: "#ccc",
      lineHeight: 1.2,
      paddingLeft: 10,
      display: "flex",
      alignItems: "center",
    } as CSSProperties,
    progressBarBackgroundColor: {
      backgroundColor: "rgb(147, 221, 50)",
      border: "none",
      position: "absolute",
      width: "100%",
      bottom: "-2px",
      height: "2px",
    } as CSSProperties,
  };

  return (
    <div className="property-value ">
      <CSVReader
        onUploadAccepted={(results: any) => {
          props.port.setValue(results.data);
          props.node.update?.(props.node);
          props.lvtFlow.reRenderUI(["currentElement"]);
          props.lvtFlow.updateNodesFromNode(props.node.id);
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar }: any) => (
          <>
            <div style={styles.csvReader}>
              <button
                type="button"
                {...getRootProps()}
                style={styles.browseFile}
              >
                Browse
              </button>
              <div style={styles.acceptedFile}>{acceptedFile?.name}</div>
            </div>
            <ProgressBar style={styles.progressBarBackgroundColor} />
          </>
        )}
      </CSVReader>
    </div>
  );
};

export default FileCSVInput;
