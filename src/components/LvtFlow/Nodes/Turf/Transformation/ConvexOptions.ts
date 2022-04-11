import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ConvexOptions: LvtNodeDef = {
  _id: "ConvexOptions",
  ui: {
    title: "ConvexOptions",
    description: "Options of Convex",
  },
  portsIn: [
    {
      name: "concavity",
      dataType: "number",
    },{
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "ConvexOptions",
      dataType: "object",
    },
  ],
  rule: (_concavity: any, _properties: any) => {
    return packageSpreadValue(
      { _concavity, _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ConvexOptions", ["concavity", "properties"]);
    return node;
  },
};

export default ConvexOptions;