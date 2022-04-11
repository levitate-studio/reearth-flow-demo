import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PropReduce: LvtNodeDef = {
  _id: "PropReduce",
  ui: {
    title: "PropReduce",
    description: "Reduce properties in any GeoJSON object into a single value, similar to how Array.reduce works. However, in this case we lazily run the reduction, so an array of all properties is unnecessary.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature)",
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
      name: "PropReduce",
      dataType: "Turf.*",
    },
  ],
  rule: (_geojson: any, _callback: any, _initialValue: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.propReduce, [_geojson, _callback, _initialValue]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PropReduce", ["geojson", "callback", "initialValue"]);
    return node;
  },
};

export default PropReduce;