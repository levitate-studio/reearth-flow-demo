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
  //
  return (
    <LvtFlowContext.Provider value={lvtFlow}>
      <div className="df-editor dark">
        <div className="df-main">
          <ToolbarPanel
            exportData={exportData}
            clearData={clearData}
            loadData={loadData}
          />
          <DataFlowCanvas cref={dataFlowCanvasRef} />
        </div>
        <div className="df-sidebar">
          <OutputPanel />
          <div className="df-group-panel">
            <PropertyPanel />
            <NodesPanel />
          </div>
        </div>
      </div>
    </LvtFlowContext.Provider>
  );
};

export { Editor, LvtFlowContext };
