import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GreatCircleOptions: LvtNodeDef = {
  _id: "GreatCircleOptions",
  ui: {
    title: "GreatCircleOptions",
    description: "Options of GreatCircle",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },{
      name: "npoints",
      dataType: "number",
    },{
      name: "offset",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "GreatCircleOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any, _npoints: any, _offset: any) => {
    return packageSpreadValue(
      { _properties, _npoints, _offset }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "GreatCircleOptions", ["properties", "npoints", "offset"]);
    return node;
  },
};

export default GreatCircleOptions;