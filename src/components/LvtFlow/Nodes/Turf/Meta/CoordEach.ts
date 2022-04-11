import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CoordEach: LvtNodeDef = {
  _id: "CoordEach",
  ui: {
    title: "CoordEach",
    description: "Iterate over coordinates in any GeoJSON object, similar to Array.forEach()",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature|Geometry)",
    },{
      name: "callback",
      dataType: "Turf.Function",
    },{
      name: "excludeWrapCoord",
      dataType: "Turf.boolean",
    },
  ],
  portsOut: [
    {
      name: "CoordEach",
      dataType: "Turf.undefined",
    },
  ],
  rule: (_geojson: any, _callback: any, _excludeWrapCoord: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.coordEach, [_geojson, _callback, _excludeWrapCoord]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "CoordEach", ["geojson", "callback", "excludeWrapCoord"]);
    return node;
  },
};

export default CoordEach;