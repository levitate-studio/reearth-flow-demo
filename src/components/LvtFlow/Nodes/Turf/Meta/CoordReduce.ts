import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CoordReduce: LvtNodeDef = {
  _id: "CoordReduce",
  ui: {
    title: "CoordReduce",
    description: "Reduce coordinates in any GeoJSON object, similar to Array.reduce()",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Geometry|Feature)",
    },{
      name: "callback",
      dataType: "Turf.Function",
    },{
      name: "initialValue",
      dataType: "Turf.(*)",
    },{
      name: "excludeWrapCoord",
      dataType: "Turf.boolean",
    },
  ],
  portsOut: [
    {
      name: "CoordReduce",
      dataType: "Turf.*",
    },
  ],
  rule: (_geojson: any, _callback: any, _initialValue: any, _excludeWrapCoord: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.coordReduce, [_geojson, _callback, _initialValue, _excludeWrapCoord]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "CoordReduce", ["geojson", "callback", "initialValue", "excludeWrapCoord"]);
    return node;
  },
};

export default CoordReduce;