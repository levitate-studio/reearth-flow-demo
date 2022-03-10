import { useState, useRef, useContext, useImperativeHandle } from "react";
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

import { LvtFlowContext } from "../../../pages/Editor/index";

import "./df-canvas.css";
import BasicNode from "./BasicNode";

const nodeTypes = {
  basicNode: BasicNode,
};

const DataFlowCanvas = ({ cref }: any) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>([]);
  const lvtFlow = useContext(LvtFlowContext);

  useImperativeHandle(cref, () => ({
    exportData: () => {
      return elements;
    },
  }));

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
      const node = lvtFlow.addNode(nodeId);
      if (node) {
        setElements((es) =>
          es.concat({
            id: node.id,
            type: node.ui.nodeType,
            position,
            data: {
              nodeId: node.nodeId,
              isValidConnection: lvtFlow.isValidConnection,
            },
          })
        );
      }
    }
  };

  // =======================================
  // Event: onElementsRemove
  // =======================================
  const onElementsRemove = (elementsToRemove: Elements) => {
    elementsToRemove.forEach((ele) => {
      if (isEdge(ele)) {
        lvtFlow.removeEdge(ele);
      } else if (isNode(ele)) {
        lvtFlow.removeNode(ele.id);
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
    lvtFlow.addEdge(params);
  };

  // =======================================
  // Event: onSelectionChange
  // =======================================
  const onSelectionChange = (elements: Elements<any> | null) => {
    if (elements && elements.length === 1 && isNode(elements[0])) {
      lvtFlow.setCurrentElement(elements[0].id);
    } else {
      lvtFlow.setCurrentElement(null);
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
            nodeTypes={nodeTypes}
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
