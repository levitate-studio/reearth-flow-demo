// import * as Nodes from "./Nodes";
import "./df-nodes-panel.css";

const NodesPanel = ({ nodeDefs }: any) => {
  const onDragStart = (event: any, nodeId: any) => {
    event.dataTransfer.setData("application/reactflow", nodeId);
    event.dataTransfer.effectAllowed = "move";
  };

  const nodeList = nodeDefs?.map((node: any) => (
    <div
      key={node.public.nodeId}
      className={`node-ref ${node.public.category}`}
      onDragStart={(event) => onDragStart(event, node.public.nodeId)}
      draggable
    >
      {node.public.title}
    </div>
  ));

  return (
    <div className="df-nodes-panel">
      <div className="df-block-title">Nodes</div>
      <div className="df-block-content">{nodeList}</div>
    </div>
  );
};

export default NodesPanel;
