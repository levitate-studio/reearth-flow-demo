import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BezierSplineOptions: LvtNodeDef = {
  _id: "BezierSplineOptions",
  ui: {
    title: "BezierSplineOptions",
    description: "Options of BezierSpline",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },{
      name: "resolution",
      dataType: "number",
    },{
      name: "sharpness",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "BezierSplineOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any, _resolution: any, _sharpness: any) => {
    return packageSpreadValue(
      { _properties, _resolution, _sharpness }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BezierSplineOptions", ["properties", "resolution", "sharpness"]);
    return node;
  },
};

export default BezierSplineOptions;