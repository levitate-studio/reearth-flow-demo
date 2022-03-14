import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PositionList: LvtNodeDef = {
  _id: "PositionList",
  ui: {
    title: "PositionList",
    description: "A list of positions.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3ListValue",
      ui:{
        description: "The list of positions specified as three-dimensional Cartesian values, `[X, Y, Z, X, Y, Z, ...]`, in meters relative to the `referenceFrame`."
      },
    },{
      name: "cartographicRadians",
      dataType: "CartographicRadiansListValue",
      ui:{
        description: "The list of positions specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height, Longitude, Latitude, Height, ...]`, where Longitude and Latitude are in radians and Height is in meters."
      },
    },{
      name: "cartographicDegrees",
      dataType: "CartographicDegreesListValue",
      ui:{
        description: "The list of positions specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height, Longitude, Latitude, Height, ...]`, where Longitude and Latitude are in degrees and Height is in meters."
      },
    },{
      name: "references",
      dataType: "ReferenceListValue",
      ui:{
        description: "The list of positions specified as references. Each reference is to a property that defines a single position, which may change with time."
      },
    },
  ],
  portsOut: [
    {
      name: "PositionList",
      dataType: "PositionList",
    },
  ],
  rule: (_cartesian: any, _cartographicRadians: any, _cartographicDegrees: any, _references: any) => {
    return packageSpreadValue(
      { _cartesian, _cartographicRadians, _cartographicDegrees, _references }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PositionList", ["cartesian", "cartographicRadians", "cartographicDegrees", "references"]);
    return node;
  },
};

export default PositionList;