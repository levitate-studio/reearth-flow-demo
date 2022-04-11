import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolygonSmoothOptions: LvtNodeDef = {
  _id: "PolygonSmoothOptions",
  ui: {
    title: "PolygonSmoothOptions",
    description: "Options of PolygonSmooth",
  },
  portsIn: [
    {
      name: "iterations",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "PolygonSmoothOptions",
      dataType: "object",
    },
  ],
  rule: (_iterations: any) => {
    return packageSpreadValue(
      { _iterations }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolygonSmoothOptions", ["iterations"]);
    return node;
  },
};

export default PolygonSmoothOptions;