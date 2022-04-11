import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GeometryCollection: LvtNodeDef = {
  _id: "GeometryCollection",
  ui: {
    title: "GeometryCollection",
    description: "Creates a Feature<GeometryCollection> based on a coordinate array. Properties can be added optionally.",
  },
  portsIn: [
    {
      name: "geometries",
      dataType: "Turf.Array <Geometry>",
    },{
      name: "properties",
      dataType: "Turf.Object",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "GeometryCollection",
      dataType: "Turf.Feature <GeometryCollection>",
    },
  ],
  rule: (_geometries: any, _properties: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.geometryCollection, [_geometries, _properties, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GeometryCollection", ["geometries", "properties", "options"]);
    return node;
  },
};

export default GeometryCollection;