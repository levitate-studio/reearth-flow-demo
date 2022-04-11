import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RandomPolygonOptions: LvtNodeDef = {
  _id: "RandomPolygonOptions",
  ui: {
    title: "RandomPolygonOptions",
    description: "Options of RandomPolygon",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Array <number>",
    },{
      name: "num_vertices",
      dataType: "number",
    },{
      name: "max_radial_length",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "RandomPolygonOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any, _num_vertices: any, _max_radial_length: any) => {
    return packageSpreadValue(
      { _bbox, _num_vertices, _max_radial_length }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RandomPolygonOptions", ["bbox", "num_vertices", "max_radial_length"]);
    return node;
  },
};

export default RandomPolygonOptions;