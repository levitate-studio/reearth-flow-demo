import { useState, useRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  OnLoadParams,
  Edge,
  Connection,
  Elements,
  // FlowElement,
  // Position,
  isEdge,
  isNode,
} from "react-flow-renderer";

import "./df-canvas.css";

export type Props = {
  dataManager: any;
};

const DataFlowCanvas: React.FC<Props> = ({ dataManager }) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>([]);

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
      const { id, nodeType, nodeDef } = dataManager.addNode(nodeId);
      const newNode = {
        id,
        type: nodeType,
        position,
        data: nodeDef,
      };
      setElements((es) => es.concat(newNode));
    }
  };

  // =======================================
  // Event: onElementsRemove
  // =======================================
  const onElementsRemove = (elementsToRemove: Elements) => {
    elementsToRemove.forEach((ele) => {
      if (isEdge(ele)) {
        dataManager.removeEdge(ele);
      } else if (isNode(ele)) {
        dataManager.removeNode(ele.id);
      }
    });

    setElements((els: Elements) => removeElements(elementsToRemove, els));
  };

  // =======================================
  // Event: onConnect
  // =======================================
  const onConnect = (params: Edge | Connection) => {
    // remove exists source
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

    // add edge
    setElements((els: Elements) => addEdge(params, els));

    // update data
    dataManager.addEdge(params);
  };

  // =======================================
  // Event: onSelectionChange
  // =======================================
  const onSelectionChange = (elements: Elements<any> | null) => {
    if (elements && elements.length === 1) {
      dataManager.setCurrentElement(elements[0].id);
    } else {
      dataManager.setCurrentElement();
    }
  };

  return (
    <div className="df-canvas">
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
            // onNodeDragStop={onNodeDragStop}
            snapToGrid={true}
            snapGrid={[20, 20]}
            defaultZoom={1.2}
            nodeTypes={dataManager.nodeTypes}
            deleteKeyCode={46}
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DataFlowCanvas;
