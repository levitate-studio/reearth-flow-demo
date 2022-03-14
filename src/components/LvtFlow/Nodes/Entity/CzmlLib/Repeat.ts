import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Repeat: LvtNodeDef = {
  _id: "Repeat",
  ui: {
    title: "Repeat",
    description: "The number of times an image repeats along each axis.",
  },
  portsIn: [
    {
      name: "cartesian2",
      dataType: "Cartesian2Value",
      ui:{
        description: "The number of times the image repeats along each axis."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The number of times the image repeats specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Repeat",
      dataType: "Repeat",
    },
  ],
  rule: (_cartesian2: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian2, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Repeat", ["cartesian2", "reference"]);
    return node;
  },
};

export default Repeat;