import { useState, createContext } from "react";

import DataManager from "../../components/DataFlow/Core/DataManager";
import DataFlowCanvas from "../../components/Editor/DataFlowCanvas";
import NodesPanel from "../../components/Editor/NodesPanel";
import OutputPanel from "../../components/Editor/OutputPanel";
import PropertyPanel from "../../components/Editor/PropertyPanel";

import "./df-editor.css";

const lvtFlow = new DataManager();
export const LvtFlowContext = createContext({});

const dataManager = new DataManager();

// const win: any = window;
// win.DFDM = dataManager;

export type Props = {
  path?: string;
};
const Editor: React.FC<Props> = () => {
  const [_timestamp, setTimestamp] = useState(new Date().getTime());
  dataManager.reRenderer = setTimestamp;
  return (
    <LvtFlowContext.Provider value={lvtFlow}>
      <div className="df-editor dark">
        <DataFlowCanvas dataManager={dataManager} />
        <div className="df-sidebar">
          <OutputPanel dataManager={dataManager} />
          <div className="df-block df-group-panel">
            <PropertyPanel dataManager={dataManager} />
            <NodesPanel />
          </div>
        </div>
      </div>
    </LvtFlowContext.Provider>
  );
};

export default Editor;
