import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SquareGridOptions: LvtNodeDef = {
  _id: "SquareGridOptions",
  ui: {
    title: "SquareGridOptions",
    description: "Options of SquareGrid",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "mask",
      dataType: "(Feature <(Polygon|MultiPolygon)>)",
    },{
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "SquareGridOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _mask: any, _properties: any) => {
    return packageSpreadValue(
      { _units, _mask, _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "SquareGridOptions", ["units", "mask", "properties"]);
    return node;
  },
};

export default SquareGridOptions;