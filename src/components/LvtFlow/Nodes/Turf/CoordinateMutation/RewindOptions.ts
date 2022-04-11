import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RewindOptions: LvtNodeDef = {
  _id: "RewindOptions",
  ui: {
    title: "RewindOptions",
    description: "Options of Rewind",
  },
  portsIn: [
    {
      name: "reverse",
      dataType: "boolean",
    },{
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "RewindOptions",
      dataType: "object",
    },
  ],
  rule: (_reverse: any, _mutate: any) => {
    return packageSpreadValue(
      { _reverse, _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RewindOptions", ["reverse", "mutate"]);
    return node;
  },
};

export default RewindOptions;