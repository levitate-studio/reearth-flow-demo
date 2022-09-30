const FileGeoJSONWriter = ({ props }: any) => {
  const download = () => {
    let geoJSONData = "";
    if (typeof props.port.value.v === "object") {
      try {
        geoJSONData = JSON.stringify(props.port.value.v);
      } catch (error) {
        console.log(error);
      }
    }

    if (geoJSONData) {
      let filename = props.node
        .getPortInByName(props.port.ui.componentOptions.dataSource)
        .getValue();
      if (!filename) filename = "geojson-data-output.geojson";
      //
      const alink = document.createElement("a");
      if (window.Blob) {
        const geoJSONDataBlob = new Blob([geoJSONData], {
          type: "text/plain;charset=utf-8",
        });
        alink.href = URL.createObjectURL(geoJSONDataBlob);
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

export default FileGeoJSONWriter;
