import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineThickness: LvtNodeDef = {
  _id: "LineThickness",
  ui: {
    title: "LineThickness",
    description: "The thickness of grid lines along each axis, in pixels.",
  },
  portsIn: [
    {
      name: "cartesian2",
      dataType: "Cartesian2Value",
      ui:{
        description: "The thickness specified as a two-dimensional Cartesian value `[X, Y]`, in pixels."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The thickness specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "LineThickness",
      dataType: "LineThickness",
    },
  ],
  rule: (_cartesian2: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian2, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineThickness", ["cartesian2", "reference"]);
    return node;
  },
};

export default LineThickness;