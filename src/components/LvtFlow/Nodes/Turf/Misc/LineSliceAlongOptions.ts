import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineSliceAlongOptions: LvtNodeDef = {
  _id: "LineSliceAlongOptions",
  ui: {
    title: "LineSliceAlongOptions",
    description: "Options of LineSliceAlong",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "LineSliceAlongOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any) => {
    return packageSpreadValue(
      { _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineSliceAlongOptions", ["units"]);
    return node;
  },
};

export default LineSliceAlongOptions;