import { useState, createContext, useRef } from "react";
import useFetch from "use-http";

import DataFlowCanvas from "../../components/Editor/DataFlowCanvas";
import ExportWindow from "../../components/Editor/ExportWindow";
import ImportWindow from "../../components/Editor/ImportWindow";
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

  // fetch
  const { get, response } = useFetch();

  // =======================================
  // Export Project
  // =======================================
  const exportWindowRef = useRef();
  //
  const popupExportProjectWindow = () => {
    const projectData = {
      lvtFlow: lvtFlow.exportData(),
      canvas: (dataFlowCanvasRef.current as any).exportData(),
      version: lvtFlow.version,
      type: "separated",
    };
    (exportWindowRef.current as any).setText(JSON.stringify(projectData));
    (exportWindowRef.current as any).show();
  };

  // =======================================
  // Import Project
  // =======================================
  const importWindowRef = useRef();
  const popupImportProjectWindow = () => {
    (importWindowRef.current as any).show();
  };
  // import
  const importProject = (projectData: string) => {
    if (projectData) {
      const data = JSON.parse(projectData);
      lvtFlow.importData(data.lvtFlow);
      (dataFlowCanvasRef.current as any).importData(data.canvas);
    }
  };

  // =======================================
  // New (clear)
  // =======================================
  const clearData = () => {
    lvtFlow.clearData();
    (dataFlowCanvasRef.current as any).clearData();
  };

  // =======================================
  // Load
  // =======================================
  const loadProjectFromUrl = async (url: string) => {
    const data = await get(url);
    if (response.ok && data) {
      lvtFlow.importData(data.lvtFlow);
      (dataFlowCanvasRef.current as any).importData(data.canvas);
    }
  };

  // =======================================
  // Export CZML
  // =======================================
  const popupExportCZMLWindow = () => {
    (exportWindowRef.current as any).setText(
      JSON.stringify(lvtFlow.renderData?.v?.data)
    );
    (exportWindowRef.current as any).show();
  };
  // =======================================
  // Seperator Control
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
  const [skipUpdate, setSkipUpdate] = useState(false);
  const onSepBarDragStart = () => {
    setSkipUpdate(true);
  };
  const onSepBarDragEnd = () => {
    setSkipUpdate(false);
  };

  // =======================================
  // outputSource Control
  // =======================================
  const outputPanelRef = useRef();
  const setOutputSource = () => {
    (outputPanelRef.current as any).setTab("output");
  };

  //
  return (
    <LvtFlowContext.Provider value={lvtFlow}>
      <div className="df-editor dark">
        <div className="df-main">
          <ToolbarPanel
            popupExportProjectWindow={popupExportProjectWindow}
            popupImportProjectWindow={popupImportProjectWindow}
            loadProjectFromUrl={loadProjectFromUrl}
            clearData={clearData}
            popupExportCZMLWindow={popupExportCZMLWindow}
          />
          <DataFlowCanvas cref={dataFlowCanvasRef} />
        </div>
        <div
          className="df-sep verti"
          draggable
          onDrag={onSepSideBarDrag}
          onDragStart={onSepBarDragStart}
          onDragEnd={onSepBarDragEnd}
          style={{ right: `${sideBarX}vw` }}
        ></div>
        <div className="df-sidebar" style={{ width: `${sideBarX}vw` }}>
          <div
            className="df-sidebar-top"
            style={{ height: `${sideBarTopY}vh` }}
          >
            <OutputPanel cref={outputPanelRef} skipUpdate={skipUpdate} />
          </div>
          <div
            className="df-sep horzi"
            draggable
            onDrag={onSepSideBarTopDrag}
            onDragStart={onSepBarDragStart}
            onDragEnd={onSepBarDragEnd}
            style={{ top: `${sideBarTopY}vh` }}
          ></div>
          <div
            className="df-sidebar-bottom"
            style={{ height: `${100 - sideBarTopY}vh` }}
          >
            <PropertyPanel setOutputSource={setOutputSource} />
            <NodesPanel />
          </div>
        </div>
        <ExportWindow cref={exportWindowRef} />
        <ImportWindow cref={importWindowRef} importProject={importProject} />
      </div>
    </LvtFlowContext.Provider>
  );
};

export { Editor, LvtFlowContext };
