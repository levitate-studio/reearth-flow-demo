import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const UnkinkPolygon: LvtNodeDef = {
  _id: "UnkinkPolygon",
  ui: {
    title: "UnkinkPolygon",
    description: "Takes a kinked polygon and returns a feature collection of polygons that have no kinks. Uses simplepolygon internally.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature <(Polygon|MultiPolygon)>)",
    },
  ],
  portsOut: [
    {
      name: "UnkinkPolygon",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.unkinkPolygon, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "UnkinkPolygon", ["geojson"]);
    return node;
  },
};

export default UnkinkPolygon;