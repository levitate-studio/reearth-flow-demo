import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const DistanceOptions: LvtNodeDef = {
  _id: "DistanceOptions",
  ui: {
    title: "DistanceOptions",
    description: "Options of Distance",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "DistanceOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any) => {
    return packageSpreadValue(
      { _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "DistanceOptions", ["units"]);
    return node;
  },
};

export default DistanceOptions;