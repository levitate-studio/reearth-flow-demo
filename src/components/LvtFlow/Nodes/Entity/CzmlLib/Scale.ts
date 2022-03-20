import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Scale: LvtNodeDef = {
  _id: "Scale",
  ui: {
    title: "Scale",
    description: "A scaling factor which can optionally vary over time.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The scale specified as a three-dimensional Cartesian value `[X, Y, Z]`."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The scale specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Scale",
      dataType: "Scale",
    },
  ],
  rule: (_cartesian: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Scale", ["cartesian", "reference"]);
    return node;
  },
};

export default Scale;