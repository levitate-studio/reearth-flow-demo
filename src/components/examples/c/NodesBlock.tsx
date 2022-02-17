import * as Nodes from "./Nodes";

const NodesBlock = () => {
  const onDragStart = (event: any, nodeId: any) => {
    event.dataTransfer.setData("application/reactflow", nodeId);
    event.dataTransfer.effectAllowed = "move";
  };

  // const nodes = [
  //   {
  //     title: "Number Input",
  //     type: "basicNode",
  //     category: "input",
  //   },
  //   {
  //     title: "Number Add",
  //     type: "numberAdd",
  //     category: "default",
  //   },
  //   {
  //     title: "Number Add Plus",
  //     type: "numberAddPlus",
  //     category: "default",
  //   },
  // ];

  const nodes = Nodes.datas;

  const nodeList = Object.keys(nodes).map((nodeId) => (
    <div
      key={nodeId}
      className={`node-ref ${nodes[nodeId].nodeType}`}
      onDragStart={(event) => onDragStart(event, nodeId)}
      draggable
    >
      {nodes[nodeId].ui.title}
    </div>
  ));

  return (
    <div className="rf-block rf-block-nodes">
      <div className="rf-block-title">Nodes</div>
      <div className="rf-block-content">{nodeList}</div>
    </div>
  );
};

export default NodesBlock;
