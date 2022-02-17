import { useState, useRef, createContext, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Background,
  OnLoadParams,
  Edge,
  Connection,
  Elements,
  FlowElement,
  Position,
  isEdge,
} from "react-flow-renderer";

import * as Assist from "./Assist";
import * as Nodes from "./Nodes";
import NodesBlock from "./NodesBlock";
import OutputBlock from "./OutputBlock";
import PropertyBlock from "./PropertyBlock";

import "./css/reset.css";
import "./css/rf.css";
import "./css/rf-custom.css";

export type Props = {
  path?: string;
};

const dataset: any = [];
const addToDataset = (id: string, data: any) => {
  dataset[id] = data;
  console.log(dataset);
};

const ExampleC: React.FC<Props> = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>([]);

  // =======================================
  // Dataset
  // =======================================

  // =======================================
  // Event: onLoad
  // =======================================
  const onLoad = (reactFlowInstance: OnLoadParams) => {
    setReactFlowInstance(reactFlowInstance);
    reactFlowInstance.fitView();
  };

  // =======================================
  // Event: onDragOver
  // =======================================
  const onDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  // =======================================
  // Event: onDrop
  // =======================================
  const onDrop = (event: any) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
    if (reactFlowBounds) {
      const nodeId = event.dataTransfer.getData("application/reactflow");
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const id = Assist.getGUID();
      const newNode = {
        id,
        type: Nodes.datas[nodeId].nodeType,
        position,
        data: { ...Nodes.datas[nodeId] },
      };
      setElements((es) => es.concat(newNode));
      addToDataset(id, { ...Nodes.datas[nodeId] });

      // console.log(newNode);
      // console.log(dataset);
    }
  };

  // =======================================
  // Event: onConnect
  // =======================================
  const onConnect = (params: Edge | Connection) => {
    // remove exist source
    // const elements = reactFlowInstance.getElements();
    // const edges = elements.filter(
    //   (item: any) =>
    //     isEdge(item) &&
    //     item.target === params.target &&
    //     item.targetHandle === params.targetHandle
    // );
    // if (edges.length > 0) {
    //   onElementsRemove(edges);
    // }

    // elements.find((item: FlowElement) => item.id === params.target).data.attr[
    //   params.targetHandle as string
    // ] = elements.find(
    //   (item: FlowElement) => item.id === params.source
    // ).data.attr[params.sourceHandle as string];

    console.log(params);

    // add edge
    setElements((els: Elements) => addEdge(params, els));
  };

  // =======================================
  // Event: onSelectionChange
  // =======================================
  const [currentElementId, setCurrentElementId] = useState("");
  const onSelectionChange = (elements: Elements<any> | null) => {
    if (elements && elements.length === 1) {
      setCurrentElementId(elements[0].id);
    } else {
      setCurrentElementId("");
    }
    // console.log(current.elementId);
    // console.log(dataset);
  };

  return (
    <div className="rf">
      <ReactFlowProvider>
        <div className="rf-main">
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              // onElementsRemove={onElementsRemove}
              onLoad={onLoad}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onSelectionChange={onSelectionChange}
              // onNodeDragStop={onNodeDragStop}
              snapToGrid={true}
              snapGrid={[20, 20]}
              defaultZoom={1.2}
              nodeTypes={Nodes.types}
              deleteKeyCode={46}
            >
              <Controls />
              <Background color="#555" gap={20} />
            </ReactFlow>
          </div>
          <OutputBlock />
        </div>
        <div className="rf-sidebar">
          <NodesBlock />
          <PropertyBlock
            currentElementId={currentElementId}
            dataset={dataset}
          />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export { ExampleC };
