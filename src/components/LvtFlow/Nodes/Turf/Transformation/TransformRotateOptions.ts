import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TransformRotateOptions: LvtNodeDef = {
  _id: "TransformRotateOptions",
  ui: {
    title: "TransformRotateOptions",
    description: "Options of TransformRotate",
  },
  portsIn: [
    {
      name: "pivot",
      dataType: "Coord",
    },{
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "TransformRotateOptions",
      dataType: "object",
    },
  ],
  rule: (_pivot: any, _mutate: any) => {
    return packageSpreadValue(
      { _pivot, _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "TransformRotateOptions", ["pivot", "mutate"]);
    return node;
  },
};

export default TransformRotateOptions;