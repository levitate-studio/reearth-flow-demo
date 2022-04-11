import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GeometryCollectionOptions: LvtNodeDef = {
  _id: "GeometryCollectionOptions",
  ui: {
    title: "GeometryCollectionOptions",
    description: "Options of GeometryCollection",
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
      name: "GeometryCollectionOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any, _id: any) => {
    return packageSpreadValue(
      { _bbox, _id }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "GeometryCollectionOptions", ["bbox", "id"]);
    return node;
  },
};

export default GeometryCollectionOptions;