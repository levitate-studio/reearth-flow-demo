import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SegmentEach: LvtNodeDef = {
  _id: "SegmentEach",
  ui: {
    title: "SegmentEach",
    description: "Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach() (Multi)Point geometries do not contain segments therefore they are ignored during this operation.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature|Geometry)",
    },{
      name: "callback",
      dataType: "Turf.Function",
    },
  ],
  portsOut: [
    {
      name: "SegmentEach",
      dataType: "Turf.undefined",
    },
  ],
  rule: (_geojson: any, _callback: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.segmentEach, [_geojson, _callback]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "SegmentEach", ["geojson", "callback"]);
    return node;
  },
};

export default SegmentEach;