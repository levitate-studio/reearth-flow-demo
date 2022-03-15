// import * as Cesium from "cesium";
import { Viewer, CzmlDataSource, GeoJsonDataSource } from "cesium";
import { useEffect, useContext, useState } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import "cesium/Build/Cesium/Widgets/widgets.css";

let cesiumViewer: any;

const CesiumMap = ({ skipUpdate }: { skipUpdate: boolean }) => {
  // update control
  const [autoUpdate, setAutoUpdate] = useState(true);
  const lvtFlow = useContext(LvtFlowContext);

  const updateCesium = (force = false) => {
    if (cesiumViewer && ((autoUpdate && lvtFlow.needUpdateData) || force)) {
      const renderData = lvtFlow.renderData?.v;
      if (renderData) {
        let dataSourcePromise;
        switch (renderData.dataType) {
          case "CZML":
          default:
            dataSourcePromise = CzmlDataSource.load(renderData.data);
            break;
          case "GeoJSON":
            dataSourcePromise = GeoJsonDataSource.load(renderData.data);
            break;
        }
        cesiumViewer.dataSources.removeAll();
        cesiumViewer.dataSources.add(dataSourcePromise);
        console.log("cesium: rerendered source");
      } else {
        cesiumViewer.dataSources.removeAll();
      }
    }
  };

  if (autoUpdate && !skipUpdate) {
    updateCesium();
  }

  useEffect(() => {
    const cesiumContainer = document.getElementById("cesium-container");
    cesiumViewer = new Viewer(cesiumContainer as HTMLElement, {
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
