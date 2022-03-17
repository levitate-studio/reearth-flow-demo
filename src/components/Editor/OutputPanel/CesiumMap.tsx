// import * as Cesium from "cesium";
import { Viewer, CzmlDataSource, GeoJsonDataSource } from "cesium";
import { useEffect, useContext, useState } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import { clog } from "../../LvtFlow/Core/CommFuc";

import "cesium/Build/Cesium/Widgets/widgets.css";

let cesiumViewer: any;
let rendering = false;
let dataVersion = 0;

const CesiumMap = ({ skipUpdate }: { skipUpdate: boolean }) => {
  // update control
  const [autoUpdate, setAutoUpdate] = useState(true);
  const lvtFlow = useContext(LvtFlowContext);

  const updateCesium = async (force = false) => {
    if (cesiumViewer && (autoUpdate || force) && !skipUpdate && !rendering) {
      rendering = true;
      const renderData = lvtFlow.renderData?.v;

      // remove old data
      clog.log("Cesium", `clearing data...`);
      const t0 = new Date().getTime();
      await cesiumViewer.dataSources.removeAll();
      const t1 = new Date().getTime();
      clog.log("Cesium", `clear data: ${t1 - t0}ms`);

      // load new data
      if (renderData) {
        const curDataVersion = lvtFlow.dataVersion;
        clog.log("Cesium", `loading data: v[${curDataVersion}]`);
        let dataSourcePromise;
        switch (renderData.dataType) {
          case "CZML":
          default:
            dataSourcePromise = await CzmlDataSource.load(renderData.data);
            break;
          case "GeoJSON":
            dataSourcePromise = await GeoJsonDataSource.load(renderData.data);
            break;
        }
        const t2 = new Date().getTime();
        clog.log("Cesium", `loaded data v[${curDataVersion}] in ${t2 - t1}ms`);

        // render new data
        cesiumViewer.dataSources.add(dataSourcePromise);
        const t3 = new Date().getTime();
        clog.log(
          "Cesium",
          `rendered data v[${curDataVersion}] in ${t3 - t2}ms`
        );
        dataVersion = curDataVersion;
      } else {
        dataVersion = 0;
      }

      rendering = false;
    }
  };

  useEffect(() => {
    const cesiumContainer = document.getElementById("cesium-container");
    cesiumViewer = new Viewer(cesiumContainer as HTMLElement, {
      timeline: false,
      animation: false,
      requestRenderMode: true,
      fullscreenElement: cesiumContainer as HTMLElement,
    });
  }, []);

  useEffect(() => {
    clog.log("UI", `update cesium map`);
    if (dataVersion != lvtFlow.dataVersion) {
      setTimeout(() => {
        updateCesium();
      }, 0);
    }
  }, [lvtFlow.renderMapSeed]);

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
