import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const AlongOptions: LvtNodeDef = {
  _id: "AlongOptions",
  ui: {
    title: "AlongOptions",
    description: "Options of Along",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "AlongOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any) => {
    return packageSpreadValue(
      { _units }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "AlongOptions", ["units"]);
    return node;
  },
};

export default AlongOptions;