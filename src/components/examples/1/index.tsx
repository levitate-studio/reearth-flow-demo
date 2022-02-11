import { useState } from "react";
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  Background,
  Elements,
  Edge,
  Connection,
  MiniMap,
} from "react-flow-renderer";

import initialElements from "./initial-elements";
import "./style.css";

const onLoad = (reactFlowInstance: { fitView: () => void }) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

export type Props = {
  path?: string;
};

const Playground: React.FC<Props> = () => {
  const [elements, setElements] = useState<Elements>(initialElements);
  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params: Edge<any> | Connection) =>
    setElements((els) => addEdge(params, els));

  return (
    <div>
      <h2 className="title">initialElements</h2>
      <div style={{ height: 800 }}>
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          onLoad={onLoad}
          snapToGrid={true}
          snapGrid={[15, 15]}
        >
          <MiniMap
            nodeStrokeColor={"#0041d0"}
            nodeColor={"#fff"}
            nodeBorderRadius={2}
          />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Playground;
