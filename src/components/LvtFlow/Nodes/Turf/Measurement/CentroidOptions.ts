import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CentroidOptions: LvtNodeDef = {
  _id: "CentroidOptions",
  ui: {
    title: "CentroidOptions",
    description: "Options of Centroid",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "CentroidOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any) => {
    return packageSpreadValue(
      { _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "CentroidOptions", ["properties"]);
    return node;
  },
};

export default CentroidOptions;