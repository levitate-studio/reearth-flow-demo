import { useState } from "react";

import DataManager from "./DataFlow/Core/DataManager";
import DataFlowCanvas from "./DataFlow/DataFlowCanvas";
import NodesPanel from "./DataFlow/NodesPanel";
import OutputPanel from "./DataFlow/OutputPanel";
import PropertyPanel from "./DataFlow/PropertyPanel";

import "./DataFlow/common/reset.css";
import "./DataFlow/common/df-colors.css";
import "./DataFlow/common/df-app.css";

const dataManager = new DataManager();

// const win: any = window;
// win.DFDM = dataManager;

export type Props = {
  path?: string;
};
const DataFlow: React.FC<Props> = () => {
  const [_timestamp, setTimestamp] = useState(new Date().getTime());
  dataManager.reRenderer = setTimestamp;
  return (
    <div className="df-app dark">
      <DataFlowCanvas dataManager={dataManager} />
      <div className="df-block df-sidebar">
        <OutputPanel dataManager={dataManager} />
        <div className="df-block df-group-panel">
          <PropertyPanel dataManager={dataManager} />
          <NodesPanel
            nodeDefs={dataManager.nodeDefs}
            nodeCategories={dataManager.nodeCategories}
          />
        </div>
      </div>
    </div>
  );
};

export { DataFlow };
