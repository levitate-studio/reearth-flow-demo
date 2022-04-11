import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GeomReduce: LvtNodeDef = {
  _id: "GeomReduce",
  ui: {
    title: "GeomReduce",
    description: "Reduce geometry in any GeoJSON object, similar to Array.reduce().",
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
      name: "GeomReduce",
      dataType: "Turf.*",
    },
  ],
  rule: (_geojson: any, _callback: any, _initialValue: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.geomReduce, [_geojson, _callback, _initialValue]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GeomReduce", ["geojson", "callback", "initialValue"]);
    return node;
  },
};

export default GeomReduce;