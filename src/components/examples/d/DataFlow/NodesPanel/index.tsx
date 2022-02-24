// import * as Nodes from "./Nodes";
import "./df-nodes-panel.css";

const NodesPanel = ({ nodeDefs, nodeCategories }: any) => {
  const onDragStart = (event: any, nodeId: any) => {
    event.dataTransfer.setData("application/reactflow", nodeId);
    event.dataTransfer.effectAllowed = "move";
  };

  const nodeList = nodeCategories?.map((category: string) => (
    <div key={category}>
      <div
        className={`df-block-group-title catcolor-${category.replace(
          ".",
          "-"
        )}`}
      >
        {category}
      </div>
      <div className="df-nodes-wrapper">
        {nodeDefs
          .filter((node: any) => node.public.category === category)
          .map((node: any) => (
            <div
              key={node.public.nodeId}
              className={`node-ref catcolor-${node.public.category.replace(
                ".",
                "-"
              )}`}
              onDragStart={(event) => onDragStart(event, node.public.nodeId)}
              draggable
            >
              {node.public.title}
            </div>
          ))}
      </div>
    </div>
  ));

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
