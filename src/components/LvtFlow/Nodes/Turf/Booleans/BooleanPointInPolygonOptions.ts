import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanPointInPolygonOptions: LvtNodeDef = {
  _id: "BooleanPointInPolygonOptions",
  ui: {
    title: "BooleanPointInPolygonOptions",
    description: "Options of BooleanPointInPolygon",
  },
  portsIn: [
    {
      name: "ignoreBoundary",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "BooleanPointInPolygonOptions",
      dataType: "object",
    },
  ],
  rule: (_ignoreBoundary: any) => {
    return packageSpreadValue(
      { _ignoreBoundary }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanPointInPolygonOptions", ["ignoreBoundary"]);
    return node;
  },
};

export default BooleanPointInPolygonOptions;