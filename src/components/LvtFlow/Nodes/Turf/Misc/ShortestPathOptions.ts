import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ShortestPathOptions: LvtNodeDef = {
  _id: "ShortestPathOptions",
  ui: {
    title: "ShortestPathOptions",
    description: "Options of ShortestPath",
  },
  portsIn: [
    {
      name: "obstacles",
      dataType: "((Geometry|Feature|FeatureCollection <Polygon>))",
    },{
      name: "minDistance",
      dataType: "(number)",
    },{
      name: "units",
      dataType: "string",
    },{
      name: "resolution",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "ShortestPathOptions",
      dataType: "object",
    },
  ],
  rule: (_obstacles: any, _minDistance: any, _units: any, _resolution: any) => {
    return packageSpreadValue(
      { _obstacles, _minDistance, _units, _resolution }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ShortestPathOptions", ["obstacles", "minDistance", "units", "resolution"]);
    return node;
  },
};

export default ShortestPathOptions;