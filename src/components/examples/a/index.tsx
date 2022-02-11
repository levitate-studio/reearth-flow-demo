import { useState, useRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Background,
  MiniMap,
  OnLoadParams,
  Edge,
  Connection,
  Elements,
  Position,
} from "react-flow-renderer";

import NumberInputNode from "./NumberInputNode";
import Sidebar from "./Sidebar";

import "./dnd.css";

const nodeTypes = {
  numberInput: NumberInputNode,
};

const initialElements = [
  // {
  //   id: "2",
  //   type: "numberInput",
  //   data: {},
  //   position: { x: 300, y: 50 },
  // },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

export type Props = {
  path?: string;
};

const DnDFlow: React.FC<Props> = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>(initialElements);
  const onConnect = (params: Edge | Connection) =>
    setElements((els: Elements) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els: Elements) => removeElements(elementsToRemove, els));

  const onLoad = (reactFlowInstance: OnLoadParams) => {
    setReactFlowInstance(reactFlowInstance);
    reactFlowInstance.fitView();
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event: any) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
    if (reactFlowBounds) {
      const type = event.dataTransfer.getData("application/reactflow");
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: `${type} node` },
      };

      setElements((es) => es.concat(newNode));
    }
  };

  return (
    <div className="dnd-flow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            snapToGrid={true}
            snapGrid={[15, 15]}
            defaultZoom={1.5}
            nodeTypes={nodeTypes}
          >
            <MiniMap
              nodeStrokeColor={(n) => {
                if (n.style?.background) return n.style.background.toString();
                if (n.type === "input") return "#0041d0";
                if (n.type === "output") return "#ff0072";
                if (n.type === "default") return "#1a192b";
                return "#000";
              }}
              nodeColor={(n) => {
                if (n.style?.background) return n.style.background.toString();
                return "#000";
              }}
              nodeBorderRadius={2}
            />
            <Controls />
            <Background color="#666" gap={15} />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
