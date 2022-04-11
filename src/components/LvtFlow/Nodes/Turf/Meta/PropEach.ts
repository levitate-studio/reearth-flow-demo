import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PropEach: LvtNodeDef = {
  _id: "PropEach",
  ui: {
    title: "PropEach",
    description: "Iterate over properties in any GeoJSON object, similar to Array.forEach()",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature)",
    },{
      name: "callback",
      dataType: "Turf.Function",
    },
  ],
  portsOut: [
    {
      name: "PropEach",
      dataType: "Turf.undefined",
    },
  ],
  rule: (_geojson: any, _callback: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.propEach, [_geojson, _callback]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PropEach", ["geojson", "callback"]);
    return node;
  },
};

export default PropEach;