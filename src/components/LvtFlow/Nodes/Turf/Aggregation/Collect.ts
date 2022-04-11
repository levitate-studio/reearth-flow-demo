import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Collect: LvtNodeDef = {
  _id: "Collect",
  ui: {
    title: "Collect",
    description: "Merges a specified property from a FeatureCollection of points into a FeatureCollection of polygons. Given an inProperty on points and an outProperty for polygons, this finds every point that lies within each polygon, collects the inProperty values from those points, and adds them as an array to outProperty on the polygon.",
  },
  portsIn: [
    {
      name: "polygons",
      dataType: "Turf.FeatureCollection <Polygon>",
    },{
      name: "points",
      dataType: "Turf.FeatureCollection <Point>",
    },{
      name: "inProperty",
      dataType: "Turf.string",
    },{
      name: "outProperty",
      dataType: "Turf.string",
    },
  ],
  portsOut: [
    {
      name: "Collect",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_polygons: any, _points: any, _inProperty: any, _outProperty: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.collect, [_polygons, _points, _inProperty, _outProperty]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Collect", ["polygons", "points", "inProperty", "outProperty"]);
    return node;
  },
};

export default Collect;