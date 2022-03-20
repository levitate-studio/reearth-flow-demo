import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Direction: LvtNodeDef = {
  _id: "Direction",
  ui: {
    title: "Direction",
    description: "A unit vector, in world coordinates, that defines a direction.",
  },
  portsIn: [
    {
      name: "spherical",
      dataType: "SphericalValue",
      ui:{
        description: "The direction specified as a spherical value `[Clock, Cone, Magnitude]`, with angles in radians and magnitude in meters. The clock angle is measured in the XY plane from the positive X axis toward the positive Y axis. The cone angle is the angle from the positive Z axis toward the negative Z axis."
      },
    },{
      name: "unitSpherical",
      dataType: "UnitSphericalValue",
      ui:{
        description: "The direction specified as a unit spherical value `[Clock, Cone]`, in radians. The clock angle is measured in the XY plane from the positive X axis toward the positive Y axis. The cone angle is the angle from the positive Z axis toward the negative Z axis."
      },
    },{
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The direction specified as a three-dimensional Cartesian value `[X, Y, Z]`, in world coordinates in meters."
      },
    },{
      name: "unitCartesian",
      dataType: "UnitCartesian3Value",
      ui:{
        description: "The direction specified as a three-dimensional unit magnitude Cartesian value `[X, Y, Z]`, in world coordinates in meters."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The direction specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Direction",
      dataType: "Direction",
    },
  ],
  rule: (_spherical: any, _unitSpherical: any, _cartesian: any, _unitCartesian: any, _reference: any) => {
    return packageSpreadValue(
      { _spherical, _unitSpherical, _cartesian, _unitCartesian, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Direction", ["spherical", "unitSpherical", "cartesian", "unitCartesian", "reference"]);
    return node;
  },
};

export default Direction;