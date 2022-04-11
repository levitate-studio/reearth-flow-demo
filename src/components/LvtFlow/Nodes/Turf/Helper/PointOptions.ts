import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointOptions: LvtNodeDef = {
  _id: "PointOptions",
  ui: {
    title: "PointOptions",
    description: "Options of Point",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "(Array <number>)",
    },{
      name: "id",
      dataType: "((string|number))",
    },
  ],
  portsOut: [
    {
      name: "PointOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any, _id: any) => {
    return packageSpreadValue(
      { _bbox, _id }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PointOptions", ["bbox", "id"]);
    return node;
  },
};

export default PointOptions;