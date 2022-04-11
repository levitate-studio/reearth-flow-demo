import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointGridOptions: LvtNodeDef = {
  _id: "PointGridOptions",
  ui: {
    title: "PointGridOptions",
    description: "Options of PointGrid",
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
      name: "PointGridOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _mask: any, _properties: any) => {
    return packageSpreadValue(
      { _units, _mask, _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PointGridOptions", ["units", "mask", "properties"]);
    return node;
  },
};

export default PointGridOptions;