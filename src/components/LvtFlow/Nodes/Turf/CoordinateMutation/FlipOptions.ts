import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const FlipOptions: LvtNodeDef = {
  _id: "FlipOptions",
  ui: {
    title: "FlipOptions",
    description: "Options of Flip",
  },
  portsIn: [
    {
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "FlipOptions",
      dataType: "object",
    },
  ],
  rule: (_mutate: any) => {
    return packageSpreadValue(
      { _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "FlipOptions", ["mutate"]);
    return node;
  },
};

export default FlipOptions;