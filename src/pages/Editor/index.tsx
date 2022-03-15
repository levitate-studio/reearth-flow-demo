import { useState, createContext, useRef } from "react";

import DataFlowCanvas from "../../components/Editor/DataFlowCanvas";
import NodesPanel from "../../components/Editor/NodesPanel";
import OutputPanel from "../../components/Editor/OutputPanel";
import PropertyPanel from "../../components/Editor/PropertyPanel";
import ToolbarPanel from "../../components/Editor/ToolbarPanel";
import LvtFlow from "../../components/LvtFlow";

import "./df-editor.css";

const lvtFlow = new LvtFlow();
const LvtFlowContext = createContext(lvtFlow);

const localStorage = window.localStorage;

export type Props = {
  path?: string;
};
const Editor: React.FC<Props> = () => {
  // lvtflow
  const [_timestamp, setTimestamp] = useState(new Date().getTime());
  LvtFlow.setUIReRenderer(setTimestamp);

  // canvas
  const dataFlowCanvasRef = useRef();
  // export
  const exportData = () => {
    const e = {
      lvtFlow: lvtFlow.exportData(),
      canvas: (dataFlowCanvasRef.current as any).exportData(),
    };
    console.log(JSON.stringify(e));
  };
  // clear
  const clearData = () => {
    lvtFlow.clearData();
    (dataFlowCanvasRef.current as any).clearData();
  };
  // load
  const loadData = (url: string) => {
    const req = new XMLHttpRequest();
    req.open("get", url);
    req.send(null);
    req.onload = () => {
      if (req.status === 200) {
        let data;
        try {
          data = JSON.parse(req.responseText);
        } catch (error) {
          console.warn("Request JSON is not valid.");
        }
        if (data) {
          lvtFlow.importData(data.lvtFlow);
          (dataFlowCanvasRef.current as any).importData(data.canvas);
        }
      }
    };
  };
  // check czml
  const checkCZML = () => {
    console.log(lvtFlow.renderData?.v?.data);
  };
  // =======================================
  // seperator
  // =======================================
  const [sideBarX, setSideBarX] = useState(
    localStorage?.["df-sep-sidebar-x"] ? localStorage?.["df-sep-sidebar-x"] : 40
  );
  const [sideBarTopY, setSideBarTopY] = useState(
    localStorage?.["df-sep-sidebartop-y"]
      ? localStorage?.["df-sep-sidebartop-y"]
      : 40
  );
  const onSepSideBarDrag = (e: any) => {
    if (e.clientX) {
      const x = Math.max(
        Math.min((1 - e.clientX / window.innerWidth) * 100, 90),
        10
      );
      setSideBarX(x);
      if (localStorage) {
        localStorage["df-sep-sidebar-x"] = x;
      }
    }
  };
  const onSepSideBarTopDrag = (e: any) => {
    if (e.clientY) {
      const y = Math.max(
        Math.min((e.clientY / window.innerHeight) * 100, 90),
        10
      );
      setSideBarTopY(y);
      if (localStorage) {
        localStorage["df-sep-sidebartop-y"] = y;
      }
    }
  };
  //
  return (
    <LvtFlowContext.Provider value={lvtFlow}>
      <div className="df-editor dark">
        <div className="df-main">
          <ToolbarPanel
            exportData={exportData}
            clearData={clearData}
            loadData={loadData}
            checkCZML={checkCZML}
          />
          <DataFlowCanvas cref={dataFlowCanvasRef} />
        </div>
        <div
          className="df-sep verti"
          draggable
          onDrag={onSepSideBarDrag}
          style={{ right: `${sideBarX}vw` }}
        ></div>
        <div className="df-sidebar" style={{ width: `${sideBarX}vw` }}>
          <div
            className="df-sidebar-top"
            style={{ height: `${sideBarTopY}vh` }}
          >
            <OutputPanel />
          </div>
          <div
            className="df-sep horzi"
            draggable
            onDrag={onSepSideBarTopDrag}
            style={{ top: `${sideBarTopY}vh` }}
          ></div>
          <div
            className="df-sidebar-bottom"
            style={{ height: `${100 - sideBarTopY}vh` }}
          >
            <PropertyPanel />
            <NodesPanel />
          </div>
        </div>
      </div>
    </LvtFlowContext.Provider>
  );
};

export { Editor, LvtFlowContext };
