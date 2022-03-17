import { useState, useImperativeHandle, useContext } from "react";

import { LvtFlowContext } from "../../../pages/Editor/index";
import LvtFlow from "../../LvtFlow";

import CesiumMap from "./CesiumMap";
import DataViewer from "./DataViewer";

import "./df-output-panel.css";

const OutputPanel = ({ skipUpdate, cref }: any) => {
  const [activeTab, setActiveTab] = useState("output");
  const lvtFlow = useContext(LvtFlowContext);

  const setTab = (tab: string) => {
    setActiveTab(tab);
    // trigger update for map
    if (tab === "map") {
      lvtFlow.reRenderUI(["renderMap"]);
    }
  };

  useImperativeHandle(cref, () => ({
    setTab: (tab: string) => {
      setTab(tab);
    },
  }));

  return (
    <div className="df-output-panel">
      <div className="df-block-title">
        <div
          className={`df-block-title-tab multi ${
            activeTab === "output" && "active"
          }`}
          onClick={() => {
            setTab("output");
          }}
        >
          Output
        </div>
        <div
          className={`df-block-title-tab multi ${
            activeTab === "map" && "active"
          }`}
          onClick={() => {
            setTab("map");
          }}
        >
          Map
        </div>
      </div>
      <div className="df-block-content">
        <div
          className={`df-block-tab-content ${
            activeTab === "output" && "active"
          }`}
        >
          <DataViewer />
        </div>
        <div
          className={`df-block-tab-content ${activeTab === "map" && "active"}`}
        >
          <CesiumMap skipUpdate={skipUpdate || activeTab !== "map"} />
        </div>
      </div>
    </div>
  );
};

export default OutputPanel;
