import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const NearestPointOnLineOptions: LvtNodeDef = {
  _id: "NearestPointOnLineOptions",
  ui: {
    title: "NearestPointOnLineOptions",
    description: "Options of NearestPointOnLine",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "NearestPointOnLineOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any) => {
    return packageSpreadValue(
      { _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "NearestPointOnLineOptions", ["units"]);
    return node;
  },
};

export default NearestPointOnLineOptions;