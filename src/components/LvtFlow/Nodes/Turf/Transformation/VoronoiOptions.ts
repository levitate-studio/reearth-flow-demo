import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const VoronoiOptions: LvtNodeDef = {
  _id: "VoronoiOptions",
  ui: {
    title: "VoronoiOptions",
    description: "Options of Voronoi",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Array <number>",
    },
  ],
  portsOut: [
    {
      name: "VoronoiOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any) => {
    return packageSpreadValue(
      { _bbox }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "VoronoiOptions", ["bbox"]);
    return node;
  },
};

export default VoronoiOptions;