import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointToLineDistanceOptions: LvtNodeDef = {
  _id: "PointToLineDistanceOptions",
  ui: {
    title: "PointToLineDistanceOptions",
    description: "Options of PointToLineDistance",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "method",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "PointToLineDistanceOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _method: any) => {
    return packageSpreadValue(
      { _units, _method }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PointToLineDistanceOptions", ["units", "method"]);
    return node;
  },
};

export default PointToLineDistanceOptions;