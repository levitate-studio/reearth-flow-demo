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

  // no output source
  if (!lvtFlow.outputSource) {
    return <div className="df-output-puredata"></div>;
  }

  // basic value
  if (typeof displayData !== "object") {
    return <TableViewer data={[displayData]} />;
  }

  // one dimen array
  if (Array.isArray(displayData) && typeof displayData[0] !== "object") {
    return <TableViewer data={displayData} />;
  }

  // two dimen array
  if (
    Array.isArray(displayData) &&
    Array.isArray(displayData[0]) &&
    typeof displayData[0][0] !== "object" &&
    displayData.length <= 1000
  ) {
    return <TableViewer data={displayData} />;
  }

  // others
  return (
    <ReactJson
      src={displayData}
      theme="monokai"
      enableClipboard={false}
      displayDataTypes={false}
      displayObjectSize={false}
    />
  );
  
  if (Array.isArray(displayData)) {
    if (Array.isArray(displayData[0])) {
      if (Array.isArray(displayData[0][0]) || displayData.length > 1000) {
        // high-level array -> ReactJson
        // table too long -> ReactJson
        return (
          <ReactJson
            src={displayData}
            theme="monokai"
            enableClipboard={false}
            displayDataTypes={false}
            displayObjectSize={false}
          />
        );
      } else {
        // two dimen array
        console.log("t2");
        return <TableViewer data={displayData} />;
      }
    } else {
      // one dimen array
      console.log("t1");
      return <TableViewer data={[displayData]} />;
    }
  } else if (!lvtFlow.outputSource) {
    return <div className="df-output-puredata"></div>;
  } else if (typeof displayData === "object") {
    console.log(123);
    return <></>;
    // return (
    //   <ReactJson
    //     src={displayData}
    //     theme="monokai"
    //     enableClipboard={false}
    //     displayDataTypes={false}
    //     displayObjectSize={false}
    //   />
    // );
  } else {
    // basic value
    console.log("t0");
    return <TableViewer data={[displayData]} />;
  }
  // if (
  //   Array.isArray(displayData) &&
  //   !(typeof displayData[0] === "object" && !Array.isArray(displayData[0])) &&
  //   displayData.length <= 300
  // ) {
  //   return <TableViewer data={displayData} />;
  // } else if (typeof displayData === "object") {
  //   return (
  //     <ReactJson
  //       src={displayData}
  //       theme="monokai"
  //       enableClipboard={false}
  //       displayDataTypes={false}
  //       displayObjectSize={false}
  //     />
  //   );
  // } else if (!lvtFlow.outputSource) {
  //   return <div className="df-output-puredata"></div>;
  // } else {
  //   return <TableViewer data={[displayData]} />;
  //   // return (
  //   //   <div className="df-output-puredata">
  //   //     <span className="puredata-type">[{typeof displayData}]</span>
  //   //     {String(displayData)}
  //   //   </div>
  //   // );
  // }
};

export default DataViewer;
