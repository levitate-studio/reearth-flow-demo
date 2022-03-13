import * as Cesium from "cesium";
import { useEffect, useContext, useState } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import "cesium/Build/Cesium/Widgets/widgets.css";

let viewer: any;

const CesiumMap = () => {
  // update control
  const [autoUpdate, setAutoUpdate] = useState(true);
  const lvtFlow = useContext(LvtFlowContext);

  const updateCesium = (force = false) => {
    console.log("update cesium");
    const renderData = lvtFlow.renderData?.v;
    if (renderData && (autoUpdate || force)) {
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
  };

  if (autoUpdate) {
    updateCesium();
  }

  useEffect(() => {
    const cesiumContainer = document.getElementById("cesium-container");
    viewer = new Cesium.Viewer(cesiumContainer as HTMLElement, {
      timeline: false,
      animation: false,
      fullscreenElement: cesiumContainer as HTMLElement,
    });
  }, []);

  return (
    <>
      <div id="cesium-container"></div>
      <div className="cesium-ui">
        <div
          className="cesium-ui-ele button"
          onClick={() => {
            setAutoUpdate(!autoUpdate);
          }}
        >
          AUTO UPDATE:
          <span className="status">{autoUpdate ? "ON" : "OFF"}</span>
        </div>
        <div
          className="cesium-ui-ele button"
          onClick={() => {
            updateCesium(true);
          }}
        >
          UPDATE
        </div>
      </div>
    </>
  );
};

export default CesiumMap;
