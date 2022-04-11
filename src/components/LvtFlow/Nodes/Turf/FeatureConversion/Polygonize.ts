import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Polygonize: LvtNodeDef = {
  _id: "Polygonize",
  ui: {
    title: "Polygonize",
    description: "Polygonizes (Multi)LineString(s) into Polygons.",
  },
  portsIn: [
    {
      name: "geoJson",
      dataType: "Turf.(FeatureCollection|Geometry|Feature <(LineString|MultiLineString)>)",
    },
  ],
  portsOut: [
    {
      name: "Polygonize",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_geoJson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.polygonize, [_geoJson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Polygonize", ["geoJson"]);
    return node;
  },
};

export default Polygonize;