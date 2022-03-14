import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RectangleCoordinates: LvtNodeDef = {
  _id: "RectangleCoordinates",
  ui: {
    title: "RectangleCoordinates",
    description: "A set of coordinates describing a cartographic rectangle on the surface of the ellipsoid.",
  },
  portsIn: [
    {
      name: "wsen",
      dataType: "CartographicRectangleRadiansValue",
      ui:{
        description: "The set of coordinates specified as Cartographic values `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in radians."
      },
    },{
      name: "wsenDegrees",
      dataType: "CartographicRectangleDegreesValue",
      ui:{
        description: "The set of coordinates specified as Cartographic values `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in degrees."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The set of coordinates specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "RectangleCoordinates",
      dataType: "RectangleCoordinates",
    },
  ],
  rule: (_wsen: any, _wsenDegrees: any, _reference: any) => {
    return packageSpreadValue(
      { _wsen, _wsenDegrees, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RectangleCoordinates", ["wsen", "wsenDegrees", "reference"]);
    return node;
  },
};

export default RectangleCoordinates;