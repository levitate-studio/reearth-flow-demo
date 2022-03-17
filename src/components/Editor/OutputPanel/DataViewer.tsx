import { useContext, useMemo, useState } from "react";
import ReactJson from "react-json-view";

import { LvtFlowContext } from "../../../pages/Editor/index";
import { clog } from "../../LvtFlow/Core/CommFuc";

const DataViewer = () => {
  const lvtFlow = useContext(LvtFlowContext);
  const [displayData, setDisplayData] = useState({});

  useMemo(() => {
    if (lvtFlow.outputSourceRenderSeed) {
      clog.log("UI", "update data viewer panel");
      setDisplayData(
        lvtFlow.outputSource
          ? typeof lvtFlow.outputSource.value.v === "object"
            ? lvtFlow.outputSource.value.v
            : { value: lvtFlow.outputSource.value.v }
          : {}
      );
    }
  }, [lvtFlow.outputSourceRenderSeed]);

  return (
    <ReactJson
      src={displayData}
      theme="monokai"
      enableClipboard={false}
      displayDataTypes={false}
      displayObjectSize={false}
    />
  );
};

export default DataViewer;
