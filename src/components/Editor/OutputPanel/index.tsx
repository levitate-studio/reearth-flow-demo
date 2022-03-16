import { useState, useImperativeHandle } from "react";

import CesiumMap from "./CesiumMap";
import DataViewer from "./DataViewer";

import "./df-output-panel.css";

const OutputPanel = ({ skipUpdate, cref }: any) => {
  const [activeTab, setActiveTab] = useState("output");

  useImperativeHandle(cref, () => ({
    setTab: (tab: string) => {
      setActiveTab(tab);
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
            setActiveTab("output");
          }}
        >
          Output
        </div>
        <div
          className={`df-block-title-tab multi ${
            activeTab === "map" && "active"
          }`}
          onClick={() => {
            setActiveTab("map");
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
