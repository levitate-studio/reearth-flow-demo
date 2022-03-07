import { Viewer, GeoJsonDataSource } from "resium";

// const iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];

// iframe.setAttribute(
//   "sandbox",
//   "allow-same-origin allow-scripts allow-popups allow-forms"
// );
// iframe.setAttribute("src", "");

const ResiumMap = ({ dataManager }: any) => {
  const data = dataManager.renderSource
    ? dataManager.tempGetRenderData().v
    : {
        type: "FeatureCollection",
        features: [],
      };
  // if (data) {
  //   console.log(data);
  // }
  return (
    <Viewer full>
      <GeoJsonDataSource data={data} />
    </Viewer>
  );
};

export default ResiumMap;
