import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CleanCoords: LvtNodeDef = {
  _id: "CleanCoords",
  ui: {
    title: "CleanCoords",
    description: "Removes redundant coordinates from any GeoJSON Geometry.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(Geometry|Feature)",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "CleanCoords",
      dataType: "Turf.(Geometry|Feature)",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.cleanCoords, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "CleanCoords", ["geojson", "options"]);
    return node;
  },
};

export default CleanCoords;