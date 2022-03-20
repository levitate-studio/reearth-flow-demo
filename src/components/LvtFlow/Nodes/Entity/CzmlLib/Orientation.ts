import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Orientation: LvtNodeDef = {
  _id: "Orientation",
  ui: {
    title: "Orientation",
    description: "Defines an orientation. An orientation is a rotation that takes a vector expressed in the 'body' axes of the object and transforms it to the Earth fixed axes.",
  },
  portsIn: [
    {
      name: "unitQuaternion",
      dataType: "UnitQuaternionValue",
      ui:{
        description: "The orientation specified as a 4-dimensional unit magnitude quaternion, specified as `[X, Y, Z, W]`."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The orientation specified as a reference to another property."
      },
    },{
      name: "velocityReference",
      dataType: "VelocityReferenceValue",
      ui:{
        description: "The orientation specified as the normalized velocity vector of a position property. The reference must be to a `position` property."
      },
    },
  ],
  portsOut: [
    {
      name: "Orientation",
      dataType: "Orientation",
    },
  ],
  rule: (_unitQuaternion: any, _reference: any, _velocityReference: any) => {
    return packageSpreadValue(
      { _unitQuaternion, _reference, _velocityReference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Orientation", ["unitQuaternion", "reference", "velocityReference"]);
    return node;
  },
};

export default Orientation;