import { useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import ReactFlow, {
  removeElements,
  addEdge,
  isEdge,
  MiniMap,
  Controls,
  Elements,
  Edge,
  Position,
  Connection,
  Node,
  ConnectionLineType,
} from "react-flow-renderer";

import ColorSelectorNode from "./ColorSelectorNode";

const onNodeDragStop = (event: ReactMouseEvent, node: Node) =>
  console.log("drag stop", node);
const onElementClick = (event: ReactMouseEvent, element: Node | Edge) =>
  console.log("click", element);
const onLoad = (graph: any) => console.log("graph loaded:", graph);

const initBgColor = "#f0e742";

export type Props = {
  path?: string;
};

const CustomNodeFlow: React.FC<Props> = () => {
  const [elements, setElements] = useState<Elements>([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    const onChange = (evt: any) => {
      setElements((els: Elements) =>
        els.map((e: Node | Edge) => {
          if (isEdge(e) || e.id !== "2") {
            return e;
          }

          const color = evt.target.value;

          setBgColor(color);

          return {
            ...e,
            data: {
              ...e.data,
              color,
            },
          } as Node;
        })
      );
    };

    setElements([
      {
        id: "1",
        type: "input",
        data: { label: "An input node" },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: "2",
        type: "selectorNode",
        data: { onChange: onChange, color: initBgColor },
        position: { x: 250, y: 50 },
      },
      {
        id: "3",
        type: "output",
        data: { label: "Output A" },
        position: { x: 550, y: 25 },
        targetPosition: Position.Left,
      },
      {
        id: "4",
        type: "output",
        data: { label: "Output B" },
        position: { x: 550, y: 100 },
        targetPosition: Position.Left,
      },

      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e2a-3",
        source: "2__a",
        target: "3",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e2b-4",
        source: "2__b",
        target: "4",
        animated: true,
        style: { stroke: "#fff" },
      },
    ] as Elements);
  }, []);

  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els: Elements) => removeElements(elementsToRemove, els));
  const onConnect = (connection: Edge | Connection) =>
    setElements((els: Elements) => addEdge(connection, els));

  return (
    <div>
      <h2 className="title">Custom Node</h2>
      <div style={{ height: 800 }}>
        <ReactFlow
          elements={elements}
          onElementClick={onElementClick}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          onNodeDragStop={onNodeDragStop}
          style={{ width: "100%", height: "600px", background: bgColor }}
          onLoad={onLoad}
          nodeTypes={{
            selectorNode: ColorSelectorNode,
          }}
          connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
          connectionLineType={ConnectionLineType.Bezier}
          // backgroundColor="#888"
          // backgroundGap={16}
          snapToGrid={true}
          snapGrid={[16, 16]}
        >
          <MiniMap
            nodeColor={(n: Node) => {
              if (n.type === "input") return "blue";
              if (n.type === "selectorNode") return bgColor;
              if (n.type === "output") return "green";

              return "gray";
            }}
          />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default CustomNodeFlow;
