import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TriangleGridOptions: LvtNodeDef = {
  _id: "TriangleGridOptions",
  ui: {
    title: "TriangleGridOptions",
    description: "Options of TriangleGrid",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "mask",
      dataType: "(Feature <Polygon>)",
    },{
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "TriangleGridOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _mask: any, _properties: any) => {
    return packageSpreadValue(
      { _units, _mask, _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "TriangleGridOptions", ["units", "mask", "properties"]);
    return node;
  },
};

export default TriangleGridOptions;