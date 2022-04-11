import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ConcaveOptions: LvtNodeDef = {
  _id: "ConcaveOptions",
  ui: {
    title: "ConcaveOptions",
    description: "Options of Concave",
  },
  portsIn: [
    {
      name: "maxEdge",
      dataType: "number",
    },{
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "ConcaveOptions",
      dataType: "object",
    },
  ],
  rule: (_maxEdge: any, _units: any) => {
    return packageSpreadValue(
      { _maxEdge, _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ConcaveOptions", ["maxEdge", "units"]);
    return node;
  },
};

export default ConcaveOptions;