import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SimplifyOptions: LvtNodeDef = {
  _id: "SimplifyOptions",
  ui: {
    title: "SimplifyOptions",
    description: "Options of Simplify",
  },
  portsIn: [
    {
      name: "tolerance",
      dataType: "number",
    },{
      name: "highQuality",
      dataType: "boolean",
    },{
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "SimplifyOptions",
      dataType: "object",
    },
  ],
  rule: (_tolerance: any, _highQuality: any, _mutate: any) => {
    return packageSpreadValue(
      { _tolerance, _highQuality, _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "SimplifyOptions", ["tolerance", "highQuality", "mutate"]);
    return node;
  },
};

export default SimplifyOptions;