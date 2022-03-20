import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const DirectionList: LvtNodeDef = {
  _id: "DirectionList",
  ui: {
    title: "DirectionList",
    description: "A list of directions.",
  },
  portsIn: [
    {
      name: "spherical",
      dataType: "SphericalListValue",
      ui:{
        description: "The list of directions specified as spherical values `[Clock, Cone, Magnitude, Clock, Cone, Magnitude, ...]`, with angles in radians and magnitude in meters. The clock angle is measured in the XY plane from the positive X axis toward the positive Y axis. The cone angle is the angle from the positive Z axis toward the negative Z axis."
      },
    },{
      name: "unitSpherical",
      dataType: "UnitSphericalListValue",
      ui:{
        description: "The list of directions specified as unit spherical values `[Clock, Cone, Clock, Cone, ...]`, in radians. The clock angle is measured in the XY plane from the positive X axis toward the positive Y axis. The cone angle is the angle from the positive Z axis toward the negative Z axis."
      },
    },{
      name: "cartesian",
      dataType: "Cartesian3ListValue",
      ui:{
        description: "The list of directions specified as three-dimensional Cartesian values `[X, Y, Z, X, Y, Z, ...]`, in world coordinates in meters."
      },
    },{
      name: "unitCartesian",
      dataType: "UnitCartesian3ListValue",
      ui:{
        description: "The list of directions specified as three-dimensional unit magnitude Cartesian values, `[X, Y, Z, X, Y, Z, ...]`, in world coordinates in meters."
      },
    },
  ],
  portsOut: [
    {
      name: "DirectionList",
      dataType: "DirectionList",
    },
  ],
  rule: (_spherical: any, _unitSpherical: any, _cartesian: any, _unitCartesian: any) => {
    return packageSpreadValue(
      { _spherical, _unitSpherical, _cartesian, _unitCartesian }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "DirectionList", ["spherical", "unitSpherical", "cartesian", "unitCartesian"]);
    return node;
  },
};

export default DirectionList;