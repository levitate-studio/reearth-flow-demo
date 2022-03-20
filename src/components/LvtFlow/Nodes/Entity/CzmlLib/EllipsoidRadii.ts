import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const EllipsoidRadii: LvtNodeDef = {
  _id: "EllipsoidRadii",
  ui: {
    title: "EllipsoidRadii",
    description: "The radii of an ellipsoid.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The radii specified as a three-dimensional Cartesian value `[X, Y, Z]`, in world coordinates in meters."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The radii specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "EllipsoidRadii",
      dataType: "EllipsoidRadii",
    },
  ],
  rule: (_cartesian: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "EllipsoidRadii", ["cartesian", "reference"]);
    return node;
  },
};

export default EllipsoidRadii;