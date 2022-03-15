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
  isEdge,
  isNode,
} from "react-flow-renderer";

import { LvtFlowContext } from "../../../pages/Editor/index";
import NodesInputMenu from "../NodesInputMenu";

import "./df-canvas.css";
import BasicNode from "./BasicNode";

const nodeTypes = {
  basicNode: BasicNode,
};

let lastClickTime = 0;

const DataFlowCanvas = ({ cref }: any) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>([]);
  const lvtFlow = useContext(LvtFlowContext);

  useImperativeHandle(cref, () => ({
    exportData: () => {
      return reactFlowInstance.toObject();
    },
    clearData: () => {
      setElements([]);
    },
    importData: (flow: any) => {
      setElements([]);
      if (flow) {
        setElements(flow.elements);
      }
      setTimeout(() => {
        reactFlowInstance.fitView();
      }, 0);
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
  const addNode = ({ nodeId, pos, reactFlowBounds }: any) => {
    const position = reactFlowInstance.project({
      x: pos.clientX - reactFlowBounds.left,
      y: pos.clientY - reactFlowBounds.top,
    });
    const node = lvtFlow.addNode({ nodeId });
    if (node) {
      setElements((es: any) =>
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
  };
  const onDrop = (event: any) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
    if (reactFlowBounds) {
      const nodeId = event.dataTransfer.getData("application/reactflow");
      if (nodeId) {
        addNode({
          nodeId,
          pos: {
            clientX: event.clientX,
            clientY: event.clientY,
          },
          reactFlowBounds,
        });
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
    hideNodesInputMenu();
  };

  // =======================================
  // Event: onSelectionChange
  // =======================================
  const onNodeDragStart = () => {
    hideNodesInputMenu();
  };

  // =======================================
  // Event: onDoubleClick
  // =======================================
  const onPaneClick = (event: any) => {
    const now = new Date().getTime();
    if (now - lastClickTime < 300) {
      const reactFlowBounds =
        reactFlowWrapper?.current?.getBoundingClientRect();
      if (reactFlowBounds) {
        (nodesInputMenuRef.current as any).show({
          pos: {
            clientX: event.clientX,
            clientY: event.clientY,
          },
          reactFlowBounds,
        });
      }
    } else {
      lastClickTime = now;
      hideNodesInputMenu();
    }
  };

  // =======================================
  // Nodes Input Menu
  // =======================================
  const nodesInputMenuRef = useRef();
  const hideNodesInputMenu = () => {
    (nodesInputMenuRef.current as any).hide();
  };
  // =======================================
  // Event: onAddNodeFromMenu
  // =======================================
  const onAddNodeFromMenu = ({ nodeId, pos }: any) => {
    const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
    if (reactFlowBounds) {
      addNode({
        nodeId,
        pos,
        reactFlowBounds,
      });
    }
  };

  // =======================================
  // Event: onKeyDown
  // =======================================
  // const onKeyDown = (event: KeyboardEvent) => {
  //   pressedKeys.Control = event.key === "Control" ? true : pressedKeys.Control;
  //   pressedKeys.C = event.key === "c" ? true : pressedKeys.C;
  //   pressedKeys.V = event.key === "v" ? true : pressedKeys.V;
  //   if (pressedKeys.Control && pressedKeys.C) {
  //     console.log("ctrl+c");
  //   }
  //   console.log("down", event.key, pressedKeys.Control, pressedKeys.C);
  // };

  // =======================================
  // Event: onKeyUp
  // =======================================
  // const onKeyUp = (event: KeyboardEvent) => {
  //   pressedKeys.Control = event.key === "Control" ? false : pressedKeys.Control;
  //   pressedKeys.C = event.key === "c" ? false : pressedKeys.C;
  //   pressedKeys.V = event.key === "v" ? false : pressedKeys.V;
  //   console.log("up", event.key, pressedKeys.Control, pressedKeys.C);
  // };

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
            onNodeDragStart={onNodeDragStart}
            snapToGrid={true}
            snapGrid={[20, 20]}
            defaultZoom={1.2}
            nodeTypes={nodeTypes}
            deleteKeyCode={46}
            onPaneClick={onPaneClick}
            // onKeyDown={onKeyDown}
            // onKeyUp={onKeyUp}
            zoomOnDoubleClick={false}
          >
            <Controls />
          </ReactFlow>
          <NodesInputMenu
            cref={nodesInputMenuRef}
            addNodeFromMenu={onAddNodeFromMenu}
          />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DataFlowCanvas;
