import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Rotation: LvtNodeDef = {
  _id: "Rotation",
  ui: {
    title: "Rotation",
    description: "Defines a rotation that transforms a vector expressed in one axes and transforms it to another.",
  },
  portsIn: [
    {
      name: "unitQuaternion",
      dataType: "UnitQuaternionValue",
      ui:{
        description: "The rotation specified as a 4-dimensional unit magnitude quaternion, specified as `[X, Y, Z, W]`."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The rotation specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Rotation",
      dataType: "Rotation",
    },
  ],
  rule: (_unitQuaternion: any, _reference: any) => {
    return packageSpreadValue(
      { _unitQuaternion, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Rotation", ["unitQuaternion", "reference"]);
    return node;
  },
};

export default Rotation;