import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TransformScaleOptions: LvtNodeDef = {
  _id: "TransformScaleOptions",
  ui: {
    title: "TransformScaleOptions",
    description: "Options of TransformScale",
  },
  portsIn: [
    {
      name: "origin",
      dataType: "(string|Coord)",
    },{
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "TransformScaleOptions",
      dataType: "object",
    },
  ],
  rule: (_origin: any, _mutate: any) => {
    return packageSpreadValue(
      { _origin, _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "TransformScaleOptions", ["origin", "mutate"]);
    return node;
  },
};

export default TransformScaleOptions;