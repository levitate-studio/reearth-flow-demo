import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineOverlapOptions: LvtNodeDef = {
  _id: "LineOverlapOptions",
  ui: {
    title: "LineOverlapOptions",
    description: "Options of LineOverlap",
  },
  portsIn: [
    {
      name: "tolerance",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "LineOverlapOptions",
      dataType: "object",
    },
  ],
  rule: (_tolerance: any) => {
    return packageSpreadValue(
      { _tolerance }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineOverlapOptions", ["tolerance"]);
    return node;
  },
};

export default LineOverlapOptions;