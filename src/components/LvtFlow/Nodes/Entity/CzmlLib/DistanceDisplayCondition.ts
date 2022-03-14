import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const DistanceDisplayCondition: LvtNodeDef = {
  _id: "DistanceDisplayCondition",
  ui: {
    title: "DistanceDisplayCondition",
    description: "Indicates the visibility of an object based on the distance to the camera.",
  },
  portsIn: [
    {
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayConditionValue",
      ui:{
        description: "The value specified as two values `[NearDistance, FarDistance]`, with distances in meters."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The value specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "DistanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
    },
  ],
  rule: (_distanceDisplayCondition: any, _reference: any) => {
    return packageSpreadValue(
      { _distanceDisplayCondition, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "DistanceDisplayCondition", ["distanceDisplayCondition", "reference"]);
    return node;
  },
};

export default DistanceDisplayCondition;