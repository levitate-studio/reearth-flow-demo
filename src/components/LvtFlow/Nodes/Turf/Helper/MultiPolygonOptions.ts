import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const MultiPolygonOptions: LvtNodeDef = {
  _id: "MultiPolygonOptions",
  ui: {
    title: "MultiPolygonOptions",
    description: "Options of MultiPolygon",
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
      name: "MultiPolygonOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any, _id: any) => {
    return packageSpreadValue(
      { _bbox, _id }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "MultiPolygonOptions", ["bbox", "id"]);
    return node;
  },
};

export default MultiPolygonOptions;