import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ToMercatorOptions: LvtNodeDef = {
  _id: "ToMercatorOptions",
  ui: {
    title: "ToMercatorOptions",
    description: "Options of ToMercator",
  },
  portsIn: [
    {
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "ToMercatorOptions",
      dataType: "object",
    },
  ],
  rule: (_mutate: any) => {
    return packageSpreadValue(
      { _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ToMercatorOptions", ["mutate"]);
    return node;
  },
};

export default ToMercatorOptions;