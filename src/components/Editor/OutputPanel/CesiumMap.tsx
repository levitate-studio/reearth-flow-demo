import * as Cesium from "cesium";
import { useEffect, useContext } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import "cesium/Build/Cesium/Widgets/widgets.css";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYjdkNTNkMS0yYWE3LTRiOTQtOWU5ZC1iMTI2ZTliYTYzOWUiLCJpZCI6ODUzODUsImlhdCI6MTY0Njk2NjQ2OH0.h_JL80aTinhLDQ4kIpSbpKMiwDxus4Wjz1YEngm6wdc";

let viewer: any;

const CesiumMap = () => {
  const lvtFlow = useContext(LvtFlowContext);
  const renderData = lvtFlow.renderData?.v;
  if (viewer && renderData && renderData.dataType === "CZML") {
    const dataSourcePromise = Cesium.CzmlDataSource.load(renderData.data);
    viewer.dataSources.removeAll();
    viewer.dataSources.add(dataSourcePromise);
    viewer.zoomTo(dataSourcePromise);
  } else if (viewer && renderData && renderData.dataType === "GeoJSON") {
    const dataSourcePromise = Cesium.GeoJsonDataSource.load(renderData.data);
    viewer.dataSources.removeAll();
    viewer.dataSources.add(dataSourcePromise);
    viewer.zoomTo(dataSourcePromise);
  }

  useEffect(() => {
    viewer = new Cesium.Viewer("cesium-container", {
      timeline: false,
      animation: false,
    });
  }, []);

  return <div id="cesium-container"></div>;
};

export default CesiumMap;
