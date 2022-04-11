import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RhumbBearingOptions: LvtNodeDef = {
  _id: "RhumbBearingOptions",
  ui: {
    title: "RhumbBearingOptions",
    description: "Options of RhumbBearing",
  },
  portsIn: [
    {
      name: "final",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "RhumbBearingOptions",
      dataType: "object",
    },
  ],
  rule: (_final: any) => {
    return packageSpreadValue(
      { _final }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RhumbBearingOptions", ["final"]);
    return node;
  },
};

export default RhumbBearingOptions;