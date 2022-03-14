import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const EyeOffset: LvtNodeDef = {
  _id: "EyeOffset",
  ui: {
    title: "EyeOffset",
    description: "An offset in eye coordinates which can optionally vary over time. Eye coordinates are a left-handed coordinate system where the X-axis points toward the viewer's right, the Y-axis poitns up, and the Z-axis points into the screen.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The eye offset specified as a three-dimensional Cartesian value `[X, Y, Z]`, in eye coordinates in meters. If the array has three elements, the eye offset is constant. If it has four or more elements, they are time-tagged samples arranged as `[Time, X, Y, Z, Time, X, Y, Z, ...]`, where Time is an ISO 8601 date and time string or seconds since epoch."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The eye offset specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "EyeOffset",
      dataType: "EyeOffset",
    },
  ],
  rule: (_cartesian: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "EyeOffset", ["cartesian", "reference"]);
    return node;
  },
};

export default EyeOffset;