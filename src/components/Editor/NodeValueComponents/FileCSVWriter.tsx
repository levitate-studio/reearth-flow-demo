const FileCSVWriter = ({ port, node }: any) => {
  const download = () => {
    let csvData = "";
    if (typeof port.value.v === "object") {
      try {
        for (let r = 0, rm = port.value.v.length; r < rm; r += 1) {
          let row = "";
          for (let c = 0, cm = port.value.v[r].length; c < cm; c += 1) {
            row += `"${port.value.v[r][c]}",`;
          }
          row += "\r\n";
          csvData += row;
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (csvData) {
      let filename = node
        .getPortInByName(port.ui.componentOptions.dataSource)
        .getValue();
      if (!filename) filename = "csv-data-output.csv";
      //
      const alink = document.createElement("a");
      const _utf = "\uFEFF";
      if (window.Blob) {
        const csvDataBlob = new Blob([_utf + csvData], {
          type: "text/csv",
        });
        alink.href = URL.createObjectURL(csvDataBlob);
      }
      document.body.appendChild(alink);
      alink.setAttribute("download", filename);
      alink.click();
      document.body.removeChild(alink);
    }
  };
  return (
    <div className="property-value ">
      <div className="property-button" onClick={download}>
        WRITE
      </div>
    </div>
  );
};

export default FileCSVWriter;
