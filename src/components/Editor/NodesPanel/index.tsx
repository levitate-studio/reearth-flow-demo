import * as Nodes from "../../DataFlow/Nodes";

import "./df-nodes-panel.css";

const NodesPanel = () => {
  const onDragStart = (event: any, nodeId: any) => {
    event.dataTransfer.setData("application/reactflow", nodeId);
    event.dataTransfer.effectAllowed = "move";
  };

  const l = (element: any, prefix: any) => {
    if (typeof element === "object" && typeof element[0] !== "string") {
      return Object.keys(element).map((key: string) => (
        <div key={key}>
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
        key={Nodes.nodeDefs[element[key]].public.nodeId}
        className={`node-ref catcolor-${
          Nodes.nodeDefs[element[key]].public.category
        }`}
        onDragStart={(event) =>
          onDragStart(event, Nodes.nodeDefs[element[key]].public.nodeId)
        }
        draggable
      >
        {Nodes.nodeDefs[element[key]].public.title}
      </div>
    ));
  };

  const nodeList = l(Nodes.nodeMap, "");

  return (
    <div className="df-nodes-panel">
      <div className="df-block-title">
        <div className="df-block-title-tab">Nodes</div>
      </div>
      <div className="df-block-content">{nodeList}</div>
    </div>
  );
};

export default NodesPanel;
