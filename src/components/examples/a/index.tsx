import { useState, useRef, createContext } from "react";
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
  useStoreState,
  isEdge,
} from "react-flow-renderer";

import NumberAddNode from "./NumberAddNode";
import NumberInputNode from "./NumberInputNode";
import Sidebar from "./Sidebar";

import "./dnd.css";

const nodeTypes = {
  numberInput: NumberInputNode,
  numberAdd: NumberAddNode,
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

const NodesDebugger = () => {
  const nodes = useStoreState((state) => state.nodes);
  console.log(nodes);
  return null;
};

export type Props = {
  path?: string;
};

const CurrentElementContext = createContext(null);

const DnDFlow: React.FC<Props> = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>(initialElements);

  // property bar
  const [currentElement, setCurrentElement] = useState({});
  const onNodeDataChange = (nodeId) => {
    const element = reactFlowInstance
      .getElements()
      .find((item) => item.id === nodeId);
    if (element) {
      setCurrentElement(element);
    }
  };

  const onNodeRun = (nodeId: string) => {
    const elements = reactFlowInstance.getElements();
    console.log(elements);
    const edges = elements.filter(
      (item: Node<any> | Element<any> | Edge<any>) =>
        isEdge(item) && item.target === nodeId
    );
    if (edges) {
      edges.forEach((edge) => {
        elements.find((item) => item.id === edge.target).data.attr[
          edge.targetHandle
        ] = elements.find((item) => item.id === edge.source).data.attr[
          edge.sourceHandle
        ];
      });
    }
    console.log(edges);
  };

  const onConnect = (params: Edge | Connection) => {
    setElements((els: Elements) => addEdge(params, els));
  };

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
      const id = getId();
      const newNode = {
        id,
        type,
        position,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {
          label: `${type}`,
          attr: {
            id: id,
          },
          onChange: onNodeDataChange,
          onRun: onNodeRun,
        },
      };

      setElements((es) => es.concat(newNode));
    }
  };

  const onSelectionChange = (elements: Elements<any> | null) => {
    if (elements && elements.length === 1) {
      setCurrentElement(elements[0]);
      console.log(currentElement);
    } else {
      setCurrentElement({});
    }
  };

  return (
    <div className="dnd-flow">
      <CurrentElementContext.Provider value={currentElement}>
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              onLoad={onLoad}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onSelectionChange={onSelectionChange}
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
              <NodesDebugger />
            </ReactFlow>
          </div>
          <Sidebar />
        </ReactFlowProvider>
      </CurrentElementContext.Provider>
    </div>
  );
};

export { DnDFlow, CurrentElementContext };
