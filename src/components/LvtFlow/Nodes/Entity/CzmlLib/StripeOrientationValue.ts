import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const StripeOrientationValue: LvtNodeDef = {
  _id: "StripeOrientationValue",
  ui: {
    title: "StripeOrientationValue",
    description: "The orientation of stripes in the stripe material.",
  },
  portsIn: [
    {
      name: "value",
      dataType: "string",
      ui: {
        component: "Select",
        componentOptions: {
          selectorSourceType: "self",
          selectorOptions: [
            {
              title: "",
              value: undefined,
            },
            {
              title: "HORIZONTAL",
              value: "HORIZONTAL"
            },{
              title: "VERTICAL",
              value: "VERTICAL"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "StripeOrientationValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "StripeOrientationValue", ["value"]);
    return node;
  },
};

export default StripeOrientationValue;