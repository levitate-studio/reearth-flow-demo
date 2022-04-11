import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SegmentReduce: LvtNodeDef = {
  _id: "SegmentReduce",
  ui: {
    title: "SegmentReduce",
    description: "Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce() (Multi)Point geometries do not contain segments therefore they are ignored during this operation.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature|Geometry)",
    },{
      name: "callback",
      dataType: "Turf.Function",
    },{
      name: "initialValue",
      dataType: "Turf.(*)",
    },
  ],
  portsOut: [
    {
      name: "SegmentReduce",
      dataType: "Turf.undefined",
    },
  ],
  rule: (_geojson: any, _callback: any, _initialValue: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.segmentReduce, [_geojson, _callback, _initialValue]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "SegmentReduce", ["geojson", "callback", "initialValue"]);
    return node;
  },
};

export default SegmentReduce;