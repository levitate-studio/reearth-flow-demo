import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const UnionOptions: LvtNodeDef = {
  _id: "UnionOptions",
  ui: {
    title: "UnionOptions",
    description: "Options of Union",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "UnionOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any) => {
    return packageSpreadValue(
      { _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "UnionOptions", ["properties"]);
    return node;
  },
};

export default UnionOptions;