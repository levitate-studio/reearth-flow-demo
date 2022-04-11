import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const IntersectOptions: LvtNodeDef = {
  _id: "IntersectOptions",
  ui: {
    title: "IntersectOptions",
    description: "Options of Intersect",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "IntersectOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any) => {
    return packageSpreadValue(
      { _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "IntersectOptions", ["properties"]);
    return node;
  },
};

export default IntersectOptions;