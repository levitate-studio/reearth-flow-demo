import * as Nodes from "../../LvtFlow/Nodes";

import "./df-nodes-panel.css";

const NodesPanel = () => {
  const onDragStart = (event: any, nodeId: any) => {
    event.dataTransfer.setData("application/reactflow", nodeId);
    event.dataTransfer.effectAllowed = "move";
  };

  const l = (element: any, prefix: any) => {
    if (typeof element === "object" && typeof element[0] !== "string") {
      return Object.keys(element).map((key: string) => (
        <div className="df-block-group" key={key}>
          <div className={`df-block-group-title catcolor${prefix}-${key}`}>
            {key}
          </div>
          <div className="df-block-group-wrapper">
            {l(element[key], `${prefix}-${key}`)}
          </div>
        </div>
      ));
    }
    return Object.keys(element).map((key: string) => (
      <div
        key={Nodes.nodeDefs[element[key]].nodeId}
        className={`node-ref catcolor-${Nodes.nodeDefs[element[key]].category}`}
        onDragStart={(event) =>
          onDragStart(event, Nodes.nodeDefs[element[key]].nodeId)
        }
        draggable
      >
        {Nodes.nodeDefs[element[key]].ui.title}
      </div>
    ));
  };

  const nodeList = l(Nodes.nodeTree, "");

  return (
    <div className="df-nodes-panel">
      <div className="df-block-title">
        <div className="df-block-title-tab">Nodes</div>
      </div>
      <div className="df-block-content">
        <div className="df-block-content-wrapper">{nodeList}</div>
      </div>
    </div>
  );
};

export default NodesPanel;
