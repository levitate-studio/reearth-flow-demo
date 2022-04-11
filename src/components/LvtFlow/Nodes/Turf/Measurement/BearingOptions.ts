import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BearingOptions: LvtNodeDef = {
  _id: "BearingOptions",
  ui: {
    title: "BearingOptions",
    description: "Options of Bearing",
  },
  portsIn: [
    {
      name: "final",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "BearingOptions",
      dataType: "object",
    },
  ],
  rule: (_final: any) => {
    return packageSpreadValue(
      { _final }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BearingOptions", ["final"]);
    return node;
  },
};

export default BearingOptions;