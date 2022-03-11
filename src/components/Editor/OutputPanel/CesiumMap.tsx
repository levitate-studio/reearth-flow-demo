import * as Cesium from "cesium";
import { useEffect, useContext } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import "cesium/Build/Cesium/Widgets/widgets.css";

let viewer: any;

const CesiumMap = () => {
  const lvtFlow = useContext(LvtFlowContext);
  const renderData = lvtFlow.renderData?.v;
  if (viewer) {
    if (renderData) {
      let dataSourcePromise;
      switch (renderData.dataType) {
        case "CZML":
        default:
          dataSourcePromise = Cesium.CzmlDataSource.load(renderData.data);
          break;
        case "GeoJSON":
          dataSourcePromise = Cesium.GeoJsonDataSource.load(renderData.data);
          break;
      }
      viewer.dataSources.removeAll();
      viewer.dataSources.add(dataSourcePromise);
    } else {
      viewer.dataSources.removeAll();
    }
  }

  useEffect(() => {
    const cesiumContainer = document.getElementById("cesium-container");
    viewer = new Cesium.Viewer(cesiumContainer as HTMLElement, {
      timeline: false,
      animation: false,
      fullscreenElement: cesiumContainer as HTMLElement,
    });
  }, []);

  return <div id="cesium-container"></div>;
};

export default CesiumMap;
