import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CoordAll: LvtNodeDef = {
  _id: "CoordAll",
  ui: {
    title: "CoordAll",
    description: "Get all coordinates from any GeoJSON object.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature|Geometry)",
    },
  ],
  portsOut: [
    {
      name: "CoordAll",
      dataType: "Turf.Array <Array <number>>",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.coordAll, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "CoordAll", ["geojson"]);
    return node;
  },
};

export default CoordAll;