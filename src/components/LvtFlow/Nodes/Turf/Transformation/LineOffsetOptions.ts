import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineOffsetOptions: LvtNodeDef = {
  _id: "LineOffsetOptions",
  ui: {
    title: "LineOffsetOptions",
    description: "Options of LineOffset",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "LineOffsetOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any) => {
    return packageSpreadValue(
      { _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineOffsetOptions", ["units"]);
    return node;
  },
};

export default LineOffsetOptions;