import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RandomLineStringOptions: LvtNodeDef = {
  _id: "RandomLineStringOptions",
  ui: {
    title: "RandomLineStringOptions",
    description: "Options of RandomLineString",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Array <number>",
    },{
      name: "num_vertices",
      dataType: "number",
    },{
      name: "max_length",
      dataType: "number",
    },{
      name: "max_rotation",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "RandomLineStringOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any, _num_vertices: any, _max_length: any, _max_rotation: any) => {
    return packageSpreadValue(
      { _bbox, _num_vertices, _max_length, _max_rotation }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RandomLineStringOptions", ["bbox", "num_vertices", "max_length", "max_rotation"]);
    return node;
  },
};

export default RandomLineStringOptions;