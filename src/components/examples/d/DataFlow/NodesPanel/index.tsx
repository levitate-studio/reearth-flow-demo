import * as Nodes from "../Nodes";

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
    const node = Nodes.nodeDefs[element];
    return (
      <div
        key={node.public.nodeId}
        className={`node-ref catcolor-${node.public.category}`}
        onDragStart={(event) => onDragStart(event, node.public.nodeId)}
        draggable
      >
        {node.public.title}
      </div>
    );
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
