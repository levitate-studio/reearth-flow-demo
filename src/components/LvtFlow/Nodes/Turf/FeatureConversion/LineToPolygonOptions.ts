import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineToPolygonOptions: LvtNodeDef = {
  _id: "LineToPolygonOptions",
  ui: {
    title: "LineToPolygonOptions",
    description: "Options of LineToPolygon",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },{
      name: "autoComplete",
      dataType: "boolean",
    },{
      name: "orderCoords",
      dataType: "boolean",
    },{
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "LineToPolygonOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any, _autoComplete: any, _orderCoords: any, _mutate: any) => {
    return packageSpreadValue(
      { _properties, _autoComplete, _orderCoords, _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineToPolygonOptions", ["properties", "autoComplete", "orderCoords", "mutate"]);
    return node;
  },
};

export default LineToPolygonOptions;