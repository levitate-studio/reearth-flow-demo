import { useContext, useEffect, useState } from "react";
import ReactJson from "react-json-view";

import { LvtFlowContext } from "../../../pages/Editor/index";

const DataViewer = () => {
  const lvtFlow = useContext(LvtFlowContext);
  const [displayData, setDisplayData] = useState({});

  useEffect(() => {
    setDisplayData(
      lvtFlow.outputSource
        ? typeof lvtFlow.outputSource.value.v === "object"
          ? lvtFlow.outputSource.value.v
          : { value: lvtFlow.outputSource.value.v }
        : {}
    );
  }, [lvtFlow.outputSourceRenderSeed, lvtFlow.outputSource]);

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
