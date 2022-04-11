import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RhumbDistanceOptions: LvtNodeDef = {
  _id: "RhumbDistanceOptions",
  ui: {
    title: "RhumbDistanceOptions",
    description: "Options of RhumbDistance",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "RhumbDistanceOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any) => {
    return packageSpreadValue(
      { _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RhumbDistanceOptions", ["units"]);
    return node;
  },
};

export default RhumbDistanceOptions;