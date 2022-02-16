import { useContext } from "react";

import { HistoryContext } from "./index";

const HistoryBlock = (Props: any) => {
  // const onDragStart = (event: any, nodeType: any) => {
  //   event.dataTransfer.setData("application/reactflow", nodeType);
  //   event.dataTransfer.effectAllowed = "move";
  // };

  const history: any = useContext(HistoryContext);
  let list;
  if (history) {
    list = Object.keys(history).map((key) => (
      <div key={key} onClick={() => Props.onHistoryClick(key)}>
        {`${key}>`} {history[key].action}
      </div>
    ));
  } else {
    list = "";
  }
  return (
    <div className="sidebar-block property-block">
      <div className="sidebar-block-title">History</div>
      <div className="sidebar-block-content">{list}</div>
    </div>
  );
};

export default HistoryBlock;
