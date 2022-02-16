const NodeListBlock = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const nodes = [
    {
      title: "Number Input",
      type: "numberInput",
      category: "input",
    },
    {
      title: "Number Add",
      type: "numberAdd",
      category: "default",
    },
    {
      title: "Number Add Plus",
      type: "numberAddPlus",
      category: "default",
    },
  ];

  const nodeList = nodes.map((node, index) => (
    <div
      key={index}
      className={node.category + " dndnode"}
      onDragStart={(event) => onDragStart(event, node.type)}
      draggable
    >
      {node.title}
    </div>
  ));

  return (
    <div className="sidebar-block node-list-block">
      <div className="sidebar-block-title">Nodes</div>
      <div className="sidebar-block-content">{nodeList}</div>
    </div>
  );
};

export default NodeListBlock;
