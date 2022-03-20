import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const StripeOrientation: LvtNodeDef = {
  _id: "StripeOrientation",
  ui: {
    title: "StripeOrientation",
    description: "The orientation of stripes in a stripe material.",
  },
  portsIn: [
    {
      name: "stripeOrientation",
      dataType: "StripeOrientationValue",
      ui:{
        description: "The orientation of stripes in the stripe material."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The orientation of stripes specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "StripeOrientation",
      dataType: "StripeOrientation",
    },
  ],
  rule: (_stripeOrientation: any, _reference: any) => {
    return packageSpreadValue(
      { _stripeOrientation, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "StripeOrientation", ["stripeOrientation", "reference"]);
    return node;
  },
};

export default StripeOrientation;