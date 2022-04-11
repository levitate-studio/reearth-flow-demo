import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HexGridOptions: LvtNodeDef = {
  _id: "HexGridOptions",
  ui: {
    title: "HexGridOptions",
    description: "Options of HexGrid",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "properties",
      dataType: "Object",
    },{
      name: "mask",
      dataType: "(Feature <Polygon>)",
    },{
      name: "triangles",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "HexGridOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _properties: any, _mask: any, _triangles: any) => {
    return packageSpreadValue(
      { _units, _properties, _mask, _triangles }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "HexGridOptions", ["units", "properties", "mask", "triangles"]);
    return node;
  },
};

export default HexGridOptions;