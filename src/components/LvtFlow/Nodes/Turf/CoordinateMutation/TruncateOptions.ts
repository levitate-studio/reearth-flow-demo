import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TruncateOptions: LvtNodeDef = {
  _id: "TruncateOptions",
  ui: {
    title: "TruncateOptions",
    description: "Options of Truncate",
  },
  portsIn: [
    {
      name: "precision",
      dataType: "number",
    },{
      name: "coordinates",
      dataType: "number",
    },{
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "TruncateOptions",
      dataType: "object",
    },
  ],
  rule: (_precision: any, _coordinates: any, _mutate: any) => {
    return packageSpreadValue(
      { _precision, _coordinates, _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "TruncateOptions", ["precision", "coordinates", "mutate"]);
    return node;
  },
};

export default TruncateOptions;