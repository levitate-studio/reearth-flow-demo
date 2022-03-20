import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const AlignedAxis: LvtNodeDef = {
  _id: "AlignedAxis",
  ui: {
    title: "AlignedAxis",
    description: "An aligned axis represented by a unit vector which can optionally vary over time.",
  },
  portsIn: [
    {
      name: "unitCartesian",
      dataType: "UnitCartesian3Value",
      ui:{
        description: "The axis specified as a three-dimensional unit magnitude Cartesian value `[X, Y, Z]`, in world coordinates."
      },
    },{
      name: "unitSpherical",
      dataType: "UnitSphericalValue",
      ui:{
        description: "The axis specified as a unit spherical value `[Clock, Cone]`, in radians. The clock angle is measured in the XY plane from the positive X axis toward the positive Y axis. The cone angle is the angle from the positive Z axis toward the negative Z axis."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The axis specified as a reference to another property."
      },
    },{
      name: "velocityReference",
      dataType: "VelocityReferenceValue",
      ui:{
        description: "The axis specified as the normalized velocity vector of a position property. The reference must be to a `position` property."
      },
    },
  ],
  portsOut: [
    {
      name: "AlignedAxis",
      dataType: "AlignedAxis",
    },
  ],
  rule: (_unitCartesian: any, _unitSpherical: any, _reference: any, _velocityReference: any) => {
    return packageSpreadValue(
      { _unitCartesian, _unitSpherical, _reference, _velocityReference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "AlignedAxis", ["unitCartesian", "unitSpherical", "reference", "velocityReference"]);
    return node;
  },
};

export default AlignedAxis;