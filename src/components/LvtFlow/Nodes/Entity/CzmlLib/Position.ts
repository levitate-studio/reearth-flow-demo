import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Position: LvtNodeDef = {
  _id: "Position",
  ui: {
    title: "Position",
    description: "Defines a position. The position can optionally vary over time.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The position specified as a three-dimensional Cartesian value, `[X, Y, Z]`, in meters relative to the `referenceFrame`."
      },
    },{
      name: "cartographicRadians",
      dataType: "CartographicRadiansValue",
      ui:{
        description: "The position specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height]`, where Longitude and Latitude are in radians and Height is in meters."
      },
    },{
      name: "cartographicDegrees",
      dataType: "CartographicDegreesValue",
      ui:{
        description: "The position specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height]`, where Longitude and Latitude are in degrees and Height is in meters."
      },
    },{
      name: "cartesianVelocity",
      dataType: "Cartesian3VelocityValue",
      ui:{
        description: "The position and velocity specified as a three-dimensional Cartesian value and its derivative, `[X, Y, Z, dX, dY, dZ]`, in meters relative to the `referenceFrame`."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The position specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Position",
      dataType: "Position",
    },
  ],
  rule: (_cartesian: any, _cartographicRadians: any, _cartographicDegrees: any, _cartesianVelocity: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian, _cartographicRadians, _cartographicDegrees, _cartesianVelocity, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Position", ["cartesian", "cartographicRadians", "cartographicDegrees", "cartesianVelocity", "reference"]);
    return node;
  },
};

export default Position;