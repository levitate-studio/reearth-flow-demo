import { useContext, useMemo, useState } from "react";
import ReactJson from "react-json-view";

import { LvtFlowContext } from "../../../pages/Editor/index";
import { clog } from "../../LvtFlow/Core/CommFuc";

import TableViewer from "./TableViewer";

const DataViewer = () => {
  const lvtFlow = useContext(LvtFlowContext);
  const [displayData, setDisplayData] = useState({});

  useMemo(() => {
    if (lvtFlow.outputSourceRenderSeed) {
      clog.log("UI", "update data viewer panel");
      setDisplayData(lvtFlow.outputSource?.value.v);
    }
  }, [lvtFlow.outputSourceRenderSeed]);

  if (
    Array.isArray(displayData) &&
    !(typeof displayData[0] === "object" && !Array.isArray(displayData[0])) &&
    displayData.length <= 300
  ) {
    return <TableViewer data={displayData} />;
  } else if (typeof displayData === "object") {
    return (
      <ReactJson
        src={displayData}
        theme="monokai"
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
      />
    );
  } else if (!lvtFlow.outputSource) {
    return <div className="df-output-puredata"></div>;
  } else {
    return (
      <div className="df-output-puredata">
        <span className="puredata-type">[{typeof displayData}]</span>
        {String(displayData)}
      </div>
    );
  }
};

export default DataViewer;
