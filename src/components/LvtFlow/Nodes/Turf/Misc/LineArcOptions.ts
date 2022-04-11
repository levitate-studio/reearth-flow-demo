import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineArcOptions: LvtNodeDef = {
  _id: "LineArcOptions",
  ui: {
    title: "LineArcOptions",
    description: "Options of LineArc",
  },
  portsIn: [
    {
      name: "steps",
      dataType: "number",
    },{
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "LineArcOptions",
      dataType: "object",
    },
  ],
  rule: (_steps: any, _units: any) => {
    return packageSpreadValue(
      { _steps, _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineArcOptions", ["steps", "units"]);
    return node;
  },
};

export default LineArcOptions;