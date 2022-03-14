import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineCount: LvtNodeDef = {
  _id: "LineCount",
  ui: {
    title: "LineCount",
    description: "The number of grid lines along each axis.",
  },
  portsIn: [
    {
      name: "cartesian2",
      dataType: "Cartesian2Value",
      ui:{
        description: "The number of grid lines along each axis."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The number of grid lines along each axis specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "LineCount",
      dataType: "LineCount",
    },
  ],
  rule: (_cartesian2: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian2, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineCount", ["cartesian2", "reference"]);
    return node;
  },
};

export default LineCount;