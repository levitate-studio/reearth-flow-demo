import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineOffset: LvtNodeDef = {
  _id: "LineOffset",
  ui: {
    title: "LineOffset",
    description: "The offset of grid lines along each axis, as a percentage from 0 to 1.",
  },
  portsIn: [
    {
      name: "cartesian2",
      dataType: "Cartesian2Value",
      ui:{
        description: "The offset of grid lines along each axis, specified as a percentage from 0 to 1."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The offset of grid lines along each axis specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "LineOffset",
      dataType: "LineOffset",
    },
  ],
  rule: (_cartesian2: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian2, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineOffset", ["cartesian2", "reference"]);
    return node;
  },
};

export default LineOffset;