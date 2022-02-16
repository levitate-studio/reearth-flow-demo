import { useState, useRef, createContext, useEffect } from "react";
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
  FlowElement,
  Position,
  // useStoreState,
  isEdge,
} from "react-flow-renderer";

import NumberAddNode from "./NumberAddNode";
import NumberAddPlusNode from "./NumberAddPlusNode";
import NumberInputNode from "./NumberInputNode";
import Sidebar from "./Sidebar";

import "./css/index.css";
import "./css/sidebar.css";
import "./css/nodes.css";

const nodeTypes = {
  numberInput: NumberInputNode,
  numberAdd: NumberAddNode,
  numberAddPlus: NumberAddPlusNode,
};

// node ids
// =======================================
let id = 0;
const getId = () => `n_${id++}`;

// debugger
// =======================================
const NodesDebugger = () => {
  // const nodes = useStoreState((state) => state.nodes);
  // console.log(nodes);
  return null;
};

// context
// =======================================
const CurrentElementContext = createContext<FlowElement | null>(null);
const HistoryContext = createContext<any>([]);

export type Props = {
  path?: string;
};

const ExampleB: React.FC<Props> = () => {
  // console.log("re-render example-b");
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>([]);

  // history
  const [history, setHistory] = useState<any>([]);
  const addHistory = (action: string) => {
    setTimeout(() => {
      const elements = reactFlowInstance.getElements();
      console.log("elements changed:", elements);

      // setHistory(
      //   history.concat({
      //     action,
      //     elements,
      //   })
      // );
      setHistory((h: any) =>
        h.concat({
          action,
          elements,
        })
      );
      console.log("added history", history);
    }, 1);
  };
  const jumpHistory = (index: number) => {
    console.log("jump history", index);
    setElements([...history[index].elements]);
  };

  // useEffect(() => {
  //   console.log("effect", elements);
  // }, [elements, setElements]);

  // property bar
  const [currentElement, setCurrentElement] = useState<FlowElement | null>(
    null
  );

  const onNodeDataUpdate = (nodeId: string) => {
    const elements = reactFlowInstance.getElements();
    const element = elements.find((item: FlowElement) => item.id === nodeId);
    if (element) {
      setCurrentElement(element);

      // update target
      const edges = elements.filter(
        (item: FlowElement) => isEdge(item) && item.source === element.id
      );
      if (edges) {
        edges.forEach((edge: Edge) => {
          elements.find((item: Edge) => item.id === edge.target).data.attr[
            edge.targetHandle as string
          ] = elements.find((item: Edge) => item.id === edge.source).data.attr[
            edge.sourceHandle as string
          ];
        });
      }

      setElements((els: Elements) => [...els]);
    }

    console.log("node data update");
    console.log(history);
    addHistory(`Update node data: ${nodeId}`);
  };

  const onNodeRun = (nodeId: string) => {
    const elements = reactFlowInstance.getElements();
    const edges = elements.filter(
      (item: any) => isEdge(item) && item.target === nodeId
    );
    if (edges) {
      edges.forEach((edge: Edge) => {
        elements.find((item: Edge) => item.id === edge.target).data.attr[
          edge.targetHandle as string
        ] = elements.find((item: Edge) => item.id === edge.source).data.attr[
          edge.sourceHandle as string
        ];
      });
    }
    // console.log(edges);
  };

  const onConnect = (params: Edge | Connection) => {
    // remove exist source
    const elements = reactFlowInstance.getElements();
    const edges = elements.filter(
      (item: any) =>
        isEdge(item) &&
        item.target === params.target &&
        item.targetHandle === params.targetHandle
    );
    if (edges.length > 0) {
      onElementsRemove(edges);
    }

    elements.find((item: FlowElement) => item.id === params.target).data.attr[
      params.targetHandle as string
    ] = elements.find(
      (item: FlowElement) => item.id === params.source
    ).data.attr[params.sourceHandle as string];

    // add edge
    setElements((els: Elements) => addEdge(params, els));

    // update action hash
    addHistory(`Connent nodes: ${params.source}-${params.target}`);
  };

  const onElementsRemove = (elementsToRemove: Elements) => {
    setElements((els: Elements) => removeElements(elementsToRemove, els));
    let nodeIds = "";
    elementsToRemove.forEach((e) => {
      nodeIds += ` ${e.id}`;
    });
    addHistory(`Delete node: ${nodeIds}`);
  };

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
          onUpdate: onNodeDataUpdate,
          onRun: onNodeRun,
        },
      };

      setElements((es) => es.concat(newNode));
      addHistory(`Create node: ${id}`);

      console.log(elements);

      // update action hash
    }
  };

  const onNodeDragStop = (event: any, node: FlowElement) => {
    // update action hash
    console.log("node drag stop", node.id);
    addHistory(`Move node: ${node.id}`);
    setElements((els) => [...els]);
  };

  const onSelectionChange = (elements: Elements<any> | null) => {
    if (elements && elements.length === 1) {
      setCurrentElement(elements[0]);
      console.log(elements[0]);
    } else {
      setCurrentElement(null);
    }
  };

  return (
    <div className="rf-eg-b">
      <HistoryContext.Provider value={history}>
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
                onNodeDragStop={onNodeDragStop}
                snapToGrid={true}
                snapGrid={[15, 15]}
                defaultZoom={1.5}
                nodeTypes={nodeTypes}
                deleteKeyCode={46}
              >
                <MiniMap
                  nodeStrokeColor={(n) => {
                    if (n.style?.background)
                      return n.style.background.toString();
                    if (n.type === "input") return "#0041d0";
                    if (n.type === "output") return "#ff0072";
                    if (n.type === "default") return "#1a192b";
                    return "#000";
                  }}
                  nodeColor={(n) => {
                    if (n.style?.background)
                      return n.style.background.toString();
                    return "#000";
                  }}
                  nodeBorderRadius={2}
                />
                <Controls />
                <Background color="#666" gap={15} />
                <NodesDebugger />
              </ReactFlow>
            </div>
            <Sidebar onHistoryClick={jumpHistory} />
          </ReactFlowProvider>
        </CurrentElementContext.Provider>
      </HistoryContext.Provider>
    </div>
  );
};

export { ExampleB, CurrentElementContext, HistoryContext };
