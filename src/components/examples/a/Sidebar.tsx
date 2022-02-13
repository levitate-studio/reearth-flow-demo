import PropertyBar from "./PropertyBar";

const Sidebar = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="tool-bar-title">Node list</div>
      <div className="tool-bar-card">
        <div
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, "input")}
          draggable
        >
          Input Node
        </div>
        <div
          className="dndnode input number-input"
          onDragStart={(event) => onDragStart(event, "numberInput")}
          draggable
        >
          Number Input Node
        </div>
        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "default")}
          draggable
        >
          Default Node
        </div>
        <div
          className="dndnode number-add"
          onDragStart={(event) => onDragStart(event, "numberAdd")}
          draggable
        >
          Number Add Node
        </div>
        <div
          className="dndnode output"
          onDragStart={(event) => onDragStart(event, "output")}
          draggable
        >
          Output Node
        </div>
      </div>

      <PropertyBar />
    </aside>
  );
};

export default Sidebar;
