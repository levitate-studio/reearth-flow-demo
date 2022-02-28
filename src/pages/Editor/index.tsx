import { useState } from "react";

import DataManager from "../../components/DataFlow/Core/DataManager";
import DataFlowCanvas from "../../components/Home/DataFlowCanvas";
import NodesPanel from "../../components/Home/NodesPanel";
import OutputPanel from "../../components/Home/OutputPanel";
import PropertyPanel from "../../components/Home/PropertyPanel";

import "./df-editor.css";

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
  );
};

export default Editor;
