import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PositionListOfLists: LvtNodeDef = {
  _id: "PositionListOfLists",
  ui: {
    title: "PositionListOfLists",
    description: "A list of lists of positions.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3ListOfListsValue",
      ui:{
        description: "The list of lists of positions specified as three-dimensional Cartesian values, `[X, Y, Z, X, Y, Z, ...]`, in meters relative to the `referenceFrame`."
      },
    },{
      name: "cartographicRadians",
      dataType: "CartographicRadiansListOfListsValue",
      ui:{
        description: "The list of lists of positions specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height, Longitude, Latitude, Height, ...]`, where Longitude and Latitude are in radians and Height is in meters."
      },
    },{
      name: "cartographicDegrees",
      dataType: "CartographicDegreesListOfListsValue",
      ui:{
        description: "The list of lists of positions specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height, Longitude, Latitude, Height, ...]`, where Longitude and Latitude are in degrees and Height is in meters."
      },
    },{
      name: "references",
      dataType: "ReferenceListOfListsValue",
      ui:{
        description: "The list of lists of positions specified as references. Each reference is to a property that defines a single position, which may change with time."
      },
    },
  ],
  portsOut: [
    {
      name: "PositionListOfLists",
      dataType: "PositionListOfLists",
    },
  ],
  rule: (_cartesian: any, _cartographicRadians: any, _cartographicDegrees: any, _references: any) => {
    return packageSpreadValue(
      { _cartesian, _cartographicRadians, _cartographicDegrees, _references }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PositionListOfLists", ["cartesian", "cartographicRadians", "cartographicDegrees", "references"]);
    return node;
  },
};

export default PositionListOfLists;