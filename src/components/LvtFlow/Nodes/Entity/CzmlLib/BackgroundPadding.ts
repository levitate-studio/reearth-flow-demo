import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BackgroundPadding: LvtNodeDef = {
  _id: "BackgroundPadding",
  ui: {
    title: "BackgroundPadding",
    description: "The amount of horizontal and vertical padding, in pixels, between a label's text and its background.",
  },
  portsIn: [
    {
      name: "cartesian2",
      dataType: "Cartesian2Value",
      ui:{
        description: "The background padding specified as a two-dimensional Cartesian value `[X, Y]`, in pixels, where X is the horizontal padding, and Y is the vertical padding."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The background padding specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "BackgroundPadding",
      dataType: "BackgroundPadding",
    },
  ],
  rule: (_cartesian2: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian2, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BackgroundPadding", ["cartesian2", "reference"]);
    return node;
  },
};

export default BackgroundPadding;