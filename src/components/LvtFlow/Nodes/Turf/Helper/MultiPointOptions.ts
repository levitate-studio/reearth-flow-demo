import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const MultiPointOptions: LvtNodeDef = {
  _id: "MultiPointOptions",
  ui: {
    title: "MultiPointOptions",
    description: "Options of MultiPoint",
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
      name: "MultiPointOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any, _id: any) => {
    return packageSpreadValue(
      { _bbox, _id }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "MultiPointOptions", ["bbox", "id"]);
    return node;
  },
};

export default MultiPointOptions;