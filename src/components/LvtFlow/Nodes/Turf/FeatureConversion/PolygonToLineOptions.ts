import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolygonToLineOptions: LvtNodeDef = {
  _id: "PolygonToLineOptions",
  ui: {
    title: "PolygonToLineOptions",
    description: "Options of PolygonToLine",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "PolygonToLineOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any) => {
    return packageSpreadValue(
      { _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolygonToLineOptions", ["properties"]);
    return node;
  },
};

export default PolygonToLineOptions;