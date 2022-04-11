import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const MultiLineStringOptions: LvtNodeDef = {
  _id: "MultiLineStringOptions",
  ui: {
    title: "MultiLineStringOptions",
    description: "Options of MultiLineString",
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
      name: "MultiLineStringOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any, _id: any) => {
    return packageSpreadValue(
      { _bbox, _id }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "MultiLineStringOptions", ["bbox", "id"]);
    return node;
  },
};

export default MultiLineStringOptions;