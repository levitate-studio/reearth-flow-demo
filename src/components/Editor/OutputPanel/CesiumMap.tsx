// import * as Cesium from "cesium";
import { Viewer, CzmlDataSource, GeoJsonDataSource } from "cesium";
import { useEffect, useContext, useState } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import { clog } from "../../LvtFlow/Core/CommFuc";

import "cesium/Build/Cesium/Widgets/widgets.css";
import "./df-cesium-map-theme.css";

let cesiumViewer: any;
let dataSourcePromise: any;
let rendering = false;
let dataVersion = 0;
let projectId = 0;

const CesiumMap = ({ skipUpdate }: { skipUpdate: boolean }) => {
  // update control
  const [autoUpdate, setAutoUpdate] = useState(true);
  const lvtFlow = useContext(LvtFlowContext);

  // =======================================
  // Render data
  // =======================================
  // rander data
  // only affect by viewer and data
  const renderData = async () => {
    if (cesiumViewer) {
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
        const curprojectId = lvtFlow.projectId;
        clog.log("Cesium", `loading data: v[${curDataVersion}]`);
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
        projectId = curprojectId;
      } else {
        dataVersion = 0;
        projectId = 0;
      }
      cesiumViewer.scene.requestRender();

      rendering = false;
    } else {
      clog.log("Cesium", `cesiumViewer not exist.`);
    }
  };

  const updateCesium = async () => {
    if (autoUpdate && !skipUpdate && !rendering) {
      await renderData();
    }
  };

  // =======================================
  // Init Cesium
  // =======================================
  useEffect(() => {
    const cesiumContainer = document.getElementById("cesium-container");
    cesiumViewer = new Viewer(cesiumContainer as HTMLElement, {
      requestRenderMode: true,
      fullscreenElement: cesiumContainer as HTMLElement,
    });
    cesiumViewer.scene.debugShowFramesPerSecond = true;
    cesiumViewer.animation.applyThemeChanges();
  }, []);

  // =======================================
  // Component Update Base on Seed
  // =======================================
  useEffect(() => {
    clog.log(
      "UI",
      `update cesium map: map ${projectId}.v[${dataVersion}] - data ${lvtFlow.projectId}.v[${lvtFlow.dataVersion}]`
    );
    // update UI
    const renderData = lvtFlow.renderData?.v;
    if (renderData) {
      setAnimationUI(renderData.options?.showAnimation);
      setTimelineUI(renderData.options?.showTimeline);
    }
    if (dataVersion != lvtFlow.dataVersion || projectId != lvtFlow.projectId) {
      updateCesium();
    }
  }, [lvtFlow.renderMapSeed]);

  // =======================================
  // UI Functions
  // =======================================
  const setAnimationUI = (show: boolean) => {
    if (cesiumViewer?.animation?._container) {
      cesiumViewer.animation._container.style.display = show ? "block" : "none";
    }
  };

  const setTimelineUI = (show: boolean) => {
    if (cesiumViewer?.timeline?.container) {
      cesiumViewer.timeline.container.style.display = show ? "block" : "none";
    }
  };

  const focus = () => {
    if (cesiumViewer && dataSourcePromise) {
      cesiumViewer.zoomTo(dataSourcePromise);
    }
  };

  return (
    <>
      <div id="cesium-container" className="cesium-df"></div>
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
            renderData();
          }}
        >
          UPDATE
        </div>
        <div
          className="cesium-ui-ele button"
          onClick={() => {
            focus();
          }}
        >
          FOCUS
        </div>
      </div>
    </>
  );
};

export default CesiumMap;
