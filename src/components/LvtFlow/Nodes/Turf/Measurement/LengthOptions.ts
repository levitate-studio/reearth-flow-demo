import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LengthOptions: LvtNodeDef = {
  _id: "LengthOptions",
  ui: {
    title: "LengthOptions",
    description: "Options of Length",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "LengthOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any) => {
    return packageSpreadValue(
      { _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LengthOptions", ["units"]);
    return node;
  },
};

export default LengthOptions;