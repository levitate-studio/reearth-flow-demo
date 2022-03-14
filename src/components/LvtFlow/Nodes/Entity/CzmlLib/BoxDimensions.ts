import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BoxDimensions: LvtNodeDef = {
  _id: "BoxDimensions",
  ui: {
    title: "BoxDimensions",
    description: "The width, depth, and height of a box.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The dimensions specified as a three-dimensional Cartesian value `[X, Y, Z]`, with X representing width, Y representing depth, and Z representing height, in world coordinates in meters."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The dimensions specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "BoxDimensions",
      dataType: "BoxDimensions",
    },
  ],
  rule: (_cartesian: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BoxDimensions", ["cartesian", "reference"]);
    return node;
  },
};

export default BoxDimensions;