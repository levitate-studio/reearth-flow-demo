import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Shape: LvtNodeDef = {
  _id: "Shape",
  ui: {
    title: "Shape",
    description: "A list of two-dimensional positions defining a shape.",
  },
  portsIn: [
    {
      name: "cartesian2",
      dataType: "Cartesian2ListValue",
      ui:{
        description: "The list of positions specified as two-dimensional Cartesian values `[X, Y, X, Y, ...]`."
      },
    },
  ],
  portsOut: [
    {
      name: "Shape",
      dataType: "Shape",
    },
  ],
  rule: (_cartesian2: any) => {
    return packageSpreadValue(
      { _cartesian2 }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Shape", ["cartesian2"]);
    return node;
  },
};

export default Shape;