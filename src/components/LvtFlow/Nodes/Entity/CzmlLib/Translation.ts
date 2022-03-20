import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Translation: LvtNodeDef = {
  _id: "Translation",
  ui: {
    title: "Translation",
    description: "A translational offset which can optionally vary over time.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The translation specified as a three-dimensional Cartesian value `[X, Y, Z]`, in meters."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The translation specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Translation",
      dataType: "Translation",
    },
  ],
  rule: (_cartesian: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Translation", ["cartesian", "reference"]);
    return node;
  },
};

export default Translation;