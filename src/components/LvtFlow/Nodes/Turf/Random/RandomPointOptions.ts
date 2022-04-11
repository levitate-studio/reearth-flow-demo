import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RandomPointOptions: LvtNodeDef = {
  _id: "RandomPointOptions",
  ui: {
    title: "RandomPointOptions",
    description: "Options of RandomPoint",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Array <number>",
    },
  ],
  portsOut: [
    {
      name: "RandomPointOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any) => {
    return packageSpreadValue(
      { _bbox }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RandomPointOptions", ["bbox"]);
    return node;
  },
};

export default RandomPointOptions;